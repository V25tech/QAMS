  CREATE PROCEDURE [dbo].[USP_Closure_PSY_UPDATE] @CId_PSY int, 
@IsSave_PSY NVarChar,
@ImplementEffChanges_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@Decision_PSY NVarChar(200),
@Remarks_PSY NVarChar(500),
@ActionPlanReviewComments_PSY NVarChar(500),
@IsAllDocumentsApprovedEff_PSY NVarChar,
@TrainingCompleted_PSY NVarChar,
@IsApprovedChangesEff_PSY NVarChar,
@IsIdentifiedActions_PSY NVarChar,
@CDocument_PSY Xml
 AS 
 BEGIN 
  BEGIN TRY 
 DECLARE @CCID INT=0 
 UPDATE [dbo].[Closure_PSY] SET 
IsSave_PSY=@IsSave_PSY,
ImplementEffChanges_PSY=@ImplementEffChanges_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=GETDATE(),
Decision_PSY=@Decision_PSY,
Remarks_PSY=@Remarks_PSY,
ActionPlanReviewComments_PSY=@ActionPlanReviewComments_PSY,
IsAllDocumentsApprovedEff_PSY=@IsAllDocumentsApprovedEff_PSY,
TrainingCompleted_PSY=@TrainingCompleted_PSY,
IsApprovedChangesEff_PSY=@IsApprovedChangesEff_PSY,
IsIdentifiedActions_PSY=@IsIdentifiedActions_PSY,
CDocument_PSY=@CDocument_PSY
 WHERE  [CId_PSY] = @CId_PSY ; 
 IF(@Status_PSY='APPROVE' OR @Status_PSY='APPROVED')
 BEGIN
 SET @CCID=(SELECT InitiativeId_PSY FROM Closure_PSY WHERE CId_PSY=@CId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
 ELSE IF(@Status_PSY='REJECT' OR @Status_PSY='REJECTED')
 BEGIN
 SET @CCID=(SELECT InitiativeId_PSY FROM Closure_PSY WHERE CId_PSY=@CId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
  select @CId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END