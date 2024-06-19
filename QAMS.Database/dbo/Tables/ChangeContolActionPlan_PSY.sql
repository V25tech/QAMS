CREATE TABLE [dbo].[ChangeContolActionPlan_PSY] (
    [ChangeContolActionPlanId_PSY] INT            IDENTITY (1, 1) NOT NULL,
    [Type_PSY]                     NVARCHAR (250) NULL,
    [Description_PSY]              NVARCHAR (250) NULL,
    [DepartmentId_PSY]             INT            NULL,
    [AssignedUser_PSY]             INT            NULL,
    [AssignedUserGroup_PSY]        INT            NULL,
    [TargetDate_PSY]               DATETIME       NULL,
    [Remarks_PSY]                  NVARCHAR (150) NULL,
    [CreatedBy_PSY]                INT NULL,
    [CreatedDate_PSY]              DATETIME       NULL,
    [ModifiedBy_PSY]               INT NULL,
    [ModifiedDate_PSY]             DATETIME       NULL,
    [InitiativeId]                    INT            NULL,
    [WorkflowId] INT NULL, 
    [WorkflowName] VARCHAR(100) NULL, 
    [ApprovedUser_PSY] INT NULL, 
    [ApprovedUserGroup_PSY] INT NULL, 
    [IsReviewed_PSY] BIT NULL, 
    [IsApproved_PSY] BIT NULL, 
    [InitiativeName] VARCHAR(200) NULL, 
    --CONSTRAINT [PK_ChangeContolActionPlan_PSY] PRIMARY KEY CLUSTERED ([ChangeContolActionPlanId_PSY] ASC),
    --CONSTRAINT [FK_ChangeContolActionPlan_PSY_Id_PSY_Department_PSY_DepartmentId_PSY] FOREIGN KEY ([DepartmentId_PSY]) REFERENCES [dbo].[Department_PSY] ([Id_PSY]),
    --CONSTRAINT [FK_ChangeContolActionPlan_PSY_Id_PSY_User_PSY_AssignedUser_PSY] FOREIGN KEY ([AssignedUser_PSY]) REFERENCES [dbo].[User_PSY] ([Id_PSY]),
    --CONSTRAINT [FK_ChangeContolActionPlan_PSY_Id_PSY_UserGroup_PSY_AssignedUserGroup_PSY] FOREIGN KEY ([AssignedUserGroup_PSY]) REFERENCES [dbo].[UserGroup_PSY] ([Id_PSY])
);



