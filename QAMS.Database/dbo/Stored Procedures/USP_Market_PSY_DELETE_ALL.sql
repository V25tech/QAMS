  CREATE PROCEDURE [dbo].[USP_Market_PSY_DELETE_ALL] @Id_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[Market_PSY] WHERE [Id_PSY] IN (select value from STRING_SPLIT(@Id_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 