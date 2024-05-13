  CREATE PROCEDURE [dbo].[USP_UserGroup_PSY_UPDATE] @Id_PSY int,
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@Roles_PSY NVarChar(150),
@Revision_PSY Int,
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[UserGroup_PSY] SET 
Name_PSY=@Name_PSY,
Code_PSY=@Code_PSY,
Roles_PSY=@Roles_PSY,
Revision_PSY=@Revision_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 