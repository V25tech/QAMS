  CREATE PROCEDURE [dbo].[USP_QADecision_PSY_UPDATE] @QADId_PSY int, 
@IsSave_PSY NVarChar,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@IsReviewedActions_PSY NVarChar,
@Remarks_PSY NVarChar(500),
@CNDocument_PSY Xml
 AS 
 BEGIN 
  BEGIN TRY 
  DECLARE @CCID INT=0
 UPDATE [dbo].[QADecision_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=GETDATE(),
IsReviewedActions_PSY=@IsReviewedActions_PSY,
Remarks_PSY=@Remarks_PSY,
CNDocument_PSY=@CNDocument_PSY
 WHERE  [QADId_PSY] = @QADId_PSY ;  
 IF(@Status_PSY='APPROVED' OR @Status_PSY='APPROVE')
 BEGIN
 SET @CCID=(SELECT InitiativeId_PSY FROM QADecision_PSY WHERE QADId_PSY=@QADId_PSY)
 UPDATE ChangeControlRegistration_PSY SET ChangeControlUniqueCode_PSY = REPLACE(ChangeControlUniqueCode_PSY, 'PROV-', '') WHERE ChangeControlId_PSY=@CCID;
 END
 IF(@Status_PSY='REJECT' OR @Status_PSY='REJECTED')
 BEGIN
 SET @CCID=(SELECT InitiativeId_PSY FROM QADecision_PSY WHERE QADId_PSY=@QADId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
  select @QADId_PSY; 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END