CREATE TABLE [dbo].[newactionplan_PSY] (
    [nap_PSY]              INT            IDENTITY (1, 1) NOT NULL,
    [plantype_PSY]         NVARCHAR (150) NOT NULL,
    [description_PSY]      NVARCHAR (150) NOT NULL,
    [inchargeusrgroup_PSY] NVARCHAR (150) NOT NULL,
    [assignto_PSY]         BIT            NULL,
    [selectusergroup_PSY]  NVARCHAR (150) NOT NULL,
    [targetdate_PSY]       DATETIME       NULL,
    [reviewremarks_PSY]    NVARCHAR (150) NOT NULL,
    [CreatedBy_PSY]        NVARCHAR (100) NULL,
    [CreatedDate_PSY]      DATETIME       NULL,
    [ModifiedBy_PSY]       NVARCHAR (100) NULL,
    [ModifiedDate_PSY]     DATETIME       NULL,
    [CATEGORY_PSY]         VARCHAR (200)  NULL,
    [CATID_PSY]            INT            NULL,
    CONSTRAINT [PK_newactionplan_PSY] PRIMARY KEY CLUSTERED ([nap_PSY] ASC)
);

