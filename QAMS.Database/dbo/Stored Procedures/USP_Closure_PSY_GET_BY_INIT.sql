CREATE PROCEDURE [dbo].[USP_Closure_PSY_GET_BY_INIT]
@Init_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT InitiativeId_PSY,
InitiativeName_PSY,
IsSave_PSY,
ImplementEffChanges_PSY,
Status_PSY,
CreatedBy_PSY,
UpdatedBy_PSY,
CreatedDate_PSY,
UpdatedDate_PSY,
Plant_PSY,
CId_PSY,
Decision_PSY,
Remarks_PSY,
ActionPlanReviewComments_PSY,
IsAllDocumentsApprovedEff_PSY,
TrainingCompleted_PSY,
IsApprovedChangesEff_PSY,
IsIdentifiedActions_PSY,
CDocument_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[Closure_PSY] WITH (NOLOCK) where InitiativeId_PSY=@Init_PSY
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END