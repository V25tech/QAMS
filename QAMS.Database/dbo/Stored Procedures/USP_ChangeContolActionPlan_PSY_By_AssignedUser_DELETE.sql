  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_By_AssignedUser_DELETE] @AssignedUser int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[ChangeContolActionPlan_PSY]  WHERE AssignedUser_PSY IN (@AssignedUser) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 