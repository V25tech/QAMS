CREATE TABLE [dbo].[Plant_PSY] (
    [Id_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]         NVARCHAR (150) NOT NULL,
    [Code_PSY]         NVARCHAR (150) NOT NULL,
    [Revision_PSY]     INT            NULL,
    [Address_PSY]      NVARCHAR (300) NOT NULL,
    [Comment_PSY]      NVARCHAR (150) NOT NULL,
    [CreatedBy_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    CONSTRAINT [PK_Plant_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);

