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
    using VAMLibrary.Core;
    using VAMLibrary.Core.Common;
    using QAMS.WEB.Entities;
    using QAMS.WEB.Data;


    // Comment
    public class ChangeContolActionPlanData : IChangeContolActionPlanData
    {

        private readonly DataAccessHelper dataAccessHelper;

        public ChangeContolActionPlanData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }

        public DataSet GetAllChangeContolActionPlan(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public DataSet GetChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_GET, ChangeContolActionPlanConstants.ChangeContolActionPlanId, DbType.Int32, changeContolActionPlanId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public DataSet GetChangeContolActionPlansByInitId(System.Int32? initId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure("dbo.USP_ChangeContolActionPlan_PSY_GET_BY_INIT", "@Init_PSY", DbType.Int32, initId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Type, Value = changeContolActionPlan.Type });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Description, Value = changeContolActionPlan.Description });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.DepartmentId, Value = changeContolActionPlan.DepartmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.AssignedUser, Value = changeContolActionPlan.AssignedUser });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.AssignedUserGroup, Value = changeContolActionPlan.AssignedUserGroup });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ChangeContolActionPlanConstants.TargetDate, Value = changeContolActionPlan.TargetDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Remarks, Value = changeContolActionPlan.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.CreatedBy, Value = changeContolActionPlan.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.ModifiedBy, Value = changeContolActionPlan.ModifiedBy });

                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@ApprovedUser_PSY", Value = changeContolActionPlan.ApprovedUser });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@ApprovedUserGroup", Value = changeContolActionPlan.ApprovedUserGroup });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@WorkflowId", Value = changeContolActionPlan.WorkflowId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@WorkflowName", Value = changeContolActionPlan.WorkflowName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@InitiativeId", Value = changeContolActionPlan.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@InitiativeName", Value = changeContolActionPlan.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsReviewed", Value = changeContolActionPlan.IsReviewed });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsApproved", Value = changeContolActionPlan.IsApproved });

                Object result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool UpdateChangeContolActionPlan(ChangeContolActionPlan changeContolActionPlan)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.ChangeContolActionPlanId, Value = changeContolActionPlan.ChangeContolActionPlanId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Type, Value = changeContolActionPlan.Type });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Description, Value = changeContolActionPlan.Description });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.DepartmentId, Value = changeContolActionPlan.DepartmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.AssignedUser, Value = changeContolActionPlan.AssignedUser });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeContolActionPlanConstants.AssignedUserGroup, Value = changeContolActionPlan.AssignedUserGroup });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ChangeContolActionPlanConstants.TargetDate, Value = changeContolActionPlan.TargetDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.Remarks, Value = changeContolActionPlan.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeContolActionPlanConstants.ModifiedBy, Value = changeContolActionPlan.ModifiedBy });

                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@ApprovedUser_PSY", Value = changeContolActionPlan.ApprovedUser });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@ApprovedUserGroup", Value = changeContolActionPlan.ApprovedUserGroup });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@WorkflowId", Value = changeContolActionPlan.WorkflowId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@WorkflowName", Value = changeContolActionPlan.WorkflowName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@InitiativeId", Value = changeContolActionPlan.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@InitiativeName", Value = changeContolActionPlan.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsReviewed", Value = changeContolActionPlan.IsReviewed });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsApproved", Value = changeContolActionPlan.IsApproved });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsSave_PSY", Value = changeContolActionPlan.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@ReviewStatusComment_PSY", Value = changeContolActionPlan.ReviewStatusComment });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@APReviewComments", Value = changeContolActionPlan.APReviewComments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = "@APRemarks", Value = changeContolActionPlan.APRemarks });

                Object result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteChangeContolActionPlanByChangeContolActionPlanId(System.Int32? changeContolActionPlanId)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_DELETE, ChangeContolActionPlanConstants.ChangeContolActionPlanId, DbType.Int32, changeContolActionPlanId, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteAllChangeContolActionPlan(List<int> changeContolActionPlanIds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_DELETE_ALL, ChangeContolActionPlanConstants.ChangeContolActionPlanId, DbType.String, string.Join(',', changeContolActionPlanIds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public DataSet GetChangeContolActionPlanByDepartmentId(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_GET, "@Id", DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public DataSet GetChangeContolActionPlanByUserId(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_GET, "@Id", DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public DataSet GetActionPlanByIntIdandWorkId(int p_IntId, int p_WorkId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ActionPlan_PSY_GET_BY_INITD_AND_WORK_ID,
                                  new List<SqlParameter>
                                  {
                                  new SqlParameter("@IntId", DbType.Int32) { Value = p_IntId },
                                  new SqlParameter("@WorkId", DbType.Int32) { Value = p_WorkId }
                                  }, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public DataSet GetActivitiesByInitiative(int p_IntId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure("dbo.USP_GET_ACTIVITIES_BY_INITIATIVE",
                                  new List<SqlParameter>
                                  {
                                  new SqlParameter("@INIT", DbType.Int32) { Value = p_IntId }
                                  }, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public DataSet GetChangeContolActionPlanByUserGroupId(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_GET, "@Id", DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteChangeContolActionPlanByDepartmentId(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_DELETE, "@Id", DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteChangeContolActionPlanByUserId(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_DELETE, "@Id", DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteChangeContolActionPlanByUserGroupId(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeContolActionPlanConstants.USP_ChangeContolActionPlan_PSY_By_Id_DELETE, "@Id", DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
