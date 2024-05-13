﻿  CREATE PROCEDURE [dbo].[USP_Product_PSY_GET] @Id_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
Name_PSY,
Code_PSY,
ChemicalName_PSY,
IsActive_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[Product_PSY] WITH (NOLOCK) where [Id_PSY] = @Id_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 