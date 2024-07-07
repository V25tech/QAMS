  CREATE PROCEDURE [dbo].[USP_ActionPlanReview_PSY_UPDATE] @APId_PSY int, @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY NVarChar,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,

@Decision_PSY NVarChar,
@Remarks_PSY NVarChar(500),
@ActionPlanReviewComments_PSY NVarChar(500),
@APDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ActionPlanReview_PSY] SET InitiativeId_PSY=@InitiativeId_PSY,
InitiativeName_PSY=@InitiativeName_PSY,
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,

Decision_PSY=@Decision_PSY,
Remarks_PSY=@Remarks_PSY,
ActionPlanReviewComments_PSY=@ActionPlanReviewComments_PSY,
APDocument_PSY=@APDocument_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [APId_PSY] = @APId_PSY ;  select @APId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END