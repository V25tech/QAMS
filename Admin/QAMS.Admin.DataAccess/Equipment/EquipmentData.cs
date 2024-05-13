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
    public class EquipmentData : IEquipmentData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public EquipmentData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllEquipment(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetEquipmentById(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_GET, EquipmentConstants.Id, DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveEquipment(Equipment equipment)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Name, Value = equipment.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.EquipmentId, Value = equipment.EquipmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Make, Value = equipment.Make });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Model, Value = equipment.Model });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.SerialNumber, Value = equipment.SerialNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.InstalledLocation, Value = equipment.InstalledLocation });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = EquipmentConstants.DepartmentId, Value = equipment.DepartmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = EquipmentConstants.InstalledOn, Value = equipment.InstalledOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = EquipmentConstants.WarrantyExpiresOn, Value = equipment.WarrantyExpiresOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.SuppliedBy, Value = equipment.SuppliedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Software, Value = equipment.Software });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.CreatedBy, Value = equipment.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.ModifiedBy, Value = equipment.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateEquipment(Equipment equipment)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = EquipmentConstants.Id, Value = equipment.Id });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Name, Value = equipment.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.EquipmentId, Value = equipment.EquipmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Make, Value = equipment.Make });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Model, Value = equipment.Model });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.SerialNumber, Value = equipment.SerialNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.InstalledLocation, Value = equipment.InstalledLocation });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = EquipmentConstants.DepartmentId, Value = equipment.DepartmentId });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = EquipmentConstants.InstalledOn, Value = equipment.InstalledOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = EquipmentConstants.WarrantyExpiresOn, Value = equipment.WarrantyExpiresOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.SuppliedBy, Value = equipment.SuppliedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.Software, Value = equipment.Software });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = EquipmentConstants.ModifiedBy, Value = equipment.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteEquipmentById(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_DELETE, EquipmentConstants.Id, DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllEquipment(List<int> ids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_DELETE_ALL, EquipmentConstants.Id, DbType.String, string.Join(',',  ids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetEquipmentByDepartmentId(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_By_Id_GET, "@Id", DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteEquipmentByDepartmentId(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(EquipmentConstants.USP_Equipment_PSY_By_Id_DELETE, "@Id", DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
