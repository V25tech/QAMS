//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Admin.Entities;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Common.Entities;
    using QAMS.WEB.Services;
    using QAMS.WEB.Entities;


    // Comment
    public static class ChangeContolActionPlanConverter
    {

        public static List<ChangeContolActionPlan> SetAllChangeContolActionPlan(DataSet dataset)
        {
            try
            {
                List<ChangeContolActionPlan> result = new List<ChangeContolActionPlan>();
                ChangeContolActionPlan changeContolActionPlanData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        changeContolActionPlanData = new ChangeContolActionPlan();
                        changeContolActionPlanData.ChangeContolActionPlanId = DatatypeConverter.SetIntValue(row[ChangeContolActionPlanConstants.ChangeContolActionPlanId.TrimAt()]);
                        changeContolActionPlanData.Type = Convert.ToString(row[ChangeContolActionPlanConstants.Type.TrimAt()]);
                        changeContolActionPlanData.Description = Convert.ToString(row[ChangeContolActionPlanConstants.Description.TrimAt()]);
                        changeContolActionPlanData.DepartmentId = DatatypeConverter.SetIntValue(row[ChangeContolActionPlanConstants.DepartmentId.TrimAt()]);
                        changeContolActionPlanData.AssignedUser = DatatypeConverter.SetIntValue(row[ChangeContolActionPlanConstants.AssignedUser.TrimAt()]);
                        changeContolActionPlanData.AssignedUserGroup = DatatypeConverter.SetIntValue(row[ChangeContolActionPlanConstants.AssignedUserGroup.TrimAt()]);
                        changeContolActionPlanData.TargetDate = DatatypeConverter.SetDateTime(row[ChangeContolActionPlanConstants.TargetDate.TrimAt()]);
                        changeContolActionPlanData.Remarks = Convert.ToString(row[ChangeContolActionPlanConstants.Remarks.TrimAt()]);
                        changeContolActionPlanData.CreatedBy = Convert.ToInt32(row[ChangeContolActionPlanConstants.CreatedBy.TrimAt()]);
                        changeContolActionPlanData.CreatedDate = DatatypeConverter.SetDateTime(row[ChangeContolActionPlanConstants.CreatedDate.TrimAt()]);
                        changeContolActionPlanData.ModifiedBy = Convert.ToInt32(row[ChangeContolActionPlanConstants.ModifiedBy.TrimAt()]);
                        changeContolActionPlanData.ModifiedDate = DatatypeConverter.SetDateTime(row[ChangeContolActionPlanConstants.ModifiedDate.TrimAt()]);
                        changeContolActionPlanData.WorkflowId = Convert.ToInt32(row["WorkflowId"]);
                        changeContolActionPlanData.WorkflowName = Convert.ToString(row["WorkflowName"]);
                        changeContolActionPlanData.InitiativeId = Convert.ToInt32(row["InitiativeId"]);
                        changeContolActionPlanData.InitiativeName = Convert.ToString(row["InitiativeName"]);
                        changeContolActionPlanData.IsReviewed = Convert.ToBoolean(row["IsReviewed_PSY"]);
                        changeContolActionPlanData.IsApproved = Convert.ToBoolean(row["IsApproved_PSY"]);
                        changeContolActionPlanData.IsSave = row["IsSave_PSY"] != DBNull.Value ? Convert.ToBoolean(row["IsSave_PSY"]) : false;
                        changeContolActionPlanData.ReviewStatusComment = row["ReviewStatusComment_PSY"] != DBNull.Value ? Convert.ToString(row["ReviewStatusComment_PSY"]) : string.Empty;
                        changeContolActionPlanData.APReviewComments = row["APReviewComments"] != DBNull.Value ? Convert.ToString(row["APReviewComments"]) : string.Empty;
                        changeContolActionPlanData.APRemarks = row["APRemarks"] != DBNull.Value ? Convert.ToString(row["APRemarks"]) : string.Empty;
                        result.Add(changeContolActionPlanData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public static List<string> SetActivities(DataSet dataSet)
        {
            var result = SetAllActivities(dataSet);
            if (result.Count > 0)
            {
                return result;
            }
            return null;
        }

        private static List<string> SetAllActivities(DataSet dataset)
        {
            try
            {
                List<string> result = new List<string>();
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        string Activity = row["Activity_PSY"] != DBNull.Value ? Convert.ToString(row["Activity_PSY"]) : string.Empty;
                        result.Add(Activity);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public static ChangeContolActionPlan SetChangeContolActionPlan(DataSet dataset)
        {
            var result = SetAllChangeContolActionPlan(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
        public static List<ChangeContolActionPlan> SetChangeContolActionPlanByInitId(DataSet dataset)
        {
            var result = SetAllChangeContolActionPlan(dataset);
            if (result.Count > 0)
            {
                return result;
            }
            return null;
        }

        public static DataTable SetDataSet(List<ChangeContolActionPlan> changeContolActionPlans)
        {
            DataTable dataTable = new DataTable();
            DataRow row = null;
            SetDataTableColumns(dataTable);
            try
            {
                if (changeContolActionPlans != null && changeContolActionPlans.Count > 0)
                {
                    for (int i = 0; (i < changeContolActionPlans.Count); i = (i + 1))
                    {
                        row = dataTable.NewRow();
                        row[ChangeContolActionPlanConstants.ChangeContolActionPlanId.TrimAt()] = changeContolActionPlans[i].ChangeContolActionPlanId;
                        row[ChangeContolActionPlanConstants.Type.TrimAt()] = changeContolActionPlans[i].Type;
                        row[ChangeContolActionPlanConstants.Description.TrimAt()] = changeContolActionPlans[i].Description;
                        row[ChangeContolActionPlanConstants.DepartmentId.TrimAt()] = changeContolActionPlans[i].DepartmentId;
                        row[ChangeContolActionPlanConstants.AssignedUser.TrimAt()] = changeContolActionPlans[i].AssignedUser;
                        row[ChangeContolActionPlanConstants.AssignedUserGroup.TrimAt()] = changeContolActionPlans[i].AssignedUserGroup;
                        row[ChangeContolActionPlanConstants.TargetDate.TrimAt()] = changeContolActionPlans[i].TargetDate;
                        row[ChangeContolActionPlanConstants.Remarks.TrimAt()] = changeContolActionPlans[i].Remarks;
                        row[ChangeContolActionPlanConstants.CreatedBy.TrimAt()] = changeContolActionPlans[i].CreatedBy;
                        row[ChangeContolActionPlanConstants.CreatedDate.TrimAt()] = changeContolActionPlans[i].CreatedDate;
                        row[ChangeContolActionPlanConstants.ModifiedBy.TrimAt()] = changeContolActionPlans[i].ModifiedBy;
                        row[ChangeContolActionPlanConstants.ModifiedDate.TrimAt()] = changeContolActionPlans[i].ModifiedDate;
                        dataTable.Rows.Add(row);
                    }
                }
                return dataTable;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        private static void SetDataTableColumns(DataTable dataTable)
        {
            dataTable.TableName = "UT_ChangeContolActionPlan_PSY";
            dataTable.Columns.Add(ChangeContolActionPlanConstants.ChangeContolActionPlanId.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.Type.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.Description.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.DepartmentId.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.AssignedUser.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.AssignedUserGroup.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.TargetDate.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.Remarks.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.CreatedBy.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.CreatedDate.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.ModifiedBy.TrimAt());
            dataTable.Columns.Add(ChangeContolActionPlanConstants.ModifiedDate.TrimAt());
        }
    }
}
