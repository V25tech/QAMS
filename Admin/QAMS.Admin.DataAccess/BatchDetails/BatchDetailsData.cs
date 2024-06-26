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


    // Comment
    public class BatchDetailsData : IBatchDetailsData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public BatchDetailsData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllBatchDetails()
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = 1});
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = 100 });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetBatchDetailsById(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_GET, BatchDetailsConstants.Id, DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveBatchDetails(BatchDetails batchDetails)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.BatchId, Value = batchDetails.BatchId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.Material, Value = batchDetails.productMaterial });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.ARNumber, Value = batchDetails.arno });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.InitiatedBy, Value = batchDetails.InitiatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = BatchDetailsConstants.InitiatedOn, Value = batchDetails.InitiatedOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.CreatedBy, Value = batchDetails.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.ModifiedBy, Value = batchDetails.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateBatchDetails(BatchDetails batchDetails)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = BatchDetailsConstants.Id, Value = batchDetails.Id });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.BatchId, Value = batchDetails.BatchId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.Material, Value = batchDetails.productMaterial });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.ARNumber, Value = batchDetails.arno });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.InitiatedBy, Value = batchDetails.InitiatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = BatchDetailsConstants.InitiatedOn, Value = batchDetails.InitiatedOn });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = BatchDetailsConstants.ModifiedBy, Value = batchDetails.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteBatchDetailsById(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_DELETE, BatchDetailsConstants.Id, DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllBatchDetails(List<int> ids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(BatchDetailsConstants.USP_BatchDetails_PSY_DELETE_ALL, BatchDetailsConstants.Id, DbType.String, string.Join(',',  ids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
