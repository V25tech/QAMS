﻿  CREATE PROCEDURE [dbo].[USP_CustomerNotification_PSY_UPDATE] @CNId_PSY int, 
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
CNDocument_PSY=@CNDocument_PSY,UpdatedDate_PSY=GETDATE() WHERE  [CNId_PSY] = @CNId_PSY ;  select @CNId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END