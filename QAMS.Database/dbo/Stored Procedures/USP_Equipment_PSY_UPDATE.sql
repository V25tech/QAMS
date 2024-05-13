  CREATE PROCEDURE [dbo].[USP_Equipment_PSY_UPDATE] @Id_PSY int,
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
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Equipment_PSY] SET 
Name_PSY=@Name_PSY,
EquipmentId_PSY=@EquipmentId_PSY,
Make_PSY=@Make_PSY,
Model_PSY=@Model_PSY,
SerialNumber_PSY=@SerialNumber_PSY,
InstalledLocation_PSY=@InstalledLocation_PSY,
DepartmentId_PSY=@DepartmentId_PSY,
InstalledOn_PSY=@InstalledOn_PSY,
WarrantyExpiresOn_PSY=@WarrantyExpiresOn_PSY,
SuppliedBy_PSY=@SuppliedBy_PSY,
Software_PSY=@Software_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 