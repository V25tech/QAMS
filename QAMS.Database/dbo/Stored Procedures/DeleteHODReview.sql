﻿CREATE PROCEDURE DeleteHODReview
    @HodId INT
AS
BEGIN
    DELETE FROM HODReview
    WHERE Id = @HodId;
END;
