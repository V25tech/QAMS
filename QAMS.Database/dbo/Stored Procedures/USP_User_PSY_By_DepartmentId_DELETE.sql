  CREATE PROCEDURE [dbo].[USP_User_PSY_By_DepartmentId_DELETE] @DepartmentId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[User_PSY]  WHERE DepartmentId_PSY IN (@DepartmentId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 