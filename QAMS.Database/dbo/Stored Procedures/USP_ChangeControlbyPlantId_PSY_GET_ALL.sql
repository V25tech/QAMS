


 CREATE PROCEDURE [dbo].[USP_ChangeControlbyPlantId_PSY_GET_ALL]  
 @PageSize  INT=50, @PageNumber INT=1 ,@PlantId INT 
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT ChangeControlId_PSY,
ChangeControlUniqueCode_PSY,
--ChangeDetails_PSY,
--RequestDetails_PSY,
--ImpactDetails_PSY,
--Comments_PSY,
Registeredby_PSY,
--Reintiate_PSY,
Status_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,
plant_id,
InitiatingDepartment_PSY
 ,count(*) over() as TotalRows 
 FROM [dbo].[ChangeControlRegistration_PSY] WITH (NOLOCK)
 WHERE PLANT_ID=@PlantId
 Order by [ChangeControlId_PSY] 
 
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END