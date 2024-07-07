  CREATE PROCEDURE [dbo].[USP_CustomerNotification_PSY_DELETE_ALL] @CNId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[CustomerNotification_PSY] WHERE [CNId_PSY] IN (select value from STRING_SPLIT(@CNId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END