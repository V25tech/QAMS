CREATE PROCEDURE GetAllHODReviews
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
        HODReview;
END;
