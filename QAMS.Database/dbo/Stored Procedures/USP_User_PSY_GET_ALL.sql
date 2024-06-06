
 CREATE PROCEDURE [dbo].[USP_User_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT U.Id_PSY,
RoleId_PSY,
UserId_PSY,
FirstName_PSY,
Plants_PSY,
LastName_PSY,
DepartmentId_PSY,
EmployeeId_PSY ,
EmailId_PSY,
Password_PSY,
IsActive_PSY,
ForgotLoginPassword_PSY,
U.CreatedBy_PSY,
U.CreatedDate_PSY,
U.ModifiedBy_PSY,
U.ModifiedDate_PSY  ,
R.Name_PSY as RoleName,
D.Name_PSY as Department
 ,count(*) over() as TotalRows 
 FROM [dbo].[User_PSY] U WITH (NOLOCK) INNER JOIN Role_PSY R
 ON U.RoleId_PSY=R.Id_PSY
 inner join Department_PSY D on U.DepartmentId_PSY=d.Id_PSY
 Order by U.[Id_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 