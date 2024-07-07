  CREATE PROCEDURE [dbo].[USP_Closure_PSY_UPDATE] @CId_PSY int, @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY NVarChar,
@ImplementEffChanges_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,

@Decision_PSY NVarChar(200),
@Remarks_PSY NVarChar(500),
@ActionPlanReviewComments_PSY NVarChar(500),
@IsAllDocumentsApprovedEff_PSY NVarChar,
@TrainingCompleted_PSY NVarChar,
@IsApprovedChangesEff_PSY NVarChar,
@IsIdentifiedActions_PSY NVarChar,
@CDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Closure_PSY] SET InitiativeId_PSY=@InitiativeId_PSY,
InitiativeName_PSY=@InitiativeName_PSY,
IsSave_PSY=@IsSave_PSY,
ImplementEffChanges_PSY=@ImplementEffChanges_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,

Decision_PSY=@Decision_PSY,
Remarks_PSY=@Remarks_PSY,
ActionPlanReviewComments_PSY=@ActionPlanReviewComments_PSY,
IsAllDocumentsApprovedEff_PSY=@IsAllDocumentsApprovedEff_PSY,
TrainingCompleted_PSY=@TrainingCompleted_PSY,
IsApprovedChangesEff_PSY=@IsApprovedChangesEff_PSY,
IsIdentifiedActions_PSY=@IsIdentifiedActions_PSY,
CDocument_PSY=@CDocument_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [CId_PSY] = @CId_PSY ;  select @CId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END