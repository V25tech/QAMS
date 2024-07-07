﻿CREATE TABLE [dbo].[CustomerNotification_PSY] (
    [InitiativeId_PSY]     INT            NULL,
    [InitiativeName_PSY]   NVARCHAR (200) NULL,
    [IsSave_PSY]           NVARCHAR (1)   NULL,
    [Comments_PSY]         NVARCHAR (500) NULL,
    [Status_PSY]           NVARCHAR (100) NULL,
    [CreatedBy_PSY]        INT            NULL,
    [UpdatedBy_PSY]        INT            NULL,
    [CreatedDate_PSY]      DATETIME       NULL,
    [UpdatedDate_PSY]      DATETIME       NULL,
    [Plant_PSY]            INT            NULL,
    [CNId_PSY]             INT            IDENTITY (1, 1) NOT NULL,
    [IsProposedChange_PSY] NVARCHAR (1)   NULL,
    [Remarks_PSY]          NVARCHAR (500) NULL,
    [CNDocument_PSY]       XML            NULL,
    [ModifiedBy_PSY]       NVARCHAR (100) NULL,
    [ModifiedDate_PSY]     DATETIME       NULL,
    CONSTRAINT [PK_CustomerNotification_PSY] PRIMARY KEY CLUSTERED ([CNId_PSY] ASC)
);

