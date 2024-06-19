  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_INSERT]
@Type_PSY NVarChar(250),
@Description_PSY NVarChar(250),
@DepartmentId_PSY Int,
@AssignedUser_PSY Int,
@AssignedUserGroup_PSY Int,
@ApprovedUser_PSY int,
@ApprovedUserGroup int,
@TargetDate_PSY DateTime,
@Remarks_PSY NVarChar(150),
@CreatedBy_PSY int,
@ModifiedBy_PSY int,
@WorkflowId int,@WorkflowName varchar(200),@InitiativeId int,@InitiativeName varchar(200),
@IsReviewed bit,@IsApproved bit
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ChangeContolActionPlan_PSY] 
 (
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
InitiativeId,InitiativeName,WorkflowId,WorkflowName,IsReviewed_PSY,IsApproved_PSY,
ModifiedDate_PSY)
 VALUES 
(
@Type_PSY,
@Description_PSY,
@DepartmentId_PSY,
@AssignedUser_PSY,
@AssignedUserGroup_PSY,
@ApprovedUser_PSY,
@ApprovedUserGroup,
@TargetDate_PSY,
@Remarks_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,@InitiativeId,@InitiativeName,@WorkflowId,@WorkflowName,@IsReviewed,@IsApproved,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 