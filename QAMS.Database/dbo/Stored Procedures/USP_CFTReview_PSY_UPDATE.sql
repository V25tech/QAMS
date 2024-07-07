  CREATE PROCEDURE [dbo].[USP_CFTReview_PSY_UPDATE] @CFTId_PSY int, @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY NVarChar,
@Remarks_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@IsProposedChange_PSY NVarChar,
@CFTDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[CFTReview_PSY] SET InitiativeId_PSY=@InitiativeId_PSY,
InitiativeName_PSY=@InitiativeName_PSY,
IsSave_PSY=@IsSave_PSY,
Remarks_PSY=@Remarks_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,
IsProposedChange_PSY=@IsProposedChange_PSY,
CFTDocument_PSY=@CFTDocument_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [CFTId_PSY] = @CFTId_PSY ;  select @CFTId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END