  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_GET] @ChangeContolActionPlanId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ChangeContolActionPlanId_PSY,
Type_PSY,
Description_PSY,
DepartmentId_PSY,
AssignedUser_PSY,
AssignedUserGroup_PSY,
ApprovedUser_PSY,
ApprovedUserGroup_PSY,
TargetDate_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,
WorkflowId,WorkflowName,InitiativeId,InitiativeName,IsReviewed_PSY,IsApproved_PSY
  FROM [dbo].[ChangeContolActionPlan_PSY] WITH (NOLOCK) where [ChangeContolActionPlanId_PSY] = @ChangeContolActionPlanId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 