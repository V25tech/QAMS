CREATE TABLE [dbo].[SecuritySetting_PSY] (
    [Id_PSY]                          INT            IDENTITY (1, 1) NOT NULL,
    [MinimumUserIdLength_PSY]         INT            NULL,
    [MinimumPasswordLength_PSY]       INT            NULL,
    [MaximumTenureOfPassword_PSY]     INT            NULL,
    [PasswordExpiryAlert_PSY]         INT            NULL,
    [RetainHistoryOfLastPassword_PSY] INT            NULL,
    [ComplexityofPassword_PSY]        INT            NULL,
    [AccountLockout_PSY]              INT            NULL,
    [SessionTimeout_PSY]              INT            NULL,
    [Remark_PSY]                      NVARCHAR (150) NOT NULL,
    [CreatedBy_PSY]                   NVARCHAR (150) NOT NULL,
    [CreatedDate_PSY]                 DATETIME       NULL,
    [ModifiedBy_PSY]                  NVARCHAR (150) NOT NULL,
    [ModifiedDate_PSY]                DATETIME       NULL,
    CONSTRAINT [PK_SecuritySetting_PSY] PRIMARY KEY CLUSTERED ([Id_PSY] ASC)
);

