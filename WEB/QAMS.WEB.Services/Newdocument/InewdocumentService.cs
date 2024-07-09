

namespace QAMS.Services
{
    using System.Collections.Generic;
    using System.Data;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface INewdocumentService
    {
        
        ResponseContext<Document> GetAllNewdocument(RequestContext requestContext);
        
        Document GetNewdocumentBynd(int? nd);

        Document GetNewdocumentByParent(int? p_parentId, string p_Type);


        bool SaveNewdocument(Document newdocument);
        
        bool UpdateNewdocument(Document newdocument);
        
        bool DeleteNewdocumentBynd(int? nd);
        
        bool DeleteAllNewdocument(List<int> nds);
    }
}
