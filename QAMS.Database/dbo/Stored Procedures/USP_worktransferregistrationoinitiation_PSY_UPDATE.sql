  CREATE PROCEDURE [dbo].[USP_worktransferregistrationoinitiation_PSY_UPDATE] @wtriid_PSY int, 
@worktransferdescription_PSY NVarChar(150),
@worktransferfrom_PSY NVarChar(150),
@tasklist_PSY NVarChar(150),
@worktransferto_PSY NVarChar(150),
@validupto_PSY DateTime,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[worktransferregistrationoinitiation_PSY] SET 
worktransferdescription_PSY=@worktransferdescription_PSY,
worktransferfrom_PSY=@worktransferfrom_PSY,
tasklist_PSY=@tasklist_PSY,
worktransferto_PSY=@worktransferto_PSY,
validupto_PSY=@validupto_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [wtriid_PSY] = @wtriid_PSY ;  select @wtriid_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END