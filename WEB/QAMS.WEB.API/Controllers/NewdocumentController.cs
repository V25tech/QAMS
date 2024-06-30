namespace QAMS.WEB.API.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using QAMS.Admin.Entities;
    using QAMS.Services;
    using QAMS.Common.Entities;
    using Microsoft.AspNetCore.Http;
    using System.IO;
    using System.Threading.Tasks;
    using System;

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

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            try
            {
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = file.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                return Ok(new { message = "File uploaded successfully.", filePath });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while uploading the file: {ex.Message}");
            }
        }

        /// <summary>
        /// This Method is used to Save newdocument
        /// </summary>
        /// <param name="newdocument"></param>
        [HttpPost("savenewdocument")]
        public ActionResult<System.Boolean> Savenewdocument1(NewDocument newdocument)
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
