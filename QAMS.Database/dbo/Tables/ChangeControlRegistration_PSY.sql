CREATE TABLE [dbo].[ChangeControlRegistration_PSY] (
    [ChangeControlId_PSY]         INT            IDENTITY (1, 1) NOT NULL,
    [ChangeControlUniqueCode_PSY] NVARCHAR (150) NOT NULL,
    [Comments_PSY]                NVARCHAR (250) NOT NULL,
    [Registeredby_PSY]            INT            NULL,
    [Reintiate_PSY]               BIT            NULL,
    [Status_PSY]                  INT            NULL,
    [CreatedBy_PSY]               NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]             DATETIME       NULL,
    [ModifiedBy_PSY]              NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY]            DATETIME       NULL,
    [Document]                    NVARCHAR (MAX) NULL,
    [ChangeDetails_PSY]           NVARCHAR (MAX) NULL,
    [RequestDetails_PSY]          NVARCHAR (MAX) NULL,
    [ImpactDetails_PSY]           NVARCHAR (MAX) NULL,
    [PLANT_ID]                    INT            NULL,
    CONSTRAINT [PK_ChangeControlRegistration_PSY] PRIMARY KEY CLUSTERED ([ChangeControlId_PSY] ASC),
    UNIQUE NONCLUSTERED ([ChangeControlUniqueCode_PSY] ASC)
);





