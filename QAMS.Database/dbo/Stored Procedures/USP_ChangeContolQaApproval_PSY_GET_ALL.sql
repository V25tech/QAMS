 CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT ChangeContolQaApprovalId_PSY,
ChangeControlId_PSY,
ClassificationOfChange_PSY,
ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY,
ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY,
AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY,
ImpactedRegulatoryCustomerCommitments_PSY,
AdditionalActionPlanProposalsRequired_PSY,
ProposedAdditionalActionPlans_PSY,
RiskAssesmentRequired_PSY,
ProposedRiskAssesment_PSY,
CustomerApproval_PSY,
DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY,
QAReviewComments_PSY,
Documents_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[ChangeContolQaApproval_PSY] WITH (NOLOCK) 
 Order by [ChangeContolQaApprovalId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 