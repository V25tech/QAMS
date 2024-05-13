  CREATE PROCEDURE [dbo].[USP_SecuritySetting_PSY_GET] @Id_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
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
ModifiedDate_PSY 
  FROM [dbo].[SecuritySetting_PSY] WITH (NOLOCK) where [Id_PSY] = @Id_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 