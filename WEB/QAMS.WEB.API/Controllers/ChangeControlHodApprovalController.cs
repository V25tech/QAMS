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
    [Route("api/changecontrolhodapproval")]
    public class ChangeControlHodApprovalController : ControllerBase
    {
        
        private readonly IChangeControlHodApprovalService changeControlHodApprovalService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlHodApprovalService"></param>
        public ChangeControlHodApprovalController(IChangeControlHodApprovalService changeControlHodApprovalService)
        {
            this.changeControlHodApprovalService = changeControlHodApprovalService;
        }
        
        /// <summary>
        /// This method is used to Get List of ChangeControlHodApproval
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<ChangeControlHodApproval>> GetAllChangeControlHodApproval(RequestContext requestContext)
        {
            var result = changeControlHodApprovalService.GetAllChangeControlHodApproval(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get ChangeControlHodApproval By Id changeControlHodApprovalId
        /// </summary>
        /// <param name="changeControlHodApprovalId"></param>
        [HttpGet("{changeControlHodApprovalId}")]
        public ActionResult<ChangeControlHodApproval> GetChangeControlHodApprovalByChangeControlHodApprovalId(System.Int32? changeControlHodApprovalId)
        {
            var result = changeControlHodApprovalService.GetChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save ChangeControlHodApproval
        /// </summary>
        /// <param name="changeControlHodApproval"></param>
        [HttpPost("savechangecontrolhodapproval")]
        public ActionResult<System.Boolean> SaveChangeControlHodApproval(ChangeControlHodApproval changeControlHodApproval)
        {
            var result = changeControlHodApprovalService.SaveChangeControlHodApproval(changeControlHodApproval);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update ChangeControlHodApproval
        /// </summary>
        /// <param name="changeControlHodApproval"></param>
        [HttpPost("updatechangecontrolhodapproval")]
        public ActionResult<System.Boolean> UpdateChangeControlHodApproval(ChangeControlHodApproval changeControlHodApproval)
        {
            var result = changeControlHodApprovalService.UpdateChangeControlHodApproval(changeControlHodApproval);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeControlHodApproval By Id changeControlHodApprovalId
        /// </summary>
        /// <param name="changeControlHodApprovalId"></param>
        [HttpDelete("{changeControlHodApprovalId}")]
        public ActionResult<bool> DeleteChangeControlHodApprovalByChangeControlHodApprovalId(System.Int32? changeControlHodApprovalId)
        {
            var result = changeControlHodApprovalService.DeleteChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeControlHodApproval By Multiple ids changeControlHodApprovalIds
        /// </summary>
        /// <param name="changeControlHodApprovalIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllChangeControlHodApproval(List<int> changeControlHodApprovalIds)
        {
            var result = changeControlHodApprovalService.DeleteAllChangeControlHodApproval(changeControlHodApprovalIds);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlId"></param>
        [HttpGet("getChangeControlHodApprovalByChangeControlRegistrationId/{changeControlId}")]
        public ActionResult<List<ChangeControlHodApproval>> GetChangeControlHodApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            var result = changeControlHodApprovalService.GetChangeControlHodApprovalByChangeControlRegistrationId(changeControlId);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlId"></param>
        [HttpDelete("deleteChangeControlHodApprovalByChangeControlRegistrationId/{changeControlId}")]
        public ActionResult<bool> DeleteChangeControlHodApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            var result = changeControlHodApprovalService.DeleteChangeControlHodApprovalByChangeControlRegistrationId(changeControlId);
            return result;
        }
    }
}
