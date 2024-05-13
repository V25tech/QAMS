CREATE TABLE [dbo].[Customer_PSY] (
    [Id_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]         NVARCHAR (150) NOT NULL,
    [Code_PSY]         NVARCHAR (150) NOT NULL,
    [ContactName_PSY]  NVARCHAR (150) NULL,
    [Address_PSY]      NVARCHAR (250) NULL,
    [City_PSY]         NVARCHAR (150) NULL,
    [State_PSY]        NVARCHAR (150) NULL,
    [Country_PSY]      NVARCHAR (150) NULL,
    [Zipcode_PSY]      INT            NULL,
    [Fax_PSY]          INT            NULL,
    [Email_PSY]        NVARCHAR (150) NULL,
    [Remark_PSY]       NVARCHAR (150) NULL,
    [CreatedBy_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    CONSTRAINT [PK_Customer_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);

