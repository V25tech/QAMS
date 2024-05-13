﻿  CREATE PROCEDURE [dbo].[USP_User_PSY_By_DepartmentId_GET] @DepartmentId int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
RoleId_PSY,
UserId_PSY,
FirstName_PSY,
Plants_PSY,
LastName_PSY,
DepartmentId_PSY,
EmployeeId_PSY,
EmailId_PSY,
Password_PSY,
IsActive_PSY,
ForgotLoginPassword_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[User_PSY] WITH (NOLOCK) where DepartmentId_PSY = @DepartmentId   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 