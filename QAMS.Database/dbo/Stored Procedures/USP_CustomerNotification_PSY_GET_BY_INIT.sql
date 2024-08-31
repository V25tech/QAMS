CREATE PROCEDURE [dbo].[USP_CustomerNotification_PSY_GET_BY_INIT]
 @Init_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Comments_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
CNId_PSY,
IsProposedChange_PSY,
Remarks_PSY,
CNDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[CustomerNotification_PSY] WITH (NOLOCK) where InitiativeId_PSY=@Init_PSY
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END
