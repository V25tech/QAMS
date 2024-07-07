  CREATE PROCEDURE [dbo].[USP_QAReview_PSY_INSERT] @ImpactOnProcFormats_PSY bit,
@ProcedureFormat_PSY NVarChar(150),
@IsRegularCustomer_PSY bit,
@ImpactCommitment_PSY NVarChar(500),
@ReviewComments_PSY NVarChar(500),
@InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY bit,
@Status_PSY NVarChar(100),
@CreatedBy_PSY Int,
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@QAId_PSY Int,
@QaDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[QAReview_PSY] 
 (ImpactOnProcFormats_PSY,
ProcedureFormat_PSY,
IsRegularCustomer_PSY,
ImpactCommitment_PSY,
ReviewComments_PSY,
InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
QAId_PSY,
QaDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@ImpactOnProcFormats_PSY,
@ProcedureFormat_PSY,
@IsRegularCustomer_PSY,
@ImpactCommitment_PSY,
@ReviewComments_PSY,
@InitiativeId_PSY,
@InitiativeName_PSY,
@IsSave_PSY,
@Status_PSY,
@CreatedBy_PSY,
@UpdatedBy_PSY,
 GetDate() ,
@UpdatedDate_PSY,
@Plant_PSY,
@QAId_PSY,
@QaDocument_PSY,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END