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
    public class ProductData : IProductData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public ProductData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllProduct(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetProductById(System.Int32? id)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_GET, ProductConstants.Id, DbType.Int32, id, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveProduct(Product product)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.Name, Value = product.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.Code, Value = product.Code });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.ChemicalName, Value = product.ChemicalName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ProductConstants.IsActive, Value = product.IsActive });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.CreatedBy, Value = product.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.ModifiedBy, Value = product.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateProduct(Product product)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ProductConstants.Id, Value = product.Id });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.Name, Value = product.Name });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.Code, Value = product.Code });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.ChemicalName, Value = product.ChemicalName });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ProductConstants.IsActive, Value = product.IsActive });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ProductConstants.ModifiedBy, Value = product.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteProductById(System.Int32? id)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_DELETE, ProductConstants.Id, DbType.Int32, id, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllProduct(List<int> ids)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ProductConstants.USP_Product_PSY_DELETE_ALL, ProductConstants.Id, DbType.String, string.Join(',',  ids), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
