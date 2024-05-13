  CREATE PROCEDURE [dbo].[USP_User_PSY_UPDATE] @Id_PSY int,
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
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[User_PSY] SET 
RoleId_PSY=@RoleId_PSY,
UserId_PSY=@UserId_PSY,
FirstName_PSY=@FirstName_PSY,
Plants_PSY=@Plants_PSY,
LastName_PSY=@LastName_PSY,
DepartmentId_PSY=@DepartmentId_PSY,
EmployeeId_PSY=@EmployeeId_PSY,
EmailId_PSY=@EmailId_PSY,
Password_PSY=@Password_PSY,
IsActive_PSY=@IsActive_PSY,
ForgotLoginPassword_PSY=@ForgotLoginPassword_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 