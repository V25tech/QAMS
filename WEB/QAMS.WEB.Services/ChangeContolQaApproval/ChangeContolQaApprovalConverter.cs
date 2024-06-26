//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.WEB.Entities;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Common.Entities;
    
    
    // Comment
    public static class ChangeContolQaApprovalConverter
    {
        
        public static List<ChangeContolQaApproval> SetAllChangeContolQaApproval(DataSet dataset)
        {
            try
            {
                List<ChangeContolQaApproval> result = new List<ChangeContolQaApproval>();
                ChangeContolQaApproval changeContolQaApprovalData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        changeContolQaApprovalData = new ChangeContolQaApproval();
                        changeContolQaApprovalData.ChangeContolQaApprovalId = DatatypeConverter.SetIntValue(row[ChangeContolQaApprovalConstants.ChangeContolQaApprovalId.TrimAt()]);
                        changeContolQaApprovalData.ChangeControlId = DatatypeConverter.SetIntValue(row[ChangeContolQaApprovalConstants.ChangeControlId.TrimAt()]);
                        changeContolQaApprovalData.ClassificationOfChange = DatatypeConverter.SetBoolValue(row[ChangeContolQaApprovalConstants.ClassificationOfChange.TrimAt()]);
                        changeContolQaApprovalData.ImpactOnProceduresOrDrawingsOrAssociatedFormats = DatatypeConverter.SetBoolValue(row[ChangeContolQaApprovalConstants.ImpactOnProceduresOrDrawingsOrAssociatedFormats.TrimAt()]);
                        changeContolQaApprovalData.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange = Convert.ToString(row[ChangeContolQaApprovalConstants.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange.TrimAt()]);
                        changeContolQaApprovalData.AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange = DatatypeConverter.SetBoolValue(row[ChangeContolQaApprovalConstants.AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange.TrimAt()]);
                        changeContolQaApprovalData.ImpactedRegulatoryCustomerCommitments = Convert.ToString(row[ChangeContolQaApprovalConstants.ImpactedRegulatoryCustomerCommitments.TrimAt()]);
                        changeContolQaApprovalData.AdditionalActionPlanProposalsRequired = DatatypeConverter.SetBoolValue(row[ChangeContolQaApprovalConstants.AdditionalActionPlanProposalsRequired.TrimAt()]);
                        changeContolQaApprovalData.ProposedAdditionalActionPlans = Convert.ToString(row[ChangeContolQaApprovalConstants.ProposedAdditionalActionPlans.TrimAt()]);
                        changeContolQaApprovalData.RiskAssesmentRequired = DatatypeConverter.SetBoolValue(row[ChangeContolQaApprovalConstants.RiskAssesmentRequired.TrimAt()]);
                        changeContolQaApprovalData.ProposedRiskAssesment = DatatypeConverter.SetIntValue(row[ChangeContolQaApprovalConstants.ProposedRiskAssesment.TrimAt()]);
                        changeContolQaApprovalData.CustomerApproval = DatatypeConverter.SetIntValue(row[ChangeContolQaApprovalConstants.CustomerApproval.TrimAt()]);
                        changeContolQaApprovalData.DepartmentsRequiredToProvideImpactAssesmentEvaluation = DatatypeConverter.SetIntValue(row[ChangeContolQaApprovalConstants.DepartmentsRequiredToProvideImpactAssesmentEvaluation.TrimAt()]);
                        changeContolQaApprovalData.QAReviewComments = Convert.ToString(row[ChangeContolQaApprovalConstants.QAReviewComments.TrimAt()]);
                        changeContolQaApprovalData.Documents = Convert.ToString(row[ChangeContolQaApprovalConstants.Documents.TrimAt()]);
                        changeContolQaApprovalData.Remarks = Convert.ToString(row[ChangeContolQaApprovalConstants.Remarks.TrimAt()]);
                        changeContolQaApprovalData.CreatedBy = Convert.ToString(row[ChangeContolQaApprovalConstants.CreatedBy.TrimAt()]);
                        changeContolQaApprovalData.CreatedDate = DatatypeConverter.SetDateTime(row[ChangeContolQaApprovalConstants.CreatedDate.TrimAt()]);
                        changeContolQaApprovalData.ModifiedBy = Convert.ToString(row[ChangeContolQaApprovalConstants.ModifiedBy.TrimAt()]);
                        changeContolQaApprovalData.ModifiedDate = DatatypeConverter.SetDateTime(row[ChangeContolQaApprovalConstants.ModifiedDate.TrimAt()]);
                        result.Add(changeContolQaApprovalData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static ChangeContolQaApproval SetChangeContolQaApproval(DataSet dataset)
        {
            var result = SetAllChangeContolQaApproval(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
        
        public static DataTable SetDataSet(List<ChangeContolQaApproval> changeContolQaApprovals)
        {
            DataTable dataTable = new DataTable();
            DataRow row = null;
            SetDataTableColumns(dataTable);
            try
            {
                if (changeContolQaApprovals != null && changeContolQaApprovals.Count > 0)
                {
                    for (int i = 0; (i < changeContolQaApprovals.Count); i = (i + 1))
                    {
                        row = dataTable.NewRow();
                        row[ChangeContolQaApprovalConstants.ChangeContolQaApprovalId.TrimAt()] = changeContolQaApprovals[i].ChangeContolQaApprovalId;
                        row[ChangeContolQaApprovalConstants.ChangeControlId.TrimAt()] = changeContolQaApprovals[i].ChangeControlId;
                        row[ChangeContolQaApprovalConstants.ClassificationOfChange.TrimAt()] = changeContolQaApprovals[i].ClassificationOfChange;
                        row[ChangeContolQaApprovalConstants.ImpactOnProceduresOrDrawingsOrAssociatedFormats.TrimAt()] = changeContolQaApprovals[i].ImpactOnProceduresOrDrawingsOrAssociatedFormats;
                        row[ChangeContolQaApprovalConstants.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange.TrimAt()] = changeContolQaApprovals[i].ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange;
                        row[ChangeContolQaApprovalConstants.AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange.TrimAt()] = changeContolQaApprovals[i].AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange;
                        row[ChangeContolQaApprovalConstants.ImpactedRegulatoryCustomerCommitments.TrimAt()] = changeContolQaApprovals[i].ImpactedRegulatoryCustomerCommitments;
                        row[ChangeContolQaApprovalConstants.AdditionalActionPlanProposalsRequired.TrimAt()] = changeContolQaApprovals[i].AdditionalActionPlanProposalsRequired;
                        row[ChangeContolQaApprovalConstants.ProposedAdditionalActionPlans.TrimAt()] = changeContolQaApprovals[i].ProposedAdditionalActionPlans;
                        row[ChangeContolQaApprovalConstants.RiskAssesmentRequired.TrimAt()] = changeContolQaApprovals[i].RiskAssesmentRequired;
                        row[ChangeContolQaApprovalConstants.ProposedRiskAssesment.TrimAt()] = changeContolQaApprovals[i].ProposedRiskAssesment;
                        row[ChangeContolQaApprovalConstants.CustomerApproval.TrimAt()] = changeContolQaApprovals[i].CustomerApproval;
                        row[ChangeContolQaApprovalConstants.DepartmentsRequiredToProvideImpactAssesmentEvaluation.TrimAt()] = changeContolQaApprovals[i].DepartmentsRequiredToProvideImpactAssesmentEvaluation;
                        row[ChangeContolQaApprovalConstants.QAReviewComments.TrimAt()] = changeContolQaApprovals[i].QAReviewComments;
                        row[ChangeContolQaApprovalConstants.Documents.TrimAt()] = changeContolQaApprovals[i].Documents;
                        row[ChangeContolQaApprovalConstants.Remarks.TrimAt()] = changeContolQaApprovals[i].Remarks;
                        row[ChangeContolQaApprovalConstants.CreatedBy.TrimAt()] = changeContolQaApprovals[i].CreatedBy;
                        row[ChangeContolQaApprovalConstants.CreatedDate.TrimAt()] = changeContolQaApprovals[i].CreatedDate;
                        row[ChangeContolQaApprovalConstants.ModifiedBy.TrimAt()] = changeContolQaApprovals[i].ModifiedBy;
                        row[ChangeContolQaApprovalConstants.ModifiedDate.TrimAt()] = changeContolQaApprovals[i].ModifiedDate;
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
            dataTable.TableName = "UT_ChangeContolQaApproval_PSY";
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ChangeContolQaApprovalId.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ChangeControlId.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ClassificationOfChange.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ImpactOnProceduresOrDrawingsOrAssociatedFormats.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ImpactedRegulatoryCustomerCommitments.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.AdditionalActionPlanProposalsRequired.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ProposedAdditionalActionPlans.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.RiskAssesmentRequired.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ProposedRiskAssesment.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.CustomerApproval.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.DepartmentsRequiredToProvideImpactAssesmentEvaluation.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.QAReviewComments.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.Documents.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.Remarks.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.CreatedBy.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.CreatedDate.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ModifiedBy.TrimAt());
            dataTable.Columns.Add(ChangeContolQaApprovalConstants.ModifiedDate.TrimAt());
        }
    }
}
