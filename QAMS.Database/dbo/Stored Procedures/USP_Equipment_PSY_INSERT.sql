  CREATE PROCEDURE [dbo].[USP_Equipment_PSY_INSERT] 
@Name_PSY NVarChar(150),
@EquipmentId_PSY NVarChar(150),
@Make_PSY NVarChar(150),
@Model_PSY NVarChar(150),
@SerialNumber_PSY NVarChar(150),
@InstalledLocation_PSY NVarChar(150),
@DepartmentId_PSY Int,
@InstalledOn_PSY DateTime,
@WarrantyExpiresOn_PSY DateTime,
@SuppliedBy_PSY NVarChar(150),
@Software_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[Equipment_PSY] 
 (
Name_PSY,
EquipmentId_PSY,
Make_PSY,
Model_PSY,
SerialNumber_PSY,
InstalledLocation_PSY,
DepartmentId_PSY,
InstalledOn_PSY,
WarrantyExpiresOn_PSY,
SuppliedBy_PSY,
Software_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(
@Name_PSY,
@EquipmentId_PSY,
@Make_PSY,
@Model_PSY,
@SerialNumber_PSY,
@InstalledLocation_PSY,
@DepartmentId_PSY,
@InstalledOn_PSY,
@WarrantyExpiresOn_PSY,
@SuppliedBy_PSY,
@Software_PSY,
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