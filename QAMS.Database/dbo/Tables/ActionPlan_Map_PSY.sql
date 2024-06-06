CREATE TABLE [dbo].[ActionPlan_Map_PSY] (
    [UserId_PSY]           INT            IDENTITY (1, 1) NOT NULL,
    [CategoryId_PSY]       INT            NULL,
    [IsReviewed_PSY]       BIT            NULL,
    [IsActionPlan_PSY]     BIT            NULL,
    [initId_PSY]           BIT            NULL,
    [DocumentAction_PSY]   BIT            NULL,
    [DocumentCategory_PSY] NVARCHAR (150) NULL,
    [CreatedBy_PSY]        NVARCHAR (100) NULL,
    [CreatedDate_PSY]      DATETIME       NULL,
    [ModifiedBy_PSY]       NVARCHAR (100) NULL,
    [ModifiedDate_PSY]     DATETIME       NULL,
    CONSTRAINT [PK_ActionPlan_Map_PSY] PRIMARY KEY CLUSTERED ([UserId_PSY] ASC)
);

