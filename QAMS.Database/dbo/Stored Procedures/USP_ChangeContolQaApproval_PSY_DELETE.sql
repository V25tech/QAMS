  CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_DELETE] @ChangeContolQaApprovalId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolQaApproval_PSY]  WHERE [ChangeContolQaApprovalId_PSY] IN (@ChangeContolQaApprovalId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 