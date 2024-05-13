  CREATE PROCEDURE [dbo].[USP_FunctionalProfile_PSY_By_RoleId_DELETE] @RoleId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[FunctionalProfile_PSY]  WHERE RoleId_PSY IN (@RoleId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 