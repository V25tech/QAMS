  CREATE PROCEDURE [dbo].[USP_Customer_PSY_UPDATE] @Id_PSY int,
@Name_PSY NVarChar(150),
@Code_PSY NVarChar(150),
@ContactName_PSY NVarChar(150),
@Address_PSY NVarChar(250),
@City_PSY NVarChar(150),
@State_PSY NVarChar(150),
@Country_PSY NVarChar(150),
@Zipcode_PSY Int,
@Fax_PSY Int,
@Email_PSY NVarChar(150),
@Remark_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[Customer_PSY] SET 
Name_PSY=@Name_PSY,
Code_PSY=@Code_PSY,
ContactName_PSY=@ContactName_PSY,
Address_PSY=@Address_PSY,
City_PSY=@City_PSY,
State_PSY=@State_PSY,
Country_PSY=@Country_PSY,
Zipcode_PSY=@Zipcode_PSY,
Fax_PSY=@Fax_PSY,
Email_PSY=@Email_PSY,
Remark_PSY=@Remark_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [Id_PSY] = @Id_PSY ;  select @Id_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 