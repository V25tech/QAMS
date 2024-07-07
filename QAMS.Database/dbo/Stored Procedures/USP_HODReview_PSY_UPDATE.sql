  CREATE PROCEDURE [dbo].[USP_HODReview_PSY_UPDATE] @HodId_PSY int, @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY NVarChar,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@HODDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[HODReview_PSY] SET InitiativeId_PSY=@InitiativeId_PSY,
InitiativeName_PSY=@InitiativeName_PSY,
IsSave_PSY=@IsSave_PSY,
Comments_PSY=@Comments_PSY,
Status_PSY=@Status_PSY,
UpdatedBy_PSY=@UpdatedBy_PSY,
UpdatedDate_PSY=@UpdatedDate_PSY,
Plant_PSY=@Plant_PSY,
HODDocument_PSY=@HODDocument_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [HodId_PSY] = @HodId_PSY ;  select @HodId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END