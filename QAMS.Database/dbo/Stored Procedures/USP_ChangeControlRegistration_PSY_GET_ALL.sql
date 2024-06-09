CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT ChangeControlId_PSY,
ChangeControlUniqueCode_PSY,
InitiatingDepartment_PSY,
Registeredby_PSY,
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


