﻿  CREATE PROCEDURE [dbo].[USP_QAReview_PSY_DELETE] @QAId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[QAReview_PSY]  WHERE [QAId_PSY] IN (@QAId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END