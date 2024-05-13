  CREATE PROCEDURE [dbo].[USP_Market_PSY_UPDATE] @Id_PSY int, 
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@Remark_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Market_PSY] SET 
Name_PSY=@Name_PSY,
Code_PSY=@Code_PSY,
Remark_PSY=@Remark_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 