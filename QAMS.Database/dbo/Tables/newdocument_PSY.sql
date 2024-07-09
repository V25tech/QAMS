CREATE TABLE [dbo].[newdocument_PSY] (
    [newId_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [title_PSY]        NVARCHAR (150) NOT NULL,
    [description_PSY]  NVARCHAR (150) NOT NULL,
    [uploadfile_PSY]   NVARCHAR (150)   NULL,
    [CreatedBy_PSY]    INT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   INT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    [ParentControlId_PSY] INT NULL, 
    [InitiativeType] VARCHAR(250) NULL, 
    CONSTRAINT [PK_newdocument_PSY] PRIMARY KEY CLUSTERED ([newId_PSY] ASC)
);

