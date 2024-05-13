namespace QAMS.Admin.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Admin.Entities;
    using QAMS.Common.Entities;


    // Comment
    public interface IWorktransferregistrationoinitiationService
    {
        
        ResponseContext<worktransferregistrationoinitiation> GetAllworktransferregistrationoinitiation(RequestContext requestContext);
        
        worktransferregistrationoinitiation GetworktransferregistrationoinitiationBywtriid(System.Int32? wtriid);
        
        bool Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation);
        
        bool Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation);
        
        bool DeleteworktransferregistrationoinitiationBywtriid(System.Int32? wtriid);
        
        bool DeleteAllworktransferregistrationoinitiation(List<int> wtriids);
    }
}
