 CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT wtriid_PSY,
worktransferdescription_PSY,
worktransferfrom_PSY,
tasklist_PSY,
worktransferto_PSY,
validupto_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[worktransferregistrationoinitiation_PSY] WITH (NOLOCK) 
 Order by [wtriid_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END