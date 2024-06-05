CREATE TABLE [dbo].[ChangeControlRegistration_PSY] (

    [ChangeControlId_PSY]                           INT             IDENTITY (1, 1) NOT NULL,
    [ChangeControlUniqueCode_PSY]                   NVARCHAR (150)  NOT NULL,
    [Reference_PSY]                                 VARCHAR(50)             NULL,
    [QualityEvent_PSY]                              INT             NULL,
    [InitiatingDepartment_PSY]                      INT             NULL,
    [TypeOfChange_PSY]                              VARCHAR(50)             NULL,
    [DateOfInitiation_PSY]                          DATETIME        NULL,
    [TargetDateOfClosure_PSY]                       DATETIME        NULL,
    [Market_PSY]                                    INT             NULL,
    [Customer_PSY]                                  INT             NULL,
    [ChangeRelatedTo_PSY]                           INT             NULL,
    [BatchOrLotNumber_PSY]                          INT             NULL,
    [Material_PSY]                                  INT             NULL,
    [Equipment_PSY]                                 INT             NULL,
    [ImpactProduct_PSY]                             INT             NULL,
    [Documents_PSY]                                 NVARCHAR (MAX)  NULL,
    [IsImpactProduct] BIT             NULL,
    [ImpactedProductMaterials_PSY]                  INT             NULL,
    [IsProceduresImpacted_PSY]                      BIT             NULL,
    [Registeredby_PSY]                              INT             NULL,
    [Reintiate_PSY]                                 BIT             NULL,
    [Status_PSY]                                    INT             NULL,
    [CreatedBy_PSY]                                 NVARCHAR (150)  NOT NULL,
    [CreatedDate_PSY]                               DATETIME        NULL,

    [ModifiedBy_PSY]                                NVARCHAR (150)  NOT NULL,

    [ModifiedDate_PSY]                              DATETIME        NULL,

    [Document]                                      NVARCHAR (MAX)  NULL,

    [ChangeDetails_PSY]                             NVARCHAR (MAX)  NULL,

    [RequestDetails_PSY]                            NVARCHAR (MAX)  NULL,

    [ImpactDetails_PSY]                             NVARCHAR (MAX)  NULL,

    [Change_Type_PSY] VARCHAR(100) NULL, 

    [Plant_ID] INT NULL, 
    CONSTRAINT [PK_ChangeControlRegistration_PSY] PRIMARY KEY CLUSTERED ([ChangeControlId_PSY] ASC),

    UNIQUE NONCLUSTERED ([ChangeControlUniqueCode_PSY] ASC)

);
 
 