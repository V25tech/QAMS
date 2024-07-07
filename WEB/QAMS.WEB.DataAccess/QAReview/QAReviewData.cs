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
    public class QAReviewData : IQAReviewData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public QAReviewData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllQAReview(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetQAReviewByQAId(System.Int32? qAId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_GET, QAReviewConstants.QAId, DbType.Int32, qAId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveQAReview(QAReview qAReview)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.ImpactOnProcFormats, Value = qAReview.ImpactOnProcFormats });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ProcedureFormat, Value = qAReview.ProcedureFormat });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.IsRegularCustomer, Value = qAReview.IsRegularCustomer });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ImpactCommitment, Value = qAReview.ImpactCommitment });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ReviewComments, Value = qAReview.ReviewComments });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.InitiativeId, Value = qAReview.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.InitiativeName, Value = qAReview.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.IsSave, Value = qAReview.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.Status, Value = qAReview.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.CreatedBy, Value = qAReview.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.UpdatedBy, Value = qAReview.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = QAReviewConstants.UpdatedDate, Value = qAReview.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.Plant, Value = qAReview.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.QaDocument, Value = qAReview.QaDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ModifiedBy, Value = qAReview.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateQAReview(QAReview qAReview)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.QAId, Value = qAReview.QAId });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.ImpactOnProcFormats, Value = qAReview.ImpactOnProcFormats });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ProcedureFormat, Value = qAReview.ProcedureFormat });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.IsRegularCustomer, Value = qAReview.IsRegularCustomer });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ImpactCommitment, Value = qAReview.ImpactCommitment });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ReviewComments, Value = qAReview.ReviewComments });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.InitiativeId, Value = qAReview.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.InitiativeName, Value = qAReview.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = QAReviewConstants.IsSave, Value = qAReview.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.Status, Value = qAReview.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.UpdatedBy, Value = qAReview.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = QAReviewConstants.UpdatedDate, Value = qAReview.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = QAReviewConstants.Plant, Value = qAReview.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.QaDocument, Value = qAReview.QaDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = QAReviewConstants.ModifiedBy, Value = qAReview.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteQAReviewByQAId(System.Int32? qAId)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_DELETE, QAReviewConstants.QAId, DbType.Int32, qAId, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllQAReview(List<int> qAIds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(QAReviewConstants.USP_QAReview_PSY_DELETE_ALL, QAReviewConstants.QAId, DbType.String, string.Join(',',  qAIds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
