  CREATE PROCEDURE [dbo].[USP_Plant_PSY_UPDATE] @Id_PSY int, 
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@Revision_PSY Int,
@Address_PSY NVarChar(300),
@Comment_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Plant_PSY] SET 
Name_PSY=@Name_PSY,
Code_PSY=@Code_PSY,
Revision_PSY=@Revision_PSY,
Address_PSY=@Address_PSY,
Comment_PSY=@Comment_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 