namespace QAMS.WEB.Services
{
    using System;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.WEB.Data;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    using QAMS.Sheet1.Services;



    // Comment
    public class NewdocumentService : INewdocumentService
    {
        
        private readonly INewdocumentData newdocumentData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="newdocumentData"></param>
        public NewdocumentService(INewdocumentData newdocumentData)
        {
            this.newdocumentData = newdocumentData;
        }
        
        public ResponseContext<NewDocument> GetAllNewdocument(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = newdocumentData.GetAllnewdocument(requestContext);
                List<NewDocument> result = newdocumentConverter.SetAllnewdocument(dataset);
                return new ResponseContext<NewDocument>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public NewDocument GetNewdocumentBynd(int? nd)
        {
            try
            {
                DataSet dataset = newdocumentData.GetnewdocumentBynd(nd);
                NewDocument result = newdocumentConverter.Setnewdocument(dataset);
                return result;
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public bool SaveNewdocument(NewDocument newdocument)
        {
            try
            {
                string validationMessages = newdocumentValidator.IsValidnewdocument(newdocument);
                if (validationMessages.Length <= 0)
                {
                    var result = newdocumentData.Savenewdocument(newdocument);
                    return result;
                }
                throw new Exception(validationMessages);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public bool UpdateNewdocument(NewDocument newdocument)
        {
            try
            {
                String validationMessages = newdocumentValidator.IsValidnewdocument(newdocument);
                if (validationMessages.Length <= 0)
                {
                    bool result = newdocumentData.Updatenewdocument(newdocument);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public bool DeleteNewdocumentBynd(int? nd)
        {
            try
            {
                return newdocumentData.DeletenewdocumentBynd(nd);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public bool DeleteAllNewdocument(List<int> nds)
        {
            try
            {
                return newdocumentData.DeleteAllnewdocument(nds);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}
