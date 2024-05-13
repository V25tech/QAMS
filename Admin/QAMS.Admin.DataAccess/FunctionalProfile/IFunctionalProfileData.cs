//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    
    
    // Comment
    public interface IFunctionalProfileData
    {
        
        DataSet GetAllFunctionalProfile(RequestContext requestContext);
        
        DataSet GetFunctionalProfileById(System.Int32? id);
        
        bool SaveFunctionalProfile(FunctionalProfile functionalProfile);
        
        bool UpdateFunctionalProfile(FunctionalProfile functionalProfile);
        
        bool DeleteFunctionalProfileById(System.Int32? id);
        
        bool DeleteAllFunctionalProfile(List<int> ids);
        
        DataSet GetFunctionalProfileByRoleId(System.Int32? id);
        
        bool DeleteFunctionalProfileByRoleId(System.Int32? id);
    }
}
