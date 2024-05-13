  CREATE PROCEDURE [dbo].[USP_Customer_PSY_GET] @Id_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT Id_PSY,
Name_PSY,
Code_PSY,
ContactName_PSY,
Address_PSY,
City_PSY,
State_PSY,
Country_PSY,
Zipcode_PSY,
Fax_PSY,
Email_PSY,
Remark_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[Customer_PSY] WITH (NOLOCK) where [Id_PSY] = @Id_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
