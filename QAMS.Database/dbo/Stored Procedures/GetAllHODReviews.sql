CREATE PROCEDURE GetAllHODReviews
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
        HODReview;
END;
