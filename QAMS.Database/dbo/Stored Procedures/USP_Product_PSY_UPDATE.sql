  CREATE PROCEDURE [dbo].[USP_Product_PSY_UPDATE] @Id_PSY int, 
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@ChemicalName_PSY NVarChar(150),
@IsActive_PSY Bit,
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Product_PSY] SET 
Name_PSY=@Name_PSY,
Code_PSY=@Code_PSY,
ChemicalName_PSY=@ChemicalName_PSY,
IsActive_PSY=@IsActive_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 