  CREATE PROCEDURE [dbo].[USP_newdocument_PSY_INSERT] @title_PSY NVarChar(150),
@description_PSY NVarChar(150),
@uploadfile_PSY NVarChar(150),
@CreatedBy_PSY NVarChar(100),
@ModifiedBy_PSY NVarChar(100),
@ParentId_PSY int,
@InitiativeType varchar(250)
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[newdocument_PSY] 
 (title_PSY,
description_PSY,
uploadfile_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,ParentControlId_PSY,InitiativeType)
 VALUES 
(@title_PSY,
@description_PSY,
@uploadfile_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate(),@ParentId_PSY,@InitiativeType );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END