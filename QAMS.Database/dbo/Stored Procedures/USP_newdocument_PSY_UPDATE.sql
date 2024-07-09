  CREATE PROCEDURE [dbo].[USP_newdocument_PSY_UPDATE] @nd_PSY int, @title_PSY NVarChar(150),
@description_PSY NVarChar(150),
@uploadfile_PSY NVarChar,
@ModifiedBy_PSY NVarChar(100) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[newdocument_PSY] SET title_PSY=@title_PSY,
description_PSY=@description_PSY,
uploadfile_PSY=@uploadfile_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  newId_PSY = @nd_PSY ;  select @nd_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END