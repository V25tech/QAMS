CREATE PROCEDURE UpdateHODReview
    @HodId int,
    @IsSave BIT,
    @Comments NVARCHAR(MAX),
    @Status NVARCHAR(50),
    @UpdatedBy INT
AS
BEGIN
    UPDATE HODReview
    SET
        IsSave = @IsSave,
        Comments = @Comments,
        Status = @Status,
        UpdatedBy = @UpdatedBy,
        UpdatedDate = GETDATE()
    WHERE
        Id = @HodId;

        SELECT @HodId;
END;
