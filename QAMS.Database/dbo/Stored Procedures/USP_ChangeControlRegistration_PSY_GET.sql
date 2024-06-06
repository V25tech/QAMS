

  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_GET] @ChangeControlId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ChangeControlId_PSY,
ChangeControlUniqueCode_PSY,
ChangeDetails_PSY,
RequestDetails_PSY,
ImpactDetails_PSY,
Comments_PSY,
Registeredby_PSY,
Status_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[ChangeControlRegistration_PSY] WITH (NOLOCK) 
  where [ChangeControlId_PSY] = @ChangeControlId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 


