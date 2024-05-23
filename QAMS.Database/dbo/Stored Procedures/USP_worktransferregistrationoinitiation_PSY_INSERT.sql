  CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_INSERT] @wtriid_PSY Int,
@worktransferdescription_PSY NVarChar(150),
@worktransferfrom_PSY NVarChar(150),
@tasklist_PSY NVarChar(150),
@worktransferto_PSY NVarChar(150),
@validupto_PSY DateTime,
@CreatedBy_PSY NVarChar(100),
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[worktransferregistrationoinitiation_PSY] 
 (wtriid_PSY,
worktransferdescription_PSY,
worktransferfrom_PSY,
tasklist_PSY,
worktransferto_PSY,
validupto_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY)
 VALUES 
(@wtriid_PSY,
@worktransferdescription_PSY,
@worktransferfrom_PSY,
@tasklist_PSY,
@worktransferto_PSY,
@validupto_PSY,
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