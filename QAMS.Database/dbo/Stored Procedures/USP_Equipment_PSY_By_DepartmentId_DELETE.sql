  CREATE PROCEDURE [dbo].[USP_Equipment_PSY_By_DepartmentId_DELETE] @DepartmentId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[Equipment_PSY]  WHERE DepartmentId_PSY IN (@DepartmentId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 