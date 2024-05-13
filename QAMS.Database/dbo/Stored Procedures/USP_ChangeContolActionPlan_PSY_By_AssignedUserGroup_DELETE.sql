  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_By_AssignedUserGroup_DELETE] @AssignedUserGroup int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolActionPlan_PSY]  WHERE AssignedUserGroup_PSY IN (@AssignedUserGroup) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 