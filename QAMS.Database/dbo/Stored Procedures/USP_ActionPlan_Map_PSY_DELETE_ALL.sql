  CREATE PROCEDURE [dbo].[USP_ActionPlan_Map_PSY_DELETE_ALL] @UserId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ActionPlan_Map_PSY] WHERE [UserId_PSY] IN (select value from STRING_SPLIT(@UserId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END