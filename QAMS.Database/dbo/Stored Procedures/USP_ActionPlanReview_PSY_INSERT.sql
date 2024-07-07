  CREATE PROCEDURE [dbo].[USP_ActionPlanReview_PSY_INSERT] @InitiativeId_PSY Int,
@InitiativeName_PSY NVarChar(200),
@IsSave_PSY bit,
@Comments_PSY NVarChar(500),
@Status_PSY NVarChar(100),
@CreatedBy_PSY Int,
@UpdatedBy_PSY Int,
@UpdatedDate_PSY DateTime,
@Plant_PSY Int,
@APId_PSY Int,
@Decision_PSY bit,
@Remarks_PSY NVarChar(500),
@ActionPlanReviewComments_PSY NVarChar(500),
@APDocument_PSY Xml,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ActionPlanReview_PSY] 
 (InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Comments_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
APId_PSY,
Decision_PSY,
Remarks_PSY,
ActionPlanReviewComments_PSY,
APDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@InitiativeId_PSY,
@InitiativeName_PSY,
@IsSave_PSY,
@Comments_PSY,
@Status_PSY,
@CreatedBy_PSY,
@UpdatedBy_PSY,
 GetDate() ,
@UpdatedDate_PSY,
@Plant_PSY,
@APId_PSY,
@Decision_PSY,
@Remarks_PSY,
@ActionPlanReviewComments_PSY,
@APDocument_PSY,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END