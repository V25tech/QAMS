  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_DELETE] @ChangeControlId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeControlRegistration_PSY]  WHERE [ChangeControlId_PSY] IN (@ChangeControlId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 