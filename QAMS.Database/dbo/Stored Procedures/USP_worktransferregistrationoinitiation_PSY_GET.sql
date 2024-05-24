  CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_GET] @wtriid_PSY int 
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
  FROM [dbo].[worktransferregistrationoinitiation_PSY] WITH (NOLOCK) where [wtriid_PSY] = @wtriid_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END