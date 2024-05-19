

namespace QAMS.Sheet1.Services
{
    using System.Collections.Generic;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface INewdocumentService
    {
        
        ResponseContext<NewDocument> GetAllNewdocument(RequestContext requestContext);
        
        NewDocument GetNewdocumentBynd(int? nd);
        
        bool SaveNewdocument(NewDocument newdocument);
        
        bool UpdateNewdocument(NewDocument newdocument);
        
        bool DeleteNewdocumentBynd(int? nd);
        
        bool DeleteAllNewdocument(List<int> nds);
    }
}
