  CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_UPDATE] @ChangeContolQaApprovalId_PSY int, 
@ChangeControlId_PSY Int,
@ClassificationOfChange_PSY Bit,
@ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY Bit,
@ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY NVarChar(250),
@AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY Bit,
@ImpactedRegulatoryCustomerCommitments_PSY NVarChar(250),
@AdditionalActionPlanProposalsRequired_PSY Bit,
@ProposedAdditionalActionPlans_PSY NVarChar(150),
@RiskAssesmentRequired_PSY Bit,
@ProposedRiskAssesment_PSY Int,
@CustomerApproval_PSY Int,
@DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY Int,
@QAReviewComments_PSY NVarChar(2000),
@Documents_PSY NVarChar(max),
@Remarks_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ChangeContolQaApproval_PSY] SET 
ChangeControlId_PSY=@ChangeControlId_PSY,
ClassificationOfChange_PSY=@ClassificationOfChange_PSY,
ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY=@ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY,
ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY=@ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY,
AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY=@AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY,
ImpactedRegulatoryCustomerCommitments_PSY=@ImpactedRegulatoryCustomerCommitments_PSY,
AdditionalActionPlanProposalsRequired_PSY=@AdditionalActionPlanProposalsRequired_PSY,
ProposedAdditionalActionPlans_PSY=@ProposedAdditionalActionPlans_PSY,
RiskAssesmentRequired_PSY=@RiskAssesmentRequired_PSY,
ProposedRiskAssesment_PSY=@ProposedRiskAssesment_PSY,
CustomerApproval_PSY=@CustomerApproval_PSY,
DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY=@DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY,
QAReviewComments_PSY=@QAReviewComments_PSY,
Documents_PSY=@Documents_PSY,
Remarks_PSY=@Remarks_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [ChangeContolQaApprovalId_PSY] = @ChangeContolQaApprovalId_PSY ;  select @ChangeContolQaApprovalId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 