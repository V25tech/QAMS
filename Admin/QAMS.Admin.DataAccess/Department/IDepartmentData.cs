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
    public interface IDepartmentData
    {
        
        DataSet GetAllDepartment(RequestContext requestContext);
        
        DataSet GetDepartmentById(System.Int32? id);
        
        bool SaveDepartment(Department department);
        
        bool UpdateDepartment(Department department);
        
        bool DeleteDepartmentById(System.Int32? id);
        
        bool DeleteAllDepartment(List<int> ids);
    }
}
