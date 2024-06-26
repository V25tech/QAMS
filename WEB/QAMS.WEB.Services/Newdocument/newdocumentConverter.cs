
namespace QAMS.WEB.Services
{
    using System;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Admin.Entities;


    // Comment
    public static class newdocumentConverter
    {
        
        public static List<NewDocument> SetAllnewdocument(DataSet dataset)
        {
            try
            {
                List<NewDocument> result = new List<NewDocument>();
                NewDocument newdocumentData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i++)
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        newdocumentData = new NewDocument();
                        newdocumentData.nd = DatatypeConverter.SetIntValue(row[NewDocumentConstants.nd.TrimAt()]);
                        newdocumentData.title = Convert.ToString(row[NewDocumentConstants.title.TrimAt()]);
                        newdocumentData.description = Convert.ToString(row[NewDocumentConstants.description.TrimAt()]);
                        newdocumentData.uploadfile = Convert.ToString(row[NewDocumentConstants.uploadfile.TrimAt()]);
                        newdocumentData.CreatedBy = Convert.ToString(row[NewDocumentConstants.CreatedBy.TrimAt()]);
                        newdocumentData.CreatedDate = DatatypeConverter.SetDateTime(row[NewDocumentConstants.CreatedDate.TrimAt()]);
                        newdocumentData.ModifiedBy = Convert.ToString(row[NewDocumentConstants.ModifiedBy.TrimAt()]);
                        newdocumentData.ModifiedDate = DatatypeConverter.SetDateTime(row[NewDocumentConstants.ModifiedDate.TrimAt()]);
                        result.Add(newdocumentData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static NewDocument Setnewdocument(DataSet dataset)
        {
            var result = SetAllnewdocument(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
