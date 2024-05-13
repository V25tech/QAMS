namespace QAMS.WEB.Data
{
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;


    // Comment
    public interface IworktransferregistrationoinitiationData
    {
        
        DataSet GetAllworktransferregistrationoinitiation(RequestContext requestContext);
        
        DataSet GetworktransferregistrationoinitiationBywtriid(System.Int32? wtriid);
        
        bool Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation);
        
        bool Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation);
        
        bool DeleteworktransferregistrationoinitiationBywtriid(System.Int32? wtriid);
        
        bool DeleteAllworktransferregistrationoinitiation(List<int> wtriids);
    }
}
