  CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_INSERT]
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
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ChangeContolQaApproval_PSY] 
 (
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
ModifiedDate_PSY)
 VALUES 
(
@ChangeControlId_PSY,
@ClassificationOfChange_PSY,
@ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY,
@ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY,
@AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY,
@ImpactedRegulatoryCustomerCommitments_PSY,
@AdditionalActionPlanProposalsRequired_PSY,
@ProposedAdditionalActionPlans_PSY,
@RiskAssesmentRequired_PSY,
@ProposedRiskAssesment_PSY,
@CustomerApproval_PSY,
@DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY,
@QAReviewComments_PSY,
@Documents_PSY,
@Remarks_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 