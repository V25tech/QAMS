  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_DELETE_ALL] @ChangeContolActionPlanId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolActionPlan_PSY] WHERE [ChangeContolActionPlanId_PSY] IN (select value from STRING_SPLIT(@ChangeContolActionPlanId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 