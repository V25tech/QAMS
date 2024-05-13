  CREATE PROCEDURE [dbo].[USP_ChangeContolQaApproval_PSY_DELETE_ALL] @ChangeContolQaApprovalId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolQaApproval_PSY] WHERE [ChangeContolQaApprovalId_PSY] IN (select value from STRING_SPLIT(@ChangeContolQaApprovalId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 