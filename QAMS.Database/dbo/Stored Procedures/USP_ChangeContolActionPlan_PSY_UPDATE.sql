  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_UPDATE] @ChangeContolActionPlanId_PSY int, 
@Type_PSY NVarChar(250),
@Description_PSY NVarChar(250),
@DepartmentId_PSY Int,
@AssignedUser_PSY Int,
@AssignedUserGroup_PSY Int,
@TargetDate_PSY DateTime,
@Remarks_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ChangeContolActionPlan_PSY] SET 
Type_PSY=@Type_PSY,
Description_PSY=@Description_PSY,
DepartmentId_PSY=@DepartmentId_PSY,
AssignedUser_PSY=@AssignedUser_PSY,
AssignedUserGroup_PSY=@AssignedUserGroup_PSY,
TargetDate_PSY=@TargetDate_PSY,
Remarks_PSY=@Remarks_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [ChangeContolActionPlanId_PSY] = @ChangeContolActionPlanId_PSY ;  select @ChangeContolActionPlanId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 