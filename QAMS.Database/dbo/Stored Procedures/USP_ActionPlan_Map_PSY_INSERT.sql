  CREATE PROCEDURE [dbo].[USP_ActionPlan_Map_PSY_INSERT] @CategoryId_PSY Int,
@IsReviewed_PSY Bit,
@IsActionPlan_PSY Bit,
@initId_PSY Bit,
@DocumentAction_PSY Bit,
@DocumentCategory_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(100),
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[ActionPlan_Map_PSY] 
 (CategoryId_PSY,
IsReviewed_PSY,
IsActionPlan_PSY,
initId_PSY,
DocumentAction_PSY,
DocumentCategory_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@CategoryId_PSY,
@IsReviewed_PSY,
@IsActionPlan_PSY,
@initId_PSY,
@DocumentAction_PSY,
@DocumentCategory_PSY,
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