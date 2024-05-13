  CREATE PROCEDURE [dbo].[USP_SecuritySetting_PSY_UPDATE] @Id_PSY int,
@MinimumUserIdLength_PSY Int,
@MinimumPasswordLength_PSY Int,
@MaximumTenureOfPassword_PSY Int,
@PasswordExpiryAlert_PSY Int,
@RetainHistoryOfLastPassword_PSY Int,
@ComplexityofPassword_PSY Int,
@AccountLockout_PSY Int,
@SessionTimeout_PSY Int,
@Remark_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[SecuritySetting_PSY] SET 
MinimumUserIdLength_PSY=@MinimumUserIdLength_PSY,
MinimumPasswordLength_PSY=@MinimumPasswordLength_PSY,
MaximumTenureOfPassword_PSY=@MaximumTenureOfPassword_PSY,
PasswordExpiryAlert_PSY=@PasswordExpiryAlert_PSY,
RetainHistoryOfLastPassword_PSY=@RetainHistoryOfLastPassword_PSY,
ComplexityofPassword_PSY=@ComplexityofPassword_PSY,
AccountLockout_PSY=@AccountLockout_PSY,
SessionTimeout_PSY=@SessionTimeout_PSY,
Remark_PSY=@Remark_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 