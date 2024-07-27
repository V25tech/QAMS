

namespace QAMS.Services
{
    using System.Collections.Generic;
    using System.Data;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface INewdocumentService
    {
        
        ResponseContext<NewDocument> GetAllNewdocument(RequestContext requestContext);

        NewDocument GetNewdocumentBynd(int? nd);

        List<NewDocument> GetNewdocumentByParent(int? p_parentId, string p_Type);


        bool SaveNewdocument(NewDocument newdocument);
        
        bool UpdateNewdocument(NewDocument newdocument);
        
        bool DeleteNewdocumentBynd(int? nd);
        
        bool DeleteAllNewdocument(List<int> nds);
    }
}
