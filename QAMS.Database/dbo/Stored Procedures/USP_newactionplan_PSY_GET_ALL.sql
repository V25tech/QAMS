 CREATE PROCEDURE [dbo].[USP_newactionplan_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT 
plantype_PSY,
description_PSY,
inchargeusrgroup_PSY,
assignto_PSY,
selectusergroup_PSY,
targetdate_PSY,
reviewremarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[newactionplan_PSY] WITH (NOLOCK) 
 Order by [nap_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END