CREATE TABLE [dbo].[Equipment_PSY] (
    [Id_PSY]                INT            IDENTITY (1, 1) NOT NULL,
    [Name_PSY]              NVARCHAR (150) NOT NULL,
    [EquipmentId_PSY]       NVARCHAR (150) NOT NULL,
    [Make_PSY]              NVARCHAR (150) NOT NULL,
    [Model_PSY]             NVARCHAR (150) NOT NULL,
    [SerialNumber_PSY]      NVARCHAR (150) NOT NULL,
    [InstalledLocation_PSY] NVARCHAR (150) NULL,
    [DepartmentId_PSY]      INT            NULL,
    [InstalledOn_PSY]       DATETIME       NULL,
    [WarrantyExpiresOn_PSY] DATETIME       NULL,
    [SuppliedBy_PSY]        NVARCHAR (150) NOT NULL,
    [Software_PSY]          NVARCHAR (150) NULL,
    [CreatedBy_PSY]         NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]       DATETIME       NULL,
    [ModifiedBy_PSY]        NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY]      DATETIME       NULL,
    CONSTRAINT [PK_Equipment_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC),
    CONSTRAINT [FK_Equipment_PSY_Id_PSY_Department_PSY_DepartmentId_PSY] FOREIGN KEY ([DepartmentId_PSY]) REFERENCES [dbo].[Department_PSY] ([Id_PSY])
);

