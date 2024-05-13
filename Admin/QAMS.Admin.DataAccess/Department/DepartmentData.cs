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
    public class DepartmentData : IDepartmentData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public DepartmentData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllDepartment(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetDepartmentById(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_GET, DepartmentConstants.Id, DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveDepartment(Department department)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.Name, Value = department.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.Code, Value = department.Code });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.CreatedBy, Value = department.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.ModifiedBy, Value = department.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateDepartment(Department department)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = DepartmentConstants.Id, Value = department.Id });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.Name, Value = department.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.Code, Value = department.Code });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = DepartmentConstants.ModifiedBy, Value = department.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteDepartmentById(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_DELETE, DepartmentConstants.Id, DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllDepartment(List<int> ids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(DepartmentConstants.USP_Department_PSY_DELETE_ALL, DepartmentConstants.Id, DbType.String, string.Join(',',  ids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
