  CREATE PROCEDURE [dbo].[USP_User_PSY_INSERT]
@RoleId_PSY Int,
@UserId_PSY Int,
@FirstName_PSY NVarChar(150),
@Plants_PSY NVarChar(150),
@LastName_PSY NVarChar(150),
@DepartmentId_PSY Int,
@EmployeeId_PSY NVarChar(150),
@EmailId_PSY Int,
@Password_PSY NVarChar(150),
@IsActive_PSY Bit,
@ForgotLoginPassword_PSY Bit,
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[User_PSY] 
 (
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
ModifiedDate_PSY)
 VALUES 
(
@RoleId_PSY,
@UserId_PSY,
@FirstName_PSY,
@Plants_PSY,
@LastName_PSY,
@DepartmentId_PSY,
@EmployeeId_PSY,
@EmailId_PSY,
@Password_PSY,
@IsActive_PSY,
@ForgotLoginPassword_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 