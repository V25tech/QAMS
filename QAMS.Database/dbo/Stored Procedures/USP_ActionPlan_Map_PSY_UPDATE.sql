  CREATE PROCEDURE [dbo].[USP_ActionPlan_Map_PSY_UPDATE] @UserId_PSY int, @CategoryId_PSY Int,
@IsReviewed_PSY Bit,
@IsActionPlan_PSY Bit,
@initId_PSY Bit,
@DocumentAction_PSY Bit,
@DocumentCategory_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ActionPlan_Map_PSY] SET CategoryId_PSY=@CategoryId_PSY,
IsReviewed_PSY=@IsReviewed_PSY,
IsActionPlan_PSY=@IsActionPlan_PSY,
initId_PSY=@initId_PSY,
DocumentAction_PSY=@DocumentAction_PSY,
DocumentCategory_PSY=@DocumentCategory_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [UserId_PSY] = @UserId_PSY ;  select @UserId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END