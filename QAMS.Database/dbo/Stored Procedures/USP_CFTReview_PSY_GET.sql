  CREATE PROCEDURE [dbo].[USP_CFTReview_PSY_GET] @CFTId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Remarks_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
IsProposedChange_PSY,
CFTId_PSY,
CFTDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[CFTReview_PSY] WITH (NOLOCK) where [CFTId_PSY] = @CFTId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END