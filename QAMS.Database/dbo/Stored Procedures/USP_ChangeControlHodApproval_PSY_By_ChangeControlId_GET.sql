  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_By_ChangeControlId_GET] @ChangeControlId int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ChangeControlHodApprovalId_PSY,
ChangeControlId_PSY,
ActionPlanProposalRequired_PSY,
ProposedActionPlans_PSY,
HodReviewComments_PSY,
Documents_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[ChangeControlHodApproval_PSY] WITH (NOLOCK) where ChangeControlId_PSY = @ChangeControlId   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 