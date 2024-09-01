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
  
 UPDATE [dbo].[QADecision_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=GETDATE(),
IsReviewedActions_PSY=@IsReviewedActions_PSY,
Remarks_PSY=@Remarks_PSY,
CNDocument_PSY=@CNDocument_PSY
 WHERE  [QADId_PSY] = @QADId_PSY ;  select @QADId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END