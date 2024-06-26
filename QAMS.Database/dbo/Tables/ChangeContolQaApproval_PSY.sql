﻿CREATE TABLE [dbo].[ChangeContolQaApproval_PSY] (
    [ChangeContolQaApprovalId_PSY]                                        INT             IDENTITY (1, 1) NOT NULL,
    [ChangeControlId_PSY]                                                 INT             NULL,
    [ClassificationOfChange_PSY]                                          BIT             NULL,
    [ImpactOnProceduresOrDrawingsOrAssociatedFormats_PSY]                 BIT             NULL,
    [ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange_PSY] NVARCHAR (250)  NULL,
    [AreThereAnyRegulatoryCustomerCommitmentsImpactedByThisChange_PSY]    BIT             NULL,
    [ImpactedRegulatoryCustomerCommitments_PSY]                           NVARCHAR (250)  NULL,
    [AdditionalActionPlanProposalsRequired_PSY]                           BIT             NULL,
    [ProposedAdditionalActionPlans_PSY]                                   NVARCHAR (150)  NULL,
    [RiskAssesmentRequired_PSY]                                           BIT             NULL,
    [ProposedRiskAssesment_PSY]                                           INT             NULL,
    [CustomerApproval_PSY]                                                INT             NULL,
    [DepartmentsRequiredToProvideImpactAssesmentEvaluation_PSY]           INT             NULL,
    [QAReviewComments_PSY]                                                NVARCHAR (2000) NULL,
    [Documents_PSY]                                                       NVARCHAR (MAX)  NULL,
    [Remarks_PSY]                                                         NVARCHAR (150)  NULL,
    [CreatedBy_PSY]                                                       NVARCHAR (150)  NOT NULL,
    [CreatedDate_PSY]                                                     DATETIME        NULL,
    [ModifiedBy_PSY]                                                      NVARCHAR (150)  NOT NULL,
    [ModifiedDate_PSY]                                                    DATETIME        NULL,
    [Category_PSY]                                                        VARCHAR (200)   NULL,
    [CATID_PSY]                                                           INT             NULL,
    CONSTRAINT [PK_ChangeContolQaApproval_PSY] PRIMARY KEY CLUSTERED ([ChangeContolQaApprovalId_PSY] ASC),
    CONSTRAINT [FK_ChangeContolQaApproval_PSY_ChangeControlId_PSY_ChangeControlRegistration_PSY_ChangeControlId_PSY] FOREIGN KEY ([ChangeControlId_PSY]) REFERENCES [dbo].[ChangeControlRegistration_PSY] ([ChangeControlId_PSY])
);



