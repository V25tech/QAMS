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
    using QAMS.Admin.Entities;
    using QAMS.Admin.Services;
    using QAMS.WEB.Entities;


    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/actionplan")]
    public class ActionPlanController : ControllerBase
    {
        
        private readonly IChangeContolActionPlanService changeContolActionPlanService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeContolActionPlanService"></param>
        public ActionPlanController(IChangeContolActionPlanService changeContolActionPlanService)
        {
            this.changeContolActionPlanService = changeContolActionPlanService;
        }
        
        /// <summary>
        /// This method is used to Get List of ChangeContolActionPlan
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<ChangeContolActionPlan>> GetAllChangeContolActionPlan(RequestContext requestContext)
        {
            var result = changeContolActionPlanService.GetAllChangeContolActionPlan(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get ChangeContolActionPlan By Id changeContolActionPlanId
        /// </summary>
        /// <param name="changeContolActionPlanId"></param>
        [HttpGet("{changeContolActionPlanId}")]
        public ActionResult<ChangeContolActionPlan> GetChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId)
        {
            var result = changeContolActionPlanService.GetChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save ChangeContolActionPlan
        /// </summary>
        /// <param name="changeContolActionPlan"></param>
        [HttpPost("saveactionplan")]
        public ActionResult<System.Boolean> SaveChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan)
        {
            var result = changeContolActionPlanService.SaveChangeContolActionPlan(changeContolActionPlan);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update ChangeContolActionPlan
        /// </summary>
        /// <param name="changeContolActionPlan"></param>
        [HttpPost("updateactionplan")]
        public ActionResult<System.Boolean> UpdateChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan)
        {
            var result = changeContolActionPlanService.UpdateChangeContolActionPlan(changeContolActionPlan);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeContolActionPlan By Id changeContolActionPlanId
        /// </summary>
        /// <param name="changeContolActionPlanId"></param>
        [HttpDelete("{getActionPlanById}")]
        public ActionResult<bool> DeleteChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId)
        {
            var result = changeContolActionPlanService.DeleteChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete ChangeContolActionPlan By Multiple ids changeContolActionPlanIds
        /// </summary>
        /// <param name="changeContolActionPlanIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllChangeContolActionPlan(List<int> changeContolActionPlanIds)
        {
            var result = changeContolActionPlanService.DeleteAllChangeContolActionPlan(changeContolActionPlanIds);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("getChangeContolActionPlanByDepartmentId/{id}")]
        public ActionResult<List<ChangeContolActionPlan>> GetChangeContolActionPlanByDepartmentId(System.Int32? id)
        {
            var result = changeContolActionPlanService.GetChangeContolActionPlanByDepartmentId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("getChangeContolActionPlanByUserId/{id}")]
        public ActionResult<List<ChangeContolActionPlan>> GetChangeContolActionPlanByUserId(System.Int32? id)
        {
            var result = changeContolActionPlanService.GetChangeContolActionPlanByUserId(id);
            return result;
        }

        [HttpGet("getActionPlanByIntIdandWorkId")]
        public ActionResult<List<ChangeContolActionPlan>> GeActionPlanByIntIdandWorkId(int p_IntId,int p_WorkId)
        {
            var result = changeContolActionPlanService.GetActionPlanByIntIdandWorkId(p_IntId,p_WorkId);
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("getChangeContolActionPlanByUserGroupId/{id}")]
        public ActionResult<List<ChangeContolActionPlan>> GetChangeContolActionPlanByUserGroupId(System.Int32? id)
        {
            var result = changeContolActionPlanService.GetChangeContolActionPlanByUserGroupId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("deleteChangeContolActionPlanByDepartmentId/{id}")]
        public ActionResult<bool> DeleteChangeContolActionPlanByDepartmentId(System.Int32? id)
        {
            var result = changeContolActionPlanService.DeleteChangeContolActionPlanByDepartmentId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("deleteChangeContolActionPlanByUserId/{id}")]
        public ActionResult<bool> DeleteChangeContolActionPlanByUserId(System.Int32? id)
        {
            var result = changeContolActionPlanService.DeleteChangeContolActionPlanByUserId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("deleteChangeContolActionPlanByUserGroupId/{id}")]
        public ActionResult<bool> DeleteChangeContolActionPlanByUserGroupId(System.Int32? id)
        {
            var result = changeContolActionPlanService.DeleteChangeContolActionPlanByUserGroupId(id);
            return result;
        }
    }
}
