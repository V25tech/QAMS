namespace QAMS.WEB.API.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using QAMS.Admin.Entities;
    using QAMS.Sheet1.Services;
    using QAMS.Common.Entities;

    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/newdocument")]
    public class NewdocumentController : ControllerBase
    {
        
        private readonly INewdocumentService newdocumentService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="newdocumentService"></param>
        public NewdocumentController(INewdocumentService newdocumentService)
        {
            this.newdocumentService = newdocumentService;
        }
        
        /// <summary>
        /// This method is used to Get List of newdocument
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost()]
        public ActionResult<ResponseContext<NewDocument>> GetAllnewdocument(RequestContext requestContext)
        {
            var result = newdocumentService.GetAllNewdocument(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get newdocument By Id nd
        /// </summary>
        /// <param name="nd"></param>
        [HttpGet("{nd}")]
        public ActionResult<NewDocument> GetnewdocumentBynd(System.Int32? nd)
        {
            var result = newdocumentService.GetNewdocumentBynd(nd);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save newdocument
        /// </summary>
        /// <param name="newdocument"></param>
        [HttpPost("savenewdocument")]
        public ActionResult<bool> Savenewdocument(NewDocument newdocument)
        {
            var result = newdocumentService.SaveNewdocument(newdocument);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update newdocument
        /// </summary>
        /// <param name="newdocument"></param>
        [HttpPost("updatenewdocument")]
        public ActionResult<bool> UpdateNewdocument(NewDocument newdocument)
        {
            var result = newdocumentService.UpdateNewdocument(newdocument);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete newdocument By Id nd
        /// </summary>
        /// <param name="nd"></param>
        [HttpDelete("{nd}")]
        public ActionResult<bool> DeleteNewdocumentBynd(System.Int32? nd)
        {
            var result = newdocumentService.DeleteNewdocumentBynd(nd);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete newdocument By Multiple ids nds
        /// </summary>
        /// <param name="nds"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllnewdocument(List<int> nds)
        {
            var result = newdocumentService.DeleteAllNewdocument(nds);
            return result;
        }
    }
}
