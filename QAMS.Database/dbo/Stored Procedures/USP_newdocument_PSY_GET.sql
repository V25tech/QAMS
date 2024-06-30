  CREATE PROCEDURE [dbo].[USP_newdocument_PSY_GET] @nd_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT nd_PSY,
title_PSY,
description_PSY,
uploadfile_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[newdocument_PSY] WITH (NOLOCK) where [nd_PSY] = @nd_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END