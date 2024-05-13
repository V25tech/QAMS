//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;
    
    
    // Comment
    public interface IChangeControlRegistrationService
    {
        
        ResponseContext<ChangeControlRegistration> GetAllChangeControlRegistration(RequestContext requestContext);
        
        ChangeControlRegistration GetChangeControlRegistrationByChangeControlId(System.Int32? changeControlId);
        
        bool SaveChangeControlRegistration(ChangeControlRegistration changeControlRegistration);
        
        bool UpdateChangeControlRegistration(ChangeControlRegistration changeControlRegistration);
        
        bool DeleteChangeControlRegistrationByChangeControlId(System.Int32? changeControlId);
        
        bool DeleteAllChangeControlRegistration(List<int> changeControlIds);
    }
}
