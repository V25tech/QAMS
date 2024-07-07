﻿  CREATE PROCEDURE [dbo].[USP_QAReview_PSY_DELETE_ALL] @QAId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[QAReview_PSY] WHERE [QAId_PSY] IN (select value from STRING_SPLIT(@QAId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END