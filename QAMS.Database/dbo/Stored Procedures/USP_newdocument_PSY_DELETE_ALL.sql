  CREATE PROCEDURE [dbo].[USP_newdocument_PSY_DELETE_ALL] @nd_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[newdocument_PSY] WHERE [nd_PSY] IN (select value from STRING_SPLIT(@nd_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END