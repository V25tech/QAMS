using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using QAMS.WEB.API.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using Serilog;
using Serilog.Events;
using Serilog.Filters;
using VAMLIbrary.Core;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using QAMS.Services;
using QAMS.WEB.Services;
using QAMS.WEB.Data;

namespace QAMS.WEB.API
{
    public class Startup
    {
        public Startup(IConfiguration _configuration, IHostingEnvironment _hostingEnvironment)
        {
            Configuration = _configuration;
            hostingEnvironment = _hostingEnvironment;
        }

        public IConfiguration Configuration { get; }
        private readonly IHostingEnvironment hostingEnvironment;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            string xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
            services.AddSwaggerService(xmlFile);
           

            RegisterSerilogProvider(services);

            services.RegisterDatabaseProvider(Configuration);
            services.AddSingleton<ExceptionHelper>();
            services.RegisterLocalServices();
            services.AddScoped<INewdocumentService, NewdocumentService>();
            services.AddScoped<INewdocumentData, NewdocumentData>();

            services.AddCors(option =>
            {
                option.AddDefaultPolicy(
                    policy =>
                    {
                        policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });
        }

        #region Serilog_Fns
        private void RegisterSerilogProvider(IServiceCollection services)
        {
            LogEventLevel logEventLevel;
            bool isValidLevelSpecified = Enum.TryParse(Configuration.GetValue<string>("LogEventLevel"), true, out logEventLevel);
            if (isValidLevelSpecified == false)
            {
                logEventLevel = LogEventLevel.Debug;
            }

            services.AddSingleton((ILogger)new LoggerConfiguration()
                  .MinimumLevel.Verbose()
                  .WriteTo.Logger(appLog => appLog.Filter.ByExcluding(e => IsTraceLogEvent(e))
                            .WriteTo.File(GetAbsoluteLogFilePath(Configuration.GetValue<string>("AppLogFilePathFormat")),
                            fileSizeLimitBytes: null,
                            rollingInterval: RollingInterval.Day,
                            outputTemplate: Configuration.GetValue<string>("LogOutputTemplate"),
                            restrictedToMinimumLevel: logEventLevel))
                  .WriteTo.Logger(traceLog => traceLog.Filter.ByIncludingOnly(e => IsTraceLogEvent(e))
                            .WriteTo.File(GetAbsoluteLogFilePath(Configuration.GetValue<string>("TraceLogFilePathFormat")),
                            rollingInterval: RollingInterval.Day,
                            fileSizeLimitBytes: null,
                            outputTemplate: Configuration.GetValue<string>("LogOutputTemplate"),
                            restrictedToMinimumLevel: logEventLevel)).CreateLogger());
        }

        private static bool IsTraceLogEvent(LogEvent evt)
        {
            bool isAPITraceLogEvent = Matching.FromSource<RequestResponseLoggingMiddleware>()(evt);
            return isAPITraceLogEvent;
        }
        private string GetAbsoluteLogFilePath(string configuredLogFilePath)
        {
            string absoluteLogFilePath = Path.IsPathRooted(configuredLogFilePath)
                    ? configuredLogFilePath
                    : Path.Combine(hostingEnvironment.ContentRootPath, configuredLogFilePath);

            return absoluteLogFilePath;
        }
        #endregion

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors();

            app.UseHttpsRedirection();

            app.UseMiddleware<RequestResponseLoggingMiddleware>();

            app.ConfigureCustomExceptionMiddleware();

            app.UseRouting();

            app.UseAuthorization();

            app.AddSwaggerMiddleware();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
