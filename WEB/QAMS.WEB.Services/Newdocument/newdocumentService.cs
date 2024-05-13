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
        
        public ResponseContext<NewDocument> GetAllnewdocument(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = newdocumentData.GetAllnewdocument(requestContext);
                List<NewDocument> result = newdocumentConverter.SetAllnewdocument(dataset);
                return new ResponseContext<NewDocument>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public NewDocument GetnewdocumentBynd(System.Int32? nd)
        {
            try
            {
                DataSet dataset = newdocumentData.GetnewdocumentBynd(nd);
                NewDocument result = newdocumentConverter.Setnewdocument(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Savenewdocument(NewDocument newdocument)
        {
            try
            {
                String validationMessages = newdocumentValidator.IsValidnewdocument(newdocument);
                if (validationMessages.Length <= 0)
                {
                    var result = newdocumentData.Savenewdocument(newdocument);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Updatenewdocument(NewDocument newdocument)
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
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeletenewdocumentBynd(System.Int32? nd)
        {
            try
            {
                return newdocumentData.DeletenewdocumentBynd(nd);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllnewdocument(List<int> nds)
        {
            try
            {
                return newdocumentData.DeleteAllnewdocument(nds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
