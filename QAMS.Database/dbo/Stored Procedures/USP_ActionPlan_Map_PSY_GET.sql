  CREATE PROCEDURE [dbo].[USP_ActionPlan_Map_PSY_GET] @UserId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT UserId_PSY,
CategoryId_PSY,
IsReviewed_PSY,
IsActionPlan_PSY,
initId_PSY,
DocumentAction_PSY,
DocumentCategory_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[ActionPlan_Map_PSY] WITH (NOLOCK) where [UserId_PSY] = @UserId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END