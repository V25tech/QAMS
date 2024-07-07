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
    [Route("api/qareview")]
    public class QAReviewController : ControllerBase
    {
        
        private readonly IQAReviewService qAReviewService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="qAReviewService"></param>
        public QAReviewController(IQAReviewService qAReviewService)
        {
            this.qAReviewService = qAReviewService;
        }
        
        /// <summary>
        /// This method is used to Get List of QAReview
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<QAReview>> GetAllQAReview(RequestContext requestContext)
        {
            var result = qAReviewService.GetAllQAReview(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get QAReview By Id qAId
        /// </summary>
        /// <param name="qAId"></param>
        [HttpGet("{qAId}")]
        public ActionResult<QAReview> GetQAReviewByQAId(System.Int32? qAId)
        {
            var result = qAReviewService.GetQAReviewByQAId(qAId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save QAReview
        /// </summary>
        /// <param name="qAReview"></param>
        [HttpPost("saveqareview")]
        public ActionResult<System.Boolean> SaveQAReview(QAReview qAReview)
        {
            var result = qAReviewService.SaveQAReview(qAReview);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update QAReview
        /// </summary>
        /// <param name="qAReview"></param>
        [HttpPost("updateqareview")]
        public ActionResult<System.Boolean> UpdateQAReview(QAReview qAReview)
        {
            var result = qAReviewService.UpdateQAReview(qAReview);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete QAReview By Id qAId
        /// </summary>
        /// <param name="qAId"></param>
        [HttpDelete("{qAId}")]
        public ActionResult<bool> DeleteQAReviewByQAId(System.Int32? qAId)
        {
            var result = qAReviewService.DeleteQAReviewByQAId(qAId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete QAReview By Multiple ids qAIds
        /// </summary>
        /// <param name="qAIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllQAReview(List<int> qAIds)
        {
            var result = qAReviewService.DeleteAllQAReview(qAIds);
            return result;
        }
    }
}
