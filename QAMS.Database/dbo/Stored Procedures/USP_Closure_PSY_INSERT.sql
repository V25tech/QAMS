  CREATE PROCEDURE [dbo].[USP_Closure_PSY_INSERT] @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY bit,
@ImplementEffChanges_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@CreatedBy_PSY Int,
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@Decision_PSY NVarChar(200),
@Remarks_PSY NVarChar(500),
@ActionPlanReviewComments_PSY NVarChar(500),
@IsAllDocumentsApprovedEff_PSY bit,
@TrainingCompleted_PSY bit,
@IsApprovedChangesEff_PSY bit,
@IsIdentifiedActions_PSY bit,
@CDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[Closure_PSY] 
 (InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
ImplementEffChanges_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
Decision_PSY,
Remarks_PSY,
ActionPlanReviewComments_PSY,
IsAllDocumentsApprovedEff_PSY,
TrainingCompleted_PSY,
IsApprovedChangesEff_PSY,
IsIdentifiedActions_PSY,
CDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@InitiativeId_PSY,
@InitiativeName_PSY,
@IsSave_PSY,
@ImplementEffChanges_PSY,
@Status_PSY,
@CreatedBy_PSY,
@UpdatedBy_PSY,
 GetDate() ,
@UpdatedDate_PSY,
@Plant_PSY,
@Decision_PSY,
@Remarks_PSY,
@ActionPlanReviewComments_PSY,
@IsAllDocumentsApprovedEff_PSY,
@TrainingCompleted_PSY,
@IsApprovedChangesEff_PSY,
@IsIdentifiedActions_PSY,
@CDocument_PSY,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END