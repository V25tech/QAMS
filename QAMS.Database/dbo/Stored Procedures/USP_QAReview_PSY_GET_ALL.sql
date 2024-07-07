 CREATE PROCEDURE [dbo].[USP_QAReview_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
 ,count(*) over() as TotalRows 
 FROM [dbo].[QAReview_PSY] WITH (NOLOCK) 
 Order by [QAId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END