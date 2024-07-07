CREATE TABLE [dbo].[CustomerNotification]
(
	[CNId] INT NOT NULL PRIMARY KEY IDENTITY,
	[InitiativeId] INT NULL, 
    [InitiativeName] VARCHAR(200) NULL, 
    [IsSave] BIT NULL, 
	[Status] VARCHAR(100) NULL, 
    [Plant] INT NULL, 
    [CreatedBy] INT NULL, 
    [UpdatedBy] INT NULL, 
    [CreatedDate] DATETIME NULL, 
    [UpdatedDate] DATETIME NULL, 
    [Comments] VARCHAR(500) NULL, 
    [IsProposedChanges] BIT NULL, 
    [Remarks] VARCHAR(500) NULL, 
)
