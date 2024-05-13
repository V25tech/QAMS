  CREATE PROCEDURE [dbo].[USP_ChangeContolActionPlan_PSY_INSERT]
@Type_PSY NVarChar(250),
@Description_PSY NVarChar(250),
@DepartmentId_PSY Int,
@AssignedUser_PSY Int,
@AssignedUserGroup_PSY Int,
@TargetDate_PSY DateTime,
@Remarks_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
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
TargetDate_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(
@Type_PSY,
@Description_PSY,
@DepartmentId_PSY,
@AssignedUser_PSY,
@AssignedUserGroup_PSY,
@TargetDate_PSY,
@Remarks_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 