﻿CREATE TABLE [dbo].[CFTReview]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[InitiativeId] INT NULL, 
    [InitiativeName] VARCHAR(200) NULL, 
    [IsSave] BIT NULL, 
	[Status] VARCHAR(100) NULL, 
    [Plant] INT NULL, 
    [CreatedBy] INT NULL, 
    [UpdatedBy] INT NULL, 
    [CreatedDate] DATETIME NULL, 
    [UpdatedDate] DATETIME NULL, 
    [IsProposedChange] BIT NULL, 
    [Remarks] VARCHAR(MAX) NULL, 
)