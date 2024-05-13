  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_By_AssignedUser_GET] @AssignedUser int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ChangeContolActionPlanId_PSY,
Type_PSY,
Description_PSY,
DepartmentId_PSY,
AssignedUser_PSY,
AssignedUserGroup_PSY,
TargetDate_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[ChangeContolActionPlan_PSY] WITH (NOLOCK) where AssignedUser_PSY = @AssignedUser   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 