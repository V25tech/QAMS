//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;
    using QAMS.WEB.Services;
    
    
    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/changecontolqaapproval")]
    public class ChangeContolQaApprovalController : ControllerBase
    {
        
        private readonly IChangeContolQaApprovalService changeContolQaApprovalService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeContolQaApprovalService"></param>
        public ChangeContolQaApprovalController(IChangeContolQaApprovalService changeContolQaApprovalService)
        {
            this.changeContolQaApprovalService = changeContolQaApprovalService;
        }
        
        /// <summary>
        /// This method is used to Get List of ChangeContolQaApproval
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<ChangeContolQaApproval>> GetAllChangeContolQaApproval(RequestContext requestContext)
        {
            var result = changeContolQaApprovalService.GetAllChangeContolQaApproval(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get ChangeContolQaApproval By Id changeContolQaApprovalId
        /// </summary>
        /// <param name="changeContolQaApprovalId"></param>
        [HttpGet("{changeContolQaApprovalId}")]
        public ActionResult<ChangeContolQaApproval> GetChangeContolQaApprovalByChangeContolQaApprovalId(System.Int32? changeContolQaApprovalId)
        {
            var result = changeContolQaApprovalService.GetChangeContolQaApprovalByChangeContolQaApprovalId(changeContolQaApprovalId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save ChangeContolQaApproval
        /// </summary>
        /// <param name="changeContolQaApproval"></param>
        [HttpPost("savechangecontolqaapproval")]
        public ActionResult<System.Boolean> SaveChangeContolQaApproval(ChangeContolQaApproval changeContolQaApproval)
        {
            var result = changeContolQaApprovalService.SaveChangeContolQaApproval(changeContolQaApproval);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update ChangeContolQaApproval
        /// </summary>
        /// <param name="changeContolQaApproval"></param>
        [HttpPost("updatechangecontolqaapproval")]
        public ActionResult<System.Boolean> UpdateChangeContolQaApproval(ChangeContolQaApproval changeContolQaApproval)
        {
            var result = changeContolQaApprovalService.UpdateChangeContolQaApproval(changeContolQaApproval);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeContolQaApproval By Id changeContolQaApprovalId
        /// </summary>
        /// <param name="changeContolQaApprovalId"></param>
        [HttpDelete("{changeContolQaApprovalId}")]
        public ActionResult<bool> DeleteChangeContolQaApprovalByChangeContolQaApprovalId(System.Int32? changeContolQaApprovalId)
        {
            var result = changeContolQaApprovalService.DeleteChangeContolQaApprovalByChangeContolQaApprovalId(changeContolQaApprovalId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeContolQaApproval By Multiple ids changeContolQaApprovalIds
        /// </summary>
        /// <param name="changeContolQaApprovalIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllChangeContolQaApproval(List<int> changeContolQaApprovalIds)
        {
            var result = changeContolQaApprovalService.DeleteAllChangeContolQaApproval(changeContolQaApprovalIds);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlId"></param>
        [HttpGet("getChangeContolQaApprovalByChangeControlRegistrationId/{changeControlId}")]
        public ActionResult<List<ChangeContolQaApproval>> GetChangeContolQaApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            var result = changeContolQaApprovalService.GetChangeContolQaApprovalByChangeControlRegistrationId(changeControlId);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlId"></param>
        [HttpDelete("deleteChangeContolQaApprovalByChangeControlRegistrationId/{changeControlId}")]
        public ActionResult<bool> DeleteChangeContolQaApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            var result = changeContolQaApprovalService.DeleteChangeContolQaApprovalByChangeControlRegistrationId(changeControlId);
            return result;
        }
    }
}
