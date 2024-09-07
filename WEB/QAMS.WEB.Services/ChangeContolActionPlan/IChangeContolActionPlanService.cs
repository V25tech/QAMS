//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Services
{
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;


    // Comment
    public interface IChangeContolActionPlanService
    {
        
        ResponseContext<ChangeContolActionPlan> GetAllChangeContolActionPlan(RequestContext requestContext);
        
        ChangeContolActionPlan GetChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId);
        List<ChangeContolActionPlan> GetChangeContolActionPlansByInitId(System.Int32? initId);


        bool SaveChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan);
        
        bool UpdateChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan);
        
        bool DeleteChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId);
        
        bool DeleteAllChangeContolActionPlan(List<int> changeContolActionPlanIds);
        
        List<ChangeContolActionPlan> GetChangeContolActionPlanByDepartmentId(System.Int32? id);
        
        List<ChangeContolActionPlan> GetChangeContolActionPlanByUserId(System.Int32? id);
        
        List<ChangeContolActionPlan> GetChangeContolActionPlanByUserGroupId(System.Int32? id);

        List<ChangeContolActionPlan> GetActionPlanByIntIdandWorkId(int p_IntId, int p_WorkId);

        bool DeleteChangeContolActionPlanByDepartmentId(System.Int32? id);
        
        bool DeleteChangeContolActionPlanByUserId(System.Int32? id);
        
        bool DeleteChangeContolActionPlanByUserGroupId(System.Int32? id);
    }
}
