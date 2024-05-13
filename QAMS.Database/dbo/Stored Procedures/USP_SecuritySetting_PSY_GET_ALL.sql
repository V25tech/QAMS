 CREATE PROCEDURE [dbo].[USP_SecuritySetting_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
 ,count(*) over() as TotalRows 
 FROM [dbo].[SecuritySetting_PSY] WITH (NOLOCK) 
 Order by [Id_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 