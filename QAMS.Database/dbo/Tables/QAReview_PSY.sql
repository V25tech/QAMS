CREATE TABLE [dbo].[QAReview_PSY] (
    [ClassificationOfChange_PSY] NVARCHAR (1)   NULL,
    [ImpactOnProcFormats_PSY]    NVARCHAR (1)   NULL,
    [ProcedureFormat_PSY]        NVARCHAR (150) NULL,
    [IsRegularCustomer_PSY]      NVARCHAR (1)   NULL,
    [ImpactCommitment_PSY]       NVARCHAR (500) NULL,
    [ReviewComments_PSY]         NVARCHAR (500) NULL,
    [InitiativeId_PSY]           INT            NULL,
    [InitiativeName_PSY]         NVARCHAR (200) NULL,
    [IsSave_PSY]                 NVARCHAR (1)   NULL,
    [Status_PSY]                 NVARCHAR (100) NULL,
    [CreatedBy_PSY]              INT            NULL,
    [UpdatedBy_PSY]              INT            NULL,
    [CreatedDate_PSY]            DATETIME       NULL,
    [UpdatedDate_PSY]            DATETIME       NULL,
    [Plant_PSY]                  INT            NULL,
    [QAId_PSY]                   INT            IDENTITY (1, 1) NOT NULL,
    [QaDocument_PSY]             XML            NULL,
    [ModifiedBy_PSY]             NVARCHAR (100) NULL,
    [ModifiedDate_PSY]           DATETIME       NULL,
    CONSTRAINT [PK_QAReview_PSY] PRIMARY KEY CLUSTERED ([QAId_PSY] ASC)
);

