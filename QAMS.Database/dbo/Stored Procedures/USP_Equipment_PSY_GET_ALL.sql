 CREATE PROCEDURE [dbo].[USP_Equipment_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
 ,count(*) over() as TotalRows 
 FROM [dbo].[Equipment_PSY] WITH (NOLOCK) 
 Order by [Id_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 