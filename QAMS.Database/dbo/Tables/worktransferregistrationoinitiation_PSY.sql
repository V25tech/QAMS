CREATE TABLE [dbo].[worktransferregistrationoinitiation_PSY] (
    [wtriid_PSY]                  INT            IDENTITY (1, 1) NOT NULL,
    [worktransferdescription_PSY] NVARCHAR (150) NOT NULL,
    [worktransferfrom_PSY]        NVARCHAR (150) NOT NULL,
    [tasklist_PSY]                NVARCHAR (150) NOT NULL,
    [worktransferto_PSY]          NVARCHAR (150) NOT NULL,
    [validupto_PSY]               DATETIME       NULL,
    [CreatedBy_PSY]               NVARCHAR (100) NULL,
    [CreatedDate_PSY]             DATETIME       NULL,
    [ModifiedBy_PSY]              NVARCHAR (100) NULL,
    [ModifiedDate_PSY]            DATETIME       NULL,
    [Category_PSY]                VARCHAR (200)  NULL,
    [CATID_PSY]                   INT            NULL,
    CONSTRAINT [PK_worktransferregistrationoinitiation_PSY] PRIMARY KEY CLUSTERED ([wtriid_PSY] ASC)
);

