  CREATE PROCEDURE [dbo].[USP_CustomerNotification_PSY_UPDATE] @CNId_PSY int, 
@IsSave_PSY NVarChar,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,

@IsProposedChange_PSY NVarChar,
@Remarks_PSY NVarChar(500),
@CNDocument_PSY Xml
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[CustomerNotification_PSY] SET 
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
IsProposedChange_PSY=@IsProposedChange_PSY,
Remarks_PSY=@Remarks_PSY,
CNDocument_PSY=@CNDocument_PSY,UpdatedDate_PSY=GETDATE() WHERE  [CNId_PSY] = @CNId_PSY ; 
IF(@Status_PSY='REJECT' OR @Status_PSY='REJECTED')
 BEGIN
  DECLARE @CCID INT=0
 SET @CCID=(SELECT InitiativeId_PSY FROM CustomerNotification_PSY WHERE CNId_PSY=@CNId_PSY)
 UPDATE ChangeControlRegistration_PSY SET Status_PSY=@Status_PSY WHERE ChangeControlId_PSY=@CCID
 END
select @CNId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END