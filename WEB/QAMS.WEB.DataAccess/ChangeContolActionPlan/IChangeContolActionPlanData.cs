//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;


    // Comment
    public interface IChangeContolActionPlanData
    {
        
        DataSet GetAllChangeContolActionPlan(RequestContext requestContext);
        
        DataSet GetChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId);
        
        bool SaveChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan);
        
        bool UpdateChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan);
        
        bool DeleteChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId);
        
        bool DeleteAllChangeContolActionPlan(List<int> changeContolActionPlanIds);
        
        DataSet GetChangeContolActionPlanByDepartmentId(System.Int32? id);
        
        DataSet GetChangeContolActionPlanByUserId(System.Int32? id);
        
        DataSet GetChangeContolActionPlanByUserGroupId(System.Int32? id);
        
        bool DeleteChangeContolActionPlanByDepartmentId(System.Int32? id);
        
        bool DeleteChangeContolActionPlanByUserId(System.Int32? id);
        
        bool DeleteChangeContolActionPlanByUserGroupId(System.Int32? id);
    }
}