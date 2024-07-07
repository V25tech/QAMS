CREATE TABLE [dbo].[Closure]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[InitiativeId] INT NULL, 
    [InitiativeName] VARCHAR(200) NULL, 
    [IsSave] BIT NULL, 
	[Status] VARCHAR(100) NULL, 
    [Plant] INT NULL, 
    [CreatedBy] INT NULL, 
    [UpdatedBy] INT NULL, 
    [CreatedDate] DATETIME NULL, 
    [UpdatedDate] DATETIME NULL, 
    [IsAllDocumentsApprovedEff] BIT NULL, 
    [TrainingCompleted] BIT NULL, 
    [IsApprovedChangesEff] BIT NULL, 
    [IsIdentifiedActions] BIT NULL, 
    [Decision] VARCHAR(100) NULL, 
    [ImplementEffChanges] VARCHAR(500) NULL, 
)
