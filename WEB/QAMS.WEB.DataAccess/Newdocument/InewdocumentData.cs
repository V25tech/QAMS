namespace QAMS.WEB.Data
{
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    // Comment
    public interface INewdocumentData
    {
        
        DataSet GetAllNewdocument(RequestContext requestContext);
        
        DataSet GetNewdocumentBynd(System.Int32? nd);
        
        bool SaveNewdocument(Document Document);
        
        bool UpdateNewdocument(Document Document);
        
        bool DeleteNewdocumentBynd(System.Int32? nd);
        
        bool DeleteAllNewdocument(List<int> nds);
    }
}
