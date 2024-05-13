  CREATE PROCEDURE [dbo].[USP_SecuritySetting_PSY_INSERT] 
@MinimumUserIdLength_PSY Int,
@MinimumPasswordLength_PSY Int,
@MaximumTenureOfPassword_PSY Int,
@PasswordExpiryAlert_PSY Int,
@RetainHistoryOfLastPassword_PSY Int,
@ComplexityofPassword_PSY Int,
@AccountLockout_PSY Int,
@SessionTimeout_PSY Int,
@Remark_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[SecuritySetting_PSY] 
 (
MinimumUserIdLength_PSY,
MinimumPasswordLength_PSY,
MaximumTenureOfPassword_PSY,
PasswordExpiryAlert_PSY,
RetainHistoryOfLastPassword_PSY,
ComplexityofPassword_PSY,
AccountLockout_PSY,
SessionTimeout_PSY,
Remark_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(
@MinimumUserIdLength_PSY,
@MinimumPasswordLength_PSY,
@MaximumTenureOfPassword_PSY,
@PasswordExpiryAlert_PSY,
@RetainHistoryOfLastPassword_PSY,
@ComplexityofPassword_PSY,
@AccountLockout_PSY,
@SessionTimeout_PSY,
@Remark_PSY,
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