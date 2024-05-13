
namespace PolicySummary.Sheet1.Data
{
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using VAMLibrary.Core;
    using VAMLibrary.Core.Common;
    using QAMS.Admin.Entities;
    using QAMS.WEB.Data;
    using QAMS.Common.Entities;


    // Comment
    public class worktransferregistrationoinitiationData : IworktransferregistrationoinitiationData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public worktransferregistrationoinitiationData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllworktransferregistrationoinitiation(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_GET, worktransferregistrationoinitiationConstants.wtriid, DbType.Int32, wtriid, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferdescription, Value = worktransferregistrationoinitiation.worktransferdescription });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferfrom, Value = worktransferregistrationoinitiation.worktransferfrom });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.tasklist, Value = worktransferregistrationoinitiation.tasklist });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferto, Value = worktransferregistrationoinitiation.worktransferto });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = worktransferregistrationoinitiationConstants.validupto, Value = worktransferregistrationoinitiation.validupto });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.CreatedBy, Value = worktransferregistrationoinitiation.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.ModifiedBy, Value = worktransferregistrationoinitiation.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            try
            {
                List<SqlParameter> sqlparms = new()
                {
                    new SqlParameter { DbType = DbType.Int32, ParameterName = worktransferregistrationoinitiationConstants.wtriid, Value = worktransferregistrationoinitiation.wtriid },
                    new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferdescription, Value = worktransferregistrationoinitiation.worktransferdescription },
                    new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferfrom, Value = worktransferregistrationoinitiation.worktransferfrom },
                    new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.tasklist, Value = worktransferregistrationoinitiation.tasklist },
                    new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.worktransferto, Value = worktransferregistrationoinitiation.worktransferto },
                    new SqlParameter { DbType = DbType.DateTime, ParameterName = worktransferregistrationoinitiationConstants.validupto, Value = worktransferregistrationoinitiation.validupto },
                    new SqlParameter { DbType = DbType.String, ParameterName = worktransferregistrationoinitiationConstants.ModifiedBy, Value = worktransferregistrationoinitiation.ModifiedBy }
                };
                Object result = dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_DELETE, worktransferregistrationoinitiationConstants.wtriid, DbType.Int32, wtriid, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllworktransferregistrationoinitiation(List<int> wtriids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(worktransferregistrationoinitiationConstants.USP_worktransferregistrationoinitiation_PSY_DELETE_ALL, worktransferregistrationoinitiationConstants.wtriid, DbType.String, string.Join(',',  wtriids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
