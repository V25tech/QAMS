  CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_By_ChangeControlId_DELETE] @ChangeControlId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolQaApproval_PSY]  WHERE ChangeControlId_PSY IN (@ChangeControlId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 