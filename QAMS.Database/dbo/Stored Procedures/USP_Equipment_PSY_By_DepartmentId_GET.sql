  CREATE PROCEDURE [dbo].[USP_Equipment_PSY_By_DepartmentId_GET] @DepartmentId int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
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
ModifiedDate_PSY 
  FROM [dbo].[Equipment_PSY] WITH (NOLOCK) where DepartmentId_PSY = @DepartmentId   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 