  CREATE PROCEDURE [dbo].[USP_ActionPlanReview_PSY_GET] @APId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Comments_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
APId_PSY,
Decision_PSY,
Remarks_PSY,
ActionPlanReviewComments_PSY,
APDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[ActionPlanReview_PSY] WITH (NOLOCK) where [APId_PSY] = @APId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END