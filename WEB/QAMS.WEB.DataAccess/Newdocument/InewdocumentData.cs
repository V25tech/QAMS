namespace QAMS.WEB.Data
{
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    // Comment
    public interface INewdocumentData
    {
        
        DataSet GetAllnewdocument(RequestContext requestContext);
        
        DataSet GetnewdocumentBynd(System.Int32? nd);
        
        bool Savenewdocument(NewDocument newdocument);
        
        bool Updatenewdocument(NewDocument newdocument);
        
        bool DeletenewdocumentBynd(System.Int32? nd);
        
        bool DeleteAllnewdocument(List<int> nds);
    }
}
