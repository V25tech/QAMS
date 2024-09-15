CREATE PROCEDURE [dbo].[USP_GET_ACTIVITIES_BY_INITIATIVE]
	@INIT INT=0
	AS
	BEGIN
	DECLARE @ACTIVITY TABLE(Activity_PSY VARCHAR(500))
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated HOD Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(HOD.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM HODReview_PSY HOD 
	JOIN User_PSY USR ON USR.Id_PSY = HOD.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = HOD.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated HOD Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(HOD.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM HODReview_PSY HOD 
	JOIN User_PSY USR ON USR.Id_PSY = HOD.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = HOD.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated QA Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(QAR.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM QAReview_PSY QAR 
	JOIN User_PSY USR ON USR.Id_PSY = QAR.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = QAR.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated QA Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(QAR.UpdatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM QAReview_PSY QAR 
	JOIN User_PSY USR ON USR.Id_PSY = QAR.UpdatedDate_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = QAR.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated CFT Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CFT.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM CFTReview_PSY CFT 
	JOIN User_PSY USR ON USR.Id_PSY = CFT.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CFT.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated CFT Review Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CFT.UpdatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM CFTReview_PSY CFT 
	JOIN User_PSY USR ON USR.Id_PSY = CFT.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CFT.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated Customer Notification Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CN.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM CustomerNotification_PSY CN 
	JOIN User_PSY USR ON USR.Id_PSY = CN.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CN.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated Customer Notification Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CN.UpdatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM CustomerNotification_PSY CN 
	JOIN User_PSY USR ON USR.Id_PSY = CN.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CN.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated QA Decision Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(QAD.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM QADecision_PSY QAD 
	JOIN User_PSY USR ON USR.Id_PSY = QAD.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = QAD.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated QA Decision Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(QAD.UpdatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM QADecision_PSY QAD 
	JOIN User_PSY USR ON USR.Id_PSY = QAD.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = QAD.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated ' +CCA.WORKFLOWNAME+  ' ActionPlan Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CCA.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM ChangeContolActionPlan_PSY CCA 
	JOIN User_PSY USR ON USR.Id_PSY = CCA.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CCA.InitiativeId
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated '+CCA.WORKFLOWNAME+ ' ActionPlan Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CCA.ModifiedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM ChangeContolActionPlan_PSY CCA 
	JOIN User_PSY USR ON USR.Id_PSY = CCA.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CCA.InitiativeId
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Initiated Closure Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CL.CreatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM Closure_PSY CL 
	JOIN User_PSY USR ON USR.Id_PSY = CL.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CL.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;
	INSERT @ACTIVITY
	SELECT (USR.UserId_PSY+' Updated Closure Stage '+ cc.ChangeControlUniqueCode_PSY + ' at ' + FORMAT(CL.UpdatedDate_PSY, 'dd-MMM-yyyy hh:mm:ss tt')) AS DATA 
	FROM Closure_PSY CL 
	JOIN User_PSY USR ON USR.Id_PSY = CL.CreatedBy_PSY
	JOIN ChangeControlRegistration_PSY cc ON cc.ChangeControlId_PSY = CL.InitiativeId_PSY
	WHERE cc.ChangeControlId_PSY = @INIT;

	SELECT * FROM @ACTIVITY

	END