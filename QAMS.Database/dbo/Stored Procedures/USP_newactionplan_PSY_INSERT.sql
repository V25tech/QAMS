  CREATE PROCEDURE [dbo].[USP_newactionplan_PSY_INSERT] 
@plantype_PSY NVarChar(150),
@description_PSY NVarChar(150),
@inchargeusrgroup_PSY NVarChar(150),
@assignto_PSY Bit,
@selectusergroup_PSY NVarChar(150),
@targetdate_PSY DateTime,
@reviewremarks_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(100),
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[newactionplan_PSY] 
 (plantype_PSY,
description_PSY,
inchargeusrgroup_PSY,
assignto_PSY,
selectusergroup_PSY,
targetdate_PSY,
reviewremarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@plantype_PSY,
@description_PSY,
@inchargeusrgroup_PSY,
@assignto_PSY,
@selectusergroup_PSY,
@targetdate_PSY,
@reviewremarks_PSY,
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