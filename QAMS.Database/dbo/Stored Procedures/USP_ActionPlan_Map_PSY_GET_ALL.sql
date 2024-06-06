 CREATE PROCEDURE [dbo].[USP_ActionPlan_Map_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
 ,count(*) over() as TotalRows 
 FROM [dbo].[ActionPlan_Map_PSY] WITH (NOLOCK) 
 Order by [UserId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END