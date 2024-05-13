  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_DELETE_ALL] @ChangeControlId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeControlRegistration_PSY] WHERE [ChangeControlId_PSY] IN (select value from STRING_SPLIT(@ChangeControlId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 