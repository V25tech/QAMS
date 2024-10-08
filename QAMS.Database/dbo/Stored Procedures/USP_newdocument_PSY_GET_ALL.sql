﻿ CREATE PROCEDURE [dbo].[USP_newdocument_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT newId_PSY,
title_PSY,
description_PSY,
uploadfile_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,ParentControlId_PSY,InitiativeType  
 ,count(*) over() as TotalRows 
 FROM [dbo].[newdocument_PSY] WITH (NOLOCK) 
 Order by newId_PSY  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END