  CREATE PROCEDURE [dbo].[USP_ChangeControlHodApproval_PSY_INSERT]
@ChangeControlId_PSY Int,
@ActionPlanProposalRequired_PSY Bit,
@ProposedActionPlans_PSY NVarChar(150),
@HodReviewComments_PSY NVarChar(2000),
@Documents_PSY NVarChar(max),
@Remarks_PSY NVarChar(250),
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ChangeControlHodApproval_PSY] 
 (
ChangeControlId_PSY,
ActionPlanProposalRequired_PSY,
ProposedActionPlans_PSY,
HodReviewComments_PSY,
Documents_PSY,
Remarks_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(
@ChangeControlId_PSY,
@ActionPlanProposalRequired_PSY,
@ProposedActionPlans_PSY,
@HodReviewComments_PSY,
@Documents_PSY,
@Remarks_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 

