  CREATE PROCEDURE [dbo].[USP_Role_PSY_GET] @Id_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
Name_PSY,
Description_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[Role_PSY] WITH (NOLOCK) where [Id_PSY] = @Id_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 