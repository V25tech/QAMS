  CREATE PROCEDURE [dbo].[USP_newactionplan_PSY_DELETE] @nap_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[newactionplan_PSY]  WHERE [nap_PSY] IN (@nap_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END