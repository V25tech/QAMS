  CREATE PROCEDURE [dbo].[USP_CFTReview_PSY_UPDATE] @CFTId_PSY int,
@IsSave_PSY NVarChar,
@Remarks_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@IsProposedChange_PSY NVarChar,
@CFTDocument_PSY Xml

 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[CFTReview_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Remarks_PSY=@Remarks_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,
IsProposedChange_PSY=@IsProposedChange_PSY,
CFTDocument_PSY=@CFTDocument_PSY
 WHERE  [CFTId_PSY] = @CFTId_PSY ;  
 IF(@Status_PSY='REJECT' OR @Status_PSY='REJECTED')
 BEGIN
  DECLARE @CCID INT=0
 SET @CCID=(SELECT InitiativeId_PSY FROM CFTReview_PSY WHERE CFTId_PSY=@CFTId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
 select @CFTId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END