  CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_DELETE_ALL] @wtriid_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[worktransferregistrationoinitiation_PSY] WHERE [wtriid_PSY] IN (select value from STRING_SPLIT(@wtriid_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END