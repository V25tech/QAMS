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
    [Route("api/cftreview")]
    public class CFTReviewController : ControllerBase
    {
        
        private readonly ICFTReviewService cFTReviewService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="cFTReviewService"></param>
        public CFTReviewController(ICFTReviewService cFTReviewService)
        {
            this.cFTReviewService = cFTReviewService;
        }
        
        /// <summary>
        /// This method is used to Get List of CFTReview
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<CFTReview>> GetAllCFTReview(RequestContext requestContext)
        {
            var result = cFTReviewService.GetAllCFTReview(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get CFTReview By Id cFTId
        /// </summary>
        /// <param name="cFTId"></param>
        [HttpGet("{cFTId}")]
        public ActionResult<CFTReview> GetCFTReviewByCFTId(System.Int32? cFTId)
        {
            var result = cFTReviewService.GetCFTReviewByCFTId(cFTId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save CFTReview
        /// </summary>
        /// <param name="cFTReview"></param>
        [HttpPost("savecftreview")]
        public ActionResult<System.Boolean> SaveCFTReview(CFTReview cFTReview)
        {
            var result = cFTReviewService.SaveCFTReview(cFTReview);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update CFTReview
        /// </summary>
        /// <param name="cFTReview"></param>
        [HttpPost("updatecftreview")]
        public ActionResult<System.Boolean> UpdateCFTReview(CFTReview cFTReview)
        {
            var result = cFTReviewService.UpdateCFTReview(cFTReview);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete CFTReview By Id cFTId
        /// </summary>
        /// <param name="cFTId"></param>
        [HttpDelete("{cFTId}")]
        public ActionResult<bool> DeleteCFTReviewByCFTId(System.Int32? cFTId)
        {
            var result = cFTReviewService.DeleteCFTReviewByCFTId(cFTId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete CFTReview By Multiple ids cFTIds
        /// </summary>
        /// <param name="cFTIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllCFTReview(List<int> cFTIds)
        {
            var result = cFTReviewService.DeleteAllCFTReview(cFTIds);
            return result;
        }
    }
}
