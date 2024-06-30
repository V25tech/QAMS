CREATE TABLE [dbo].[newdocument_PSY] (
    [nd_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [title_PSY]        NVARCHAR (150) NOT NULL,
    [description_PSY]  NVARCHAR (150) NOT NULL,
    [uploadfile_PSY]   NVARCHAR (1)   NULL,
    [CreatedBy_PSY]    NVARCHAR (100) NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (100) NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    CONSTRAINT [PK_newdocument_PSY] PRIMARY KEY CLUSTERED ([nd_PSY] ASC)
);

