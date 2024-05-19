
namespace QAMS.WEB.Data
{
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using VAMLibrary.Core;
    using VAMLibrary.Core.Common;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;


    // Comment
    public class NewdocumentData : INewdocumentData
    {
        
        private readonly DataAccessHelper dataAccessHelper;
        
        public NewdocumentData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }
        
        public DataSet GetAllnewdocument(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new()
                {
                    new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber },
                    new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize }
                };
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public DataSet GetnewdocumentBynd(System.Int32? nd)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_GET, NewDocumentConstants.nd, DbType.Int32, nd, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Savenewdocument(NewDocument newdocument)
        {
            try
            {
                List<SqlParameter> sqlparms = new()
                {
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.title, Value = newdocument.title },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.description, Value = newdocument.description },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.uploadfile, Value = newdocument.uploadfile },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.CreatedBy, Value = newdocument.CreatedBy },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.ModifiedBy, Value = newdocument.ModifiedBy },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.Category, Value = newdocument.Category },
                    new SqlParameter { DbType = DbType.Int16, ParameterName = NewDocumentConstants.CatId, Value = newdocument.CatId }
                };
                Object result = dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Updatenewdocument(NewDocument newdocument)
        {
            try
            {
                List<SqlParameter> sqlparms = new()
                {
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.nd, Value = newdocument.nd },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.title, Value = newdocument.title },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.description, Value = newdocument.description },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.uploadfile, Value = newdocument.uploadfile },
                    new SqlParameter { DbType = DbType.String, ParameterName = NewDocumentConstants.ModifiedBy, Value = newdocument.ModifiedBy }
                };
                Object result = dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeletenewdocumentBynd(System.Int32? nd)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_DELETE, NewDocumentConstants.nd, DbType.Int32, nd, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        
        public bool DeleteAllnewdocument(List<int> nds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(NewDocumentConstants.USP_newdocument_PSY_DELETE_ALL, NewDocumentConstants.nd, DbType.String, string.Join(',',  nds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (Exception)
            {
                throw;
            }
        }

       
    }
}
