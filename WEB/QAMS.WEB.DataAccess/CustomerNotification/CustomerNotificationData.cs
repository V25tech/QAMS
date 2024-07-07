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
    public class CustomerNotificationData : ICustomerNotificationData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public CustomerNotificationData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllCustomerNotification(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetCustomerNotificationByCNId(System.Int32? cNId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_GET, CustomerNotificationConstants.CNId, DbType.Int32, cNId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveCustomerNotification(CustomerNotification customerNotification)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.InitiativeId, Value = customerNotification.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.InitiativeName, Value = customerNotification.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = CustomerNotificationConstants.IsSave, Value = customerNotification.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Comments, Value = customerNotification.Comments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Status, Value = customerNotification.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.CreatedBy, Value = customerNotification.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.UpdatedBy, Value = customerNotification.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = CustomerNotificationConstants.UpdatedDate, Value = customerNotification.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.Plant, Value = customerNotification.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = CustomerNotificationConstants.IsProposedChange, Value = customerNotification.IsProposedChange });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Remarks, Value = customerNotification.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.CNDocument, Value = customerNotification.CNDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.ModifiedBy, Value = customerNotification.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateCustomerNotification(CustomerNotification customerNotification)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.CNId, Value = customerNotification.CNId });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.InitiativeId, Value = customerNotification.InitiativeId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.InitiativeName, Value = customerNotification.InitiativeName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = CustomerNotificationConstants.IsSave, Value = customerNotification.IsSave });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Comments, Value = customerNotification.Comments });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Status, Value = customerNotification.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.UpdatedBy, Value = customerNotification.UpdatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = CustomerNotificationConstants.UpdatedDate, Value = customerNotification.UpdatedDate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = CustomerNotificationConstants.Plant, Value = customerNotification.Plant });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = CustomerNotificationConstants.IsProposedChange, Value = customerNotification.IsProposedChange });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.Remarks, Value = customerNotification.Remarks });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.CNDocument, Value = customerNotification.CNDocument });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = CustomerNotificationConstants.ModifiedBy, Value = customerNotification.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteCustomerNotificationByCNId(System.Int32? cNId)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_DELETE, CustomerNotificationConstants.CNId, DbType.Int32, cNId, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllCustomerNotification(List<int> cNIds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(CustomerNotificationConstants.USP_CustomerNotification_PSY_DELETE_ALL, CustomerNotificationConstants.CNId, DbType.String, string.Join(',',  cNIds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
