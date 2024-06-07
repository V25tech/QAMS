CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT ChangeControlId_PSY,
ChangeControlUniqueCode_PSY,
Reference_PSY,
QualityEvent_PSY,
InitiatingDepartment_PSY,
TypeOfChange_PSY,
DateOfInitiation_PSY,
TargetDateOfClosure_PSY,
Market_PSY,
Customer_PSY,
ChangeRelatedTo_PSY,
BatchOrLotNumber_PSY,
Material_PSY,
Equipment_PSY,
ImpactedProductMaterials_PSY,
Registeredby_PSY,
Reintiate_PSY,
Status_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[ChangeControlRegistration_PSY] WITH (NOLOCK) 
 Order by [ChangeControlId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 


