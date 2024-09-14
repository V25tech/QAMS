CREATE TABLE [dbo].[ChangeContolActionPlan_PSY] (
    [ChangeContolActionPlanId_PSY] INT            IDENTITY (1, 1) NOT NULL,
    [Type_PSY]                     NVARCHAR (250) NULL,
    [Description_PSY]              NVARCHAR (250) NULL,
    [DepartmentId_PSY]             INT            NULL,
    [AssignedUser_PSY]             INT            NULL,
    [AssignedUserGroup_PSY]        INT            NULL,
    [TargetDate_PSY]               DATETIME       NULL,
    [Remarks_PSY]                  NVARCHAR (150) NULL,
    [CreatedBy_PSY]                INT            NULL,
    [CreatedDate_PSY]              DATETIME       NULL,
    [ModifiedBy_PSY]               INT            NULL,
    [ModifiedDate_PSY]             DATETIME       NULL,
    [InitiativeId]                 INT            NULL,
    [WorkflowId]                   INT            NULL,
    [WorkflowName]                 VARCHAR (100)  NULL,
    [ApprovedUser_PSY]             INT            NULL,
    [ApprovedUserGroup_PSY]        INT            NULL,
    [IsReviewed_PSY]               BIT            NULL,
    [IsApproved_PSY]               BIT            NULL,
    [InitiativeName]               VARCHAR (200)  NULL,
    [IsSave_PSY]                   BIT            NULL,
    [ReviewStatusComment_PSY]      VARCHAR (500)  NULL,
    [APReviewComments]             VARCHAR (500)  NULL,
    [APRemarks]                    VARCHAR (500)  NULL
);





