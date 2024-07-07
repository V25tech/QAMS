  CREATE PROCEDURE [dbo].[USP_HODReview_PSY_UPDATE] @HodId_PSY int, 
@IsSave_PSY BIT,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[HODReview_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY,
UpdatedDate_PSY=GETDATE()
 WHERE  [HodId_PSY] = @HodId_PSY ;  select @HodId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END