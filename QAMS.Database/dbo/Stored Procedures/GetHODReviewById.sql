CREATE PROCEDURE GetHODReviewById
    @HodId INT
AS
BEGIN
    SELECT 
        HodId,
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
        HodId = @HodId;
END;
