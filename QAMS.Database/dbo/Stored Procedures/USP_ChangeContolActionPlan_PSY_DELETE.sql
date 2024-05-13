  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_DELETE] @ChangeContolActionPlanId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolActionPlan_PSY]  WHERE [ChangeContolActionPlanId_PSY] IN (@ChangeContolActionPlanId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 