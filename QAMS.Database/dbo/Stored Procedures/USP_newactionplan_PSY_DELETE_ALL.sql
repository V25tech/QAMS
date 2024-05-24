  CREATE PROCEDURE [dbo].[USP_newactionplan_PSY_DELETE_ALL] @nap_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[newactionplan_PSY] WHERE [nap_PSY] IN (select value from STRING_SPLIT(@nap_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END