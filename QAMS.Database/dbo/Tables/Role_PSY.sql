﻿CREATE TABLE [dbo].[Role_PSY] (
    [Id_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]         NVARCHAR (150) NOT NULL,
    [Description_PSY]  NVARCHAR (150) NOT NULL,
    [CreatedBy_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]  DATETIME       NULL,
    [ModifiedBy_PSY]   NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY] DATETIME       NULL,
    [DOCUMENT]         NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Role_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);



