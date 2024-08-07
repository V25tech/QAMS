//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Sheet1.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.Entities;
    using VAMLibrary.Core;
    using VAMLibrary.Core.Common;
    
    
    // Comment
    public class ActionPlanReviewData : IActionPlanReviewData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public ActionPlanReviewData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllActionPlanReview(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetActionPlanReviewByAPId(System.Int32? aPId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_GET, ActionPlanReviewConstants.APId, DbType.Int32, aPId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveActionPlanReview(ActionPlanReview actionPlanReview)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.InitiativeId, Value = actionPlanReview.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.InitiativeName, Value = actionPlanReview.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ActionPlanReviewConstants.IsSave, Value = actionPlanReview.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Comments, Value = actionPlanReview.Comments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Status, Value = actionPlanReview.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.CreatedBy, Value = actionPlanReview.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.UpdatedBy, Value = actionPlanReview.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ActionPlanReviewConstants.UpdatedDate, Value = actionPlanReview.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.Plant, Value = actionPlanReview.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ActionPlanReviewConstants.Decision, Value = actionPlanReview.Decision });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Remarks, Value = actionPlanReview.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.ActionPlanReviewComments, Value = actionPlanReview.ActionPlanReviewComments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.APDocument, Value = actionPlanReview.APDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.ModifiedBy, Value = actionPlanReview.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateActionPlanReview(ActionPlanReview actionPlanReview)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.APId, Value = actionPlanReview.APId });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.InitiativeId, Value = actionPlanReview.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.InitiativeName, Value = actionPlanReview.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ActionPlanReviewConstants.IsSave, Value = actionPlanReview.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Comments, Value = actionPlanReview.Comments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Status, Value = actionPlanReview.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.UpdatedBy, Value = actionPlanReview.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ActionPlanReviewConstants.UpdatedDate, Value = actionPlanReview.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ActionPlanReviewConstants.Plant, Value = actionPlanReview.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ActionPlanReviewConstants.Decision, Value = actionPlanReview.Decision });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.Remarks, Value = actionPlanReview.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.ActionPlanReviewComments, Value = actionPlanReview.ActionPlanReviewComments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.APDocument, Value = actionPlanReview.APDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ActionPlanReviewConstants.ModifiedBy, Value = actionPlanReview.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteActionPlanReviewByAPId(System.Int32? aPId)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_DELETE, ActionPlanReviewConstants.APId, DbType.Int32, aPId, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllActionPlanReview(List<int> aPIds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ActionPlanReviewConstants.USP_ActionPlanReview_PSY_DELETE_ALL, ActionPlanReviewConstants.APId, DbType.String, string.Join(',',  aPIds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
