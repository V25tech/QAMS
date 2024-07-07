CREATE PROCEDURE GetHODReviewByInitId
    @InitId INT
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
        InitiativeId = @InitId;
END;
