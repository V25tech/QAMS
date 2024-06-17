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
    
    
    // Comment
    public class RoleData : IRoleData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public RoleData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllRole(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetRoleById(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_GET, RoleConstants.Id, DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveRole(Role role)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.Name, Value = role.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.Description, Value = role.Description });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.CreatedBy, Value = role.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.ModifiedBy, Value = role.ModifiedBy });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.RuleMetadata, Value = role.roleMetadata });
                Object result = dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateRole(Role role)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
               // sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RoleConstants.Id, Value = role.Id });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.Name, Value = role.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.Description, Value = role.Description });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = RoleConstants.ModifiedBy, Value = role.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteRoleById(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_DELETE, RoleConstants.Id, DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllRole(List<int> ids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(RoleConstants.USP_Role_PSY_DELETE_ALL, RoleConstants.Id, DbType.String, string.Join(',',  ids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
