﻿CREATE TABLE [dbo].[HODReview]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [InitiativeId] INT NULL, 
    [InitiativeName] VARCHAR(200) NULL, 
    [IsSave] BIT NULL, 
    [Comments] VARCHAR(MAX) NULL, 
    [Status] VARCHAR(100) NULL, 
    [Plant] INT NULL, 
    [CreatedBy] INT NULL, 
    [UpdatedBy] INT NULL, 
    [CreatedDate] DATETIME NULL, 
    [UpdatedDate] DATETIME NULL 
)