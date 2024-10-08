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
    using QAMS.Entities;
    using QAMS.Sheet1.Services;
    
    
    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/closure")]
    public class ClosureController : ControllerBase
    {
        
        private readonly IClosureService closureService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="closureService"></param>
        public ClosureController(IClosureService closureService)
        {
            this.closureService = closureService;
        }
        
        /// <summary>
        /// This method is used to Get List of Closure
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<Closure>> GetAllClosure(RequestContext requestContext)
        {
            var result = closureService.GetAllClosure(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get Closure By Id cId
        /// </summary>
        /// <param name="cId"></param>
        [HttpGet("{cId}")]
        public ActionResult<Closure> GetClosureByCId(System.Int32? cId)
        {
            var result = closureService.GetClosureByCId(cId);
            return result;
        }
        [HttpGet("getclosurebyInitId")]
        public ActionResult<Closure> GetClosureByInitId(System.Int32? initId)
        {
            var result = closureService.GetClosureByInitId(initId);
            return result;
        }

        /// <summary>
        /// This Method is used to Save Closure
        /// </summary>
        /// <param name="closure"></param>
        [HttpPost("saveclosure")]
        public ActionResult<System.Boolean> SaveClosure(Closure closure)
        {
            var result = closureService.SaveClosure(closure);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update Closure
        /// </summary>
        /// <param name="closure"></param>
        [HttpPost("updateclosure")]
        public ActionResult<System.Boolean> UpdateClosure(Closure closure)
        {
            var result = closureService.UpdateClosure(closure);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete Closure By Id cId
        /// </summary>
        /// <param name="cId"></param>
        [HttpDelete("{cId}")]
        public ActionResult<bool> DeleteClosureByCId(System.Int32? cId)
        {
            var result = closureService.DeleteClosureByCId(cId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete Closure By Multiple ids cIds
        /// </summary>
        /// <param name="cIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllClosure(List<int> cIds)
        {
            var result = closureService.DeleteAllClosure(cIds);
            return result;
        }
    }
}
