  CREATE PROCEDURE [dbo].[USP_Role_PSY_UPDATE] @Id_PSY int,
@Name_PSY NVarChar(150),
@Description_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Role_PSY] SET 
Name_PSY=@Name_PSY,
Description_PSY=@Description_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 