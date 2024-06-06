
  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_UPDATE] @ChangeControlId_PSY int,
@ChangeControlUniqueCode_PSY NVarChar(150),
@RequestDetails_PSY NVarChar(max),
@ImpactDetails_PSY Nvarchar(Max),
@ChangeDetails_PSY Nvarchar(Max),
@InitiatingDepartment_PSY NVarChar(250), 
@Comments_PSY NVarChar(250),
@Registeredby_PSY Int,
@Reintiate_PSY Bit,
@Status_PSY Int,
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ChangeControlRegistration_PSY] SET 
ChangeControlUniqueCode_PSY=@ChangeControlUniqueCode_PSY,
RequestDetails_PSY=@RequestDetails_PSY,
ImpactDetails_PSY=@ImpactDetails_PSY,
ChangeDetails_PSY=@ChangeDetails_PSY,
InitiatingDepartment_PSY=@InitiatingDepartment_PSY,
Comments_PSY=@Comments_PSY,
Registeredby_PSY=@Registeredby_PSY,
Status_PSY=@Status_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [ChangeControlId_PSY] = @ChangeControlId_PSY ;  select @ChangeControlId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 