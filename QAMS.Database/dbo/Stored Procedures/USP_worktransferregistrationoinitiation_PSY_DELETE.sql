  CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_DELETE] @wtriid_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[worktransferregistrationoinitiation_PSY]  WHERE [wtriid_PSY] IN (@wtriid_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END