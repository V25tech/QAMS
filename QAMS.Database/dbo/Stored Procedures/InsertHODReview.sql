CREATE PROCEDURE InsertHODReview
    @InitiativeId INT,
    @InitiativeName NVARCHAR(255),
    @IsSave BIT,
    @Comments NVARCHAR(MAX),
    @Status NVARCHAR(50),
    @CreatedBy INT,
    @UpdatedBy INT,
    @Plant INT
AS
BEGIN
DECLARE @ID INT 
    INSERT INTO HODReview (
        InitiativeId,
        InitiativeName,
        IsSave,
        Comments,
        Status,
        CreatedBy,
        UpdatedBy,
        CreatedDate,
        UpdatedDate,
        Plant
    ) VALUES (
        @InitiativeId,
        @InitiativeName,
        @IsSave,
        @Comments,
        @Status,
        @CreatedBy,
        @UpdatedBy,
        GETDATE(),
        GETDATE(),
        @Plant
    );
    SELECT @ID = @@IDENTITY;
END;
