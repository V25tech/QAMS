namespace QAMS.WEB.API.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using QAMS.Admin.Services;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;

    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/worktransferregistrationoinitiation")]
    public class worktransferregistrationoinitiationController : ControllerBase
    {
        
        private readonly IWorktransferregistrationoinitiationService worktransferregistrationoinitiationService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="worktransferregistrationoinitiationService"></param>
        public worktransferregistrationoinitiationController(IWorktransferregistrationoinitiationService worktransferregistrationoinitiationService)
        {
            this.worktransferregistrationoinitiationService = worktransferregistrationoinitiationService;
        }
        
        /// <summary>
        /// This method is used to Get List of worktransferregistrationoinitiation
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<worktransferregistrationoinitiation>> GetAllworktransferregistrationoinitiation(RequestContext requestContext)
        {
            var result = worktransferregistrationoinitiationService.GetAllworktransferregistrationoinitiation(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get worktransferregistrationoinitiation By Id wtriid
        /// </summary>
        /// <param name="wtriid"></param>
        [HttpGet("{wtriid}")]
        public ActionResult<worktransferregistrationoinitiation> GetworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            var result = worktransferregistrationoinitiationService.GetworktransferregistrationoinitiationBywtriid(wtriid);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save worktransferregistrationoinitiation
        /// </summary>
        /// <param name="worktransferregistrationoinitiation"></param>
        [HttpPost("saveworktransferregistrationoinitiation")]
        public ActionResult<System.Boolean> Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            var result = worktransferregistrationoinitiationService.Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update worktransferregistrationoinitiation
        /// </summary>
        /// <param name="worktransferregistrationoinitiation"></param>
        [HttpPost("updateworktransferregistrationoinitiation")]
        public ActionResult<System.Boolean> Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            var result = worktransferregistrationoinitiationService.Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete worktransferregistrationoinitiation By Id wtriid
        /// </summary>
        /// <param name="wtriid"></param>
        [HttpDelete("{wtriid}")]
        public ActionResult<bool> DeleteworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            var result = worktransferregistrationoinitiationService.DeleteworktransferregistrationoinitiationBywtriid(wtriid);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete worktransferregistrationoinitiation By Multiple ids wtriids
        /// </summary>
        /// <param name="wtriids"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllworktransferregistrationoinitiation(List<int> wtriids)
        {
            var result = worktransferregistrationoinitiationService.DeleteAllworktransferregistrationoinitiation(wtriids);
            return result;
        }
    }
}
