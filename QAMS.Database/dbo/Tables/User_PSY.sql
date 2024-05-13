CREATE TABLE [dbo].[User_PSY] (
    [Id_PSY]                  INT            IDENTITY (1, 1) NOT NULL,
    [RoleId_PSY]              INT            NULL,
    [UserId_PSY]              INT            NULL,
    [FirstName_PSY]           NVARCHAR (150) NOT NULL,
    [Plants_PSY]              NVARCHAR (150) NULL,
    [LastName_PSY]            NVARCHAR (150) NOT NULL,
    [DepartmentId_PSY]        INT            NULL,
    [EmployeeId_PSY]          NVARCHAR (150) NOT NULL,
    [EmailId_PSY]             INT            NULL,
    [Password_PSY]            NVARCHAR (150) NOT NULL,
    [IsActive_PSY]            BIT            NULL,
    [ForgotLoginPassword_PSY] BIT            NULL,
    [CreatedBy_PSY]           NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]         DATETIME       NULL,
    [ModifiedBy_PSY]          NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY]        DATETIME       NULL,
    CONSTRAINT [PK_User_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC),
    CONSTRAINT [FK_User_PSY_Id_PSY_Department_PSY_DepartmentId_PSY] FOREIGN KEY ([DepartmentId_PSY]) REFERENCES [dbo].[Department_PSY] ([Id_PSY]),
    CONSTRAINT [FK_User_PSY_Id_PSY_Role_PSY_RoleId_PSY] FOREIGN KEY ([RoleId_PSY]) REFERENCES [dbo].[Role_PSY] ([Id_PSY])
);

