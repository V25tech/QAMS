CREATE PROCEDURE [dbo].[USP_newdocument_PSY_GET_BY_INITIATIVE_TYPE]
	@PARENT_ID INT=0,
	@INIT_TYPE VARCHAR(250) AS
BEGIN

BEGIN TRY 
  SELECT newId_PSY,
title_PSY,
description_PSY,
uploadfile_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,InitiativeType,ParentControlId_PSY 
  FROM [dbo].[newdocument_PSY] WITH (NOLOCK) 
  where ParentControlId_PSY=@PARENT_ID AND InitiativeType=@INIT_TYPE
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 

END
