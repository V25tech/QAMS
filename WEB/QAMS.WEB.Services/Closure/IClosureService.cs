//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Sheet1.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Entities;
    
    
    // Comment
    public interface IClosureService
    {
        
        ResponseContext<Closure> GetAllClosure(RequestContext requestContext);
        
        Closure GetClosureByCId(System.Int32? cId);
        Closure GetClosureByInitId(System.Int32? initId);


        bool SaveClosure(Closure closure);
        
        bool UpdateClosure(Closure closure);
        
        bool DeleteClosureByCId(System.Int32? cId);
        
        bool DeleteAllClosure(List<int> cIds);
    }
}
