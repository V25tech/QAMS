CREATE TABLE [dbo].[Market_PSY] (
    [Id_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]         NVARCHAR (150) NOT NULL,
    [Code_PSY]         NVARCHAR (150) NOT NULL,
    [Remark_PSY]       NVARCHAR (150) NULL,
    [CreatedBy_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    CONSTRAINT [PK_Market_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);

