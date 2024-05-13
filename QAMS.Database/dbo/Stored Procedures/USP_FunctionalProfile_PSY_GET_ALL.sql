﻿ CREATE PROCEDURE [dbo].[USP_FunctionalProfile_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
 AS 
 BEGIN 
 BEGIN TRY 
 SELECT Id_PSY,
RoleId_PSY,
ChangeControlInitiation_PSY,
CCHODReview_PSY,
CCQAReview_PSY,
CCCFTReview_PSY,
CCCustomerNotification_PSY,
CCQADecision_PSY,
CCActionPlan_PSY,
CCFinalClosure_PSY,
CCExtensionOfTargetDate_PSY,
CCWorkTransfer_PSY,
CCDossierPrint_PSY,
CCAuditTrial_PSY,
CCReport_PSY,
DeviationInitiation_PSY,
DIHODReview_PSY,
DIQAReview_PSY,
DICFTReview_PSY,
DICustomerNotification_PSY,
QAManager_PSY,
Investigation_PSY,
DIQADecision_PSY,
DIActionPlan_PSY,
DIFinalClosure_PSY,
DIExtensionOfTargetDate_PSY,
DIWorkTransfer_PSY,
DIDossierPrint_PSY,
DIAuditTrial_PSY,
DIReport_PSY,
CAPAInitiation_PSY,
CAPAHODReview_PSY,
CAPAQAReview_PSY,
CAPACFTReview_PSY,
CAPAQADecision_PSY,
CAPAActionPlan_PSY,
CAPAFinalClosure_PSY,
CAPAExtensionOfTargetDate_PSY,
CAPAWorkTransfer_PSY,
CAPADossierPrint_PSY,
CAPAAuditTrial_PSY,
CAPAReport_PSY,
SecuritySetting_PSY,
NewRole_PSY,
SetFunctionalProfile_PSY,
NewUser_PSY,
NewUserApproval_PSY,
PlantAssignment_PSY,
ModifyPlantAssignment_PSY,
UserGroup_PSY,
ModifyUserGroup_PSY,
UserAccountStatus_PSY,
ResetLoginPassword_PSY,
ModifyUser_PSY,
ProductOrMaterialRegistration_PSY,
BatchOrLotParticulars_PSY,
EquipmentRegistration_PSY,
MarketRegistration_PSY,
CustomerRegistration_PSY,
AuditTrial_PSY,
Remark_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY  
 ,count(*) over() as TotalRows 
 FROM [dbo].[FunctionalProfile_PSY] WITH (NOLOCK) 
 Order by [Id_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 