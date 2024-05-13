  CREATE PROCEDURE [dbo].[USP_UserGroup_PSY_INSERT] 
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@Roles_PSY NVarChar(150),
@Revision_PSY Int,
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[UserGroup_PSY] 
 (
Name_PSY,
Code_PSY,
Roles_PSY,
Revision_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(
@Name_PSY,
@Code_PSY,
@Roles_PSY,
@Revision_PSY,
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