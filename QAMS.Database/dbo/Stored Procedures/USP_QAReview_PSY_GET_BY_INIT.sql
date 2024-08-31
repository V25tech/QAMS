CREATE PROCEDURE [dbo].[USP_QAReview_PSY_GET_BY_INIT]
 @Init_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ClassificationOfChange_PSY,
ImpactOnProcFormats_PSY,
ProcedureFormat_PSY,
IsRegularCustomer_PSY,
ImpactCommitment_PSY,
ReviewComments_PSY,
InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
QAId_PSY,
QaDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[QAReview_PSY] WITH (NOLOCK) where InitiativeId_PSY=@Init_PSY 
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END
