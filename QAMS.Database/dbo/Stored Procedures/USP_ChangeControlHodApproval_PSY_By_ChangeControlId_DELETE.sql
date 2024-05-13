  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_By_ChangeControlId_DELETE] @ChangeControlId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeControlHodApproval_PSY]  WHERE ChangeControlId_PSY IN (@ChangeControlId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 