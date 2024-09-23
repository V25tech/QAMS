  CREATE PROCEDURE [dbo].[USP_HODReview_PSY_UPDATE] @HodId_PSY int, 
@IsSave_PSY BIT,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[HODReview_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=GETDATE()
 WHERE  [HodId_PSY] = @HodId_PSY ;  
 IF(@Status_PSY='REJECT' OR @Status_PSY='REJECTED')
 BEGIN
  DECLARE @CCID INT=0
 SET @CCID=(SELECT InitiativeId_PSY FROM HODReview_PSY WHERE HodId_PSY=@HodId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
 select @HodId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END