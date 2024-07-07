CREATE PROCEDURE GetHODReviewById
    @HodId INT
AS
BEGIN
    SELECT 
        Id,
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
    FROM 
        HODReview
    WHERE 
        Id = @HodId;
END;
