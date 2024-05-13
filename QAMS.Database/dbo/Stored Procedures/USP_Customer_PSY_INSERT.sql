  CREATE PROCEDURE [dbo].[USP_Customer_PSY_INSERT] 
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
@CreatedBy_PSY NVarChar(150),
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[Customer_PSY] 
 (
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
ModifiedDate_PSY)
 VALUES 
(
@Name_PSY,
@Code_PSY,
@ContactName_PSY,
@Address_PSY,
@City_PSY,
@State_PSY,
@Country_PSY,
@Zipcode_PSY,
@Fax_PSY,
@Email_PSY,
@Remark_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate() );
 SELECT @ID = @@IDENTITY; 
 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 