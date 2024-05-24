  CREATE PROCEDURE [dbo].[USP_newactionplan_PSY_GET] @nap_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT nap_PSY,
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
  FROM [dbo].[newactionplan_PSY] WITH (NOLOCK) where [nap_PSY] = @nap_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END