﻿  CREATE PROCEDURE [dbo].[USP_User_PSY_By_RoleId_DELETE] @RoleId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[User_PSY]  WHERE RoleId_PSY IN (@RoleId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 