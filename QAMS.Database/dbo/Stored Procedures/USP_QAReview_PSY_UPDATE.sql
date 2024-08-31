  CREATE PROCEDURE [dbo].[USP_QAReview_PSY_UPDATE] @QAId_PSY int, @ImpactOnProcFormats_PSY NVarChar,
@ProcedureFormat_PSY NVarChar(150),
@ClassificationOfChange_PSY bit,
@IsRegularCustomer_PSY NVarChar,
@ImpactCommitment_PSY NVarChar(500),
@ReviewComments_PSY NVarChar(500),
@IsSave_PSY NVarChar,
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[QAReview_PSY] SET ImpactOnProcFormats_PSY=@ImpactOnProcFormats_PSY,
ProcedureFormat_PSY=@ProcedureFormat_PSY,
ClassificationOfChange_PSY=@ClassificationOfChange_PSY,
IsRegularCustomer_PSY=@IsRegularCustomer_PSY,
ImpactCommitment_PSY=@ImpactCommitment_PSY,
ReviewComments_PSY=@ReviewComments_PSY,
IsSave_PSY=@IsSave_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY WHERE  [QAId_PSY] = @QAId_PSY ;  select @QAId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END