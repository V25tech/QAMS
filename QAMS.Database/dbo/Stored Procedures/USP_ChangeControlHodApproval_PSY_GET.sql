  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_GET] @ChangeControlHodApprovalId_PSY int 
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
  FROM [dbo].[ChangeControlHodApproval_PSY] WITH (NOLOCK) where [ChangeControlHodApprovalId_PSY] = @ChangeControlHodApprovalId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 


