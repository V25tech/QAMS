  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_DELETE] @ChangeControlHodApprovalId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeControlHodApproval_PSY]  WHERE [ChangeControlHodApprovalId_PSY] IN (@ChangeControlHodApprovalId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 