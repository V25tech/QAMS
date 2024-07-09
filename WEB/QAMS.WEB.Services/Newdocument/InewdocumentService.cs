

namespace QAMS.Services
{
    using System.Collections.Generic;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface INewdocumentService
    {
        
        ResponseContext<Document> GetAllNewdocument(RequestContext requestContext);
        
        Document GetNewdocumentBynd(int? nd);
        
        bool SaveNewdocument(Document newdocument);
        
        bool UpdateNewdocument(Document newdocument);
        
        bool DeleteNewdocumentBynd(int? nd);
        
        bool DeleteAllNewdocument(List<int> nds);
    }
}
