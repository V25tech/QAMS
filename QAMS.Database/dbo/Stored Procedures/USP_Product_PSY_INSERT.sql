  CREATE PROCEDURE [dbo].[USP_Product_PSY_INSERT] @Id_PSY Int,
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@ChemicalName_PSY NVarChar(150),
@IsActive_PSY Bit,
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[Product_PSY] 
 (Id_PSY,
Name_PSY,
Code_PSY,
ChemicalName_PSY,
IsActive_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@Id_PSY,
@Name_PSY,
@Code_PSY,
@ChemicalName_PSY,
@IsActive_PSY,
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