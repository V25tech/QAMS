  CREATE PROCEDURE [dbo].[USP_ActionPlanReview_PSY_DELETE_ALL] @APId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ActionPlanReview_PSY] WHERE [APId_PSY] IN (select value from STRING_SPLIT(@APId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END