using QAMS.Common.Entities;
using QAMS.WEB.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VAMLibrary.Core;
using VAMLibrary.Core.Common;

namespace QAMS.DataAccess.HODControl
{
    public class HODReviewData : IHODReviewData
    {
        private readonly DataAccessHelper dataAccessHelper;

        public HODReviewData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }

        public DataSet GetAllHODReview(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure("GetAllHODReviews", null, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public DataSet GetHODReviewByInitId(int p_InitId)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = "@InitId", Value = p_InitId });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure("GetAllHODReviews", null, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public bool SaveHODReview(HODReview hodReview)
        {
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>
        {
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@InitiativeId", Value = hodReview.InitiativeId },
            new SqlParameter { DbType = DbType.String, ParameterName = "@InitiativeName", Value = hodReview.InitiativeName },
            new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsSave", Value = hodReview.IsSave },
            new SqlParameter { DbType = DbType.String, ParameterName = "@Comments", Value = hodReview.Comments },
            new SqlParameter { DbType = DbType.String, ParameterName = "@Status", Value = hodReview.Status },
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@CreatedBy", Value = hodReview.CreatedBy },
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@UpdatedBy", Value = hodReview.UpdatedBy },
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@Plant", Value = hodReview.Plant }
        };
                Object result = dataAccessHelper.ExecuteStoredProcedure("InsertHODReview", sqlParams, ExecutionType.Scalar);

                return (Convert.ToInt32(result) > 0);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool UpdateHODReview(HODReview hodReview)
        {
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>
        {
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@HodId", Value = hodReview.HodId },
            new SqlParameter { DbType = DbType.Boolean, ParameterName = "@IsSave", Value = hodReview.IsSave },
            new SqlParameter { DbType = DbType.String, ParameterName = "@Comments", Value = hodReview.Comments },
            new SqlParameter { DbType = DbType.String, ParameterName = "@Status", Value = hodReview.Status },
            new SqlParameter { DbType = DbType.Int32, ParameterName = "@UpdatedBy", Value = hodReview.UpdatedBy }
        };
                Object result = dataAccessHelper.ExecuteStoredProcedure("UpdateHODReview", sqlParams, ExecutionType.Scalar);

                return (Convert.ToInt32(result) > 0);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<HODReview> SetAllHodReview(DataSet dataset)
        {
            List<HODReview> hodReviews = new List<HODReview>();

            if (dataset != null && dataset.Tables.Count > 0)
            {
                DataTable dataTable = dataset.Tables[0];
                foreach (DataRow row in dataTable.Rows)
                {
                    HODReview hodReview = new HODReview
                    {
                        HodId = Convert.ToInt32(row["HodId"]),
                        InitiativeId = Convert.ToInt32(row["InitiativeId"]),
                        InitiativeName = Convert.ToString(row["InitiativeName"]),
                        IsSave = Convert.ToBoolean(row["IsSave"]),
                        Comments = Convert.ToString(row["Comments"]),
                        Status = Convert.ToString(row["Status"]),
                        CreatedBy = Convert.ToInt32(row["CreatedBy"]),
                        UpdatedBy = Convert.ToInt32(row["UpdatedBy"]),
                        CreatedDate = Convert.ToString(row["CreatedDate"]),
                        UpdatedDate = Convert.ToString(row["UpdatedDate"]),
                        Plant = Convert.ToInt32(row["Plant"])
                    };
                    hodReviews.Add(hodReview);
                }
            }

            return hodReviews;
        }


    }
}
