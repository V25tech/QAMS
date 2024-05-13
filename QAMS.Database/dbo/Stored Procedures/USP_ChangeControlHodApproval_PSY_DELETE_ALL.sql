﻿  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_DELETE_ALL] @ChangeControlHodApprovalId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeControlHodApproval_PSY] WHERE [ChangeControlHodApprovalId_PSY] IN (select value from STRING_SPLIT(@ChangeControlHodApprovalId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 