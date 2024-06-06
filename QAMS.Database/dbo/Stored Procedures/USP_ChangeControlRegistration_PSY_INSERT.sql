


CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_INSERT]
@ChangeControlUniqueCode_PSY NVarChar(150),
@RequestDetails_PSY NVarChar(MAX),
@ImpactDetails_PSY NVarchar(MAX),
@ChangeDetails_PSY NVarchar(MAX),
@Registeredby_PSY NVarchar(250),
@Status_PSY NVarchar(250),
@Comments_PSY NVarChar(250),
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150),
@Plant_id NVarChar(250),
@InitiatingDepartment_PSY NVarChar(150)



 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ChangeControlRegistration_PSY] 
 (
ChangeControlUniqueCode_PSY,
RequestDetails_PSY,
ImpactDetails_PSY,
ChangeDetails_PSY,
Comments_PSY,
Registeredby_PSY,
Status_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,
Plant_id,
InitiatingDepartment_PSY)
 VALUES 
(
@ChangeControlUniqueCode_PSY,
@RequestDetails_PSY,
@ImpactDetails_PSY,
@ChangeDetails_PSY,
@Comments_PSY,
@Registeredby_PSY,
@Status_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
GetDate(),
@Plant_id,
@InitiatingDepartment_PSY);
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 
