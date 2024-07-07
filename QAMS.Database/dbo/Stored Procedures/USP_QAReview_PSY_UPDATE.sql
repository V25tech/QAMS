  CREATE PROCEDURE [dbo].[USP_QAReview_PSY_UPDATE] @QAId_PSY int, @ImpactOnProcFormats_PSY NVarChar,
@ProcedureFormat_PSY NVarChar(150),
@IsRegularCustomer_PSY NVarChar,
@ImpactCommitment_PSY NVarChar(500),
@ReviewComments_PSY NVarChar(500),
@InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY NVarChar,
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,

@QaDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[QAReview_PSY] SET ImpactOnProcFormats_PSY=@ImpactOnProcFormats_PSY,
ProcedureFormat_PSY=@ProcedureFormat_PSY,
IsRegularCustomer_PSY=@IsRegularCustomer_PSY,
ImpactCommitment_PSY=@ImpactCommitment_PSY,
ReviewComments_PSY=@ReviewComments_PSY,
InitiativeId_PSY=@InitiativeId_PSY,
InitiativeName_PSY=@InitiativeName_PSY,
IsSave_PSY=@IsSave_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,

QaDocument_PSY=@QaDocument_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [QAId_PSY] = @QAId_PSY ;  select @QAId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END