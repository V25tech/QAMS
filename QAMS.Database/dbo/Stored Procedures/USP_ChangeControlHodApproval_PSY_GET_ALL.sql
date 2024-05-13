 CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
 ,count(*) over() as TotalRows 
 FROM [dbo].[ChangeControlHodApproval_PSY] WITH (NOLOCK) 
 Order by [ChangeControlHodApprovalId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 


