CREATE TABLE [dbo].[HODReview_PSY] (
    [InitiativeId_PSY]   INT            NULL,
    [InitiativeName_PSY] NVARCHAR (200) NULL,
    [IsSave_PSY]         BIT   NULL,
    [Comments_PSY]       NVARCHAR (500) NULL,
    [Status_PSY]         NVARCHAR (100) NULL,
    [CreatedBy_PSY]      INT            NULL,
    [UpdatedBy_PSY]      INT            NULL,
    [CreatedDate_PSY]    DATETIME       NULL,
    [UpdatedDate_PSY]    DATETIME       NULL,
    [Plant_PSY]          INT            NULL,
    [HodId_PSY]          INT            IDENTITY (1, 1) NOT NULL,
    [HODDocument_PSY]    XML            NULL,
    [ModifiedBy_PSY]     NVARCHAR (100) NULL,
    [ModifiedDate_PSY]   DATETIME       NULL,
    CONSTRAINT [PK_HODReview_PSY] PRIMARY KEY CLUSTERED ([HodId_PSY] ASC)
);

