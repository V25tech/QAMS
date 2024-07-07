﻿  CREATE PROCEDURE [dbo].[USP_HODReview_PSY_DELETE_ALL] @HodId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[HODReview_PSY] WHERE [HodId_PSY] IN (select value from STRING_SPLIT(@HodId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END