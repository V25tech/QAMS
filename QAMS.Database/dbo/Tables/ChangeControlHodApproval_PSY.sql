CREATE TABLE [dbo].[ChangeControlHodApproval_PSY] (
    [ChangeControlHodApprovalId_PSY] INT             IDENTITY (1, 1) NOT NULL,
    [ChangeControlId_PSY]            INT             NULL,
    [ActionPlanProposalRequired_PSY] BIT             NULL,
    [ProposedActionPlans_PSY]        NVARCHAR (150)  NULL,
    [HodReviewComments_PSY]          NVARCHAR (2000) NULL,
    [Documents_PSY]                  NVARCHAR (MAX)  NOT NULL,
    [Remarks_PSY]                    NVARCHAR (250)  NULL,
    [CreatedBy_PSY]                  NVARCHAR (150)  NOT NULL,
    [CreatedDate_PSY]                DATETIME        NULL,
    [ModifiedBy_PSY]                 NVARCHAR (150)  NOT NULL,
    [ModifiedDate_PSY]               DATETIME        NULL,
    [Category_PSY]                   VARCHAR (200)   NULL,
    [CATID_PSY]                      INT             NULL,
    CONSTRAINT [PK_ChangeControlHodApproval_PSY] PRIMARY KEY CLUSTERED ([ChangeControlHodApprovalId_PSY] ASC),
    CONSTRAINT [FK_ChangeControlHodApproval_PSY_ChangeControlId_PSY_ChangeControlRegistration_PSY_ChangeControlId_PSY] FOREIGN KEY ([ChangeControlId_PSY]) REFERENCES [dbo].[ChangeControlRegistration_PSY] ([ChangeControlId_PSY])
);



