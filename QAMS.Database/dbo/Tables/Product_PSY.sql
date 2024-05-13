CREATE TABLE [dbo].[Product_PSY] (
    [Id_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]         NVARCHAR (150) NOT NULL,
    [Code_PSY]         NVARCHAR (150) NOT NULL,
    [ChemicalName_PSY] NVARCHAR (150) NOT NULL,
    [IsActive_PSY]     BIT            NULL,
    [CreatedBy_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    CONSTRAINT [PK_Product_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);

