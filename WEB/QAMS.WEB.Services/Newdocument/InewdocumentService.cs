

namespace QAMS.Sheet1.Services
{
    using System.Collections.Generic;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface INewdocumentService
    {
        
        ResponseContext<NewDocument> GetAllnewdocument(RequestContext requestContext);
        
        NewDocument GetnewdocumentBynd(System.Int32? nd);
        
        bool Savenewdocument(NewDocument newdocument);
        
        bool Updatenewdocument(NewDocument newdocument);
        
        bool DeletenewdocumentBynd(System.Int32? nd);
        
        bool DeleteAllnewdocument(List<int> nds);
    }
}
