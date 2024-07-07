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
    [Route("api/qadecision")]
    public class QADecisionController : ControllerBase
    {
        
        private readonly IQADecisionService qADecisionService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="qADecisionService"></param>
        public QADecisionController(IQADecisionService qADecisionService)
        {
            this.qADecisionService = qADecisionService;
        }
        
        /// <summary>
        /// This method is used to Get List of QADecision
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<QADecision>> GetAllQADecision(RequestContext requestContext)
        {
            var result = qADecisionService.GetAllQADecision(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get QADecision By Id qADId
        /// </summary>
        /// <param name="qADId"></param>
        [HttpGet("{qADId}")]
        public ActionResult<QADecision> GetQADecisionByQADId(System.Int32? qADId)
        {
            var result = qADecisionService.GetQADecisionByQADId(qADId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save QADecision
        /// </summary>
        /// <param name="qADecision"></param>
        [HttpPost("saveqadecision")]
        public ActionResult<System.Boolean> SaveQADecision(QADecision qADecision)
        {
            var result = qADecisionService.SaveQADecision(qADecision);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update QADecision
        /// </summary>
        /// <param name="qADecision"></param>
        [HttpPost("updateqadecision")]
        public ActionResult<System.Boolean> UpdateQADecision(QADecision qADecision)
        {
            var result = qADecisionService.UpdateQADecision(qADecision);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete QADecision By Id qADId
        /// </summary>
        /// <param name="qADId"></param>
        [HttpDelete("{qADId}")]
        public ActionResult<bool> DeleteQADecisionByQADId(System.Int32? qADId)
        {
            var result = qADecisionService.DeleteQADecisionByQADId(qADId);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete QADecision By Multiple ids qADIds
        /// </summary>
        /// <param name="qADIds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllQADecision(List<int> qADIds)
        {
            var result = qADecisionService.DeleteAllQADecision(qADIds);
            return result;
        }
    }
}