﻿  CREATE PROCEDURE [dbo].[USP_Market_PSY_DELETE] @Id_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[Market_PSY]  WHERE [Id_PSY] IN (@Id_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 