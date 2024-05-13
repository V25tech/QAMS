  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_GET] @ChangeControlId_PSY int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT ChangeControlId_PSY,
ChangeControlUniqueCode_PSY,
Reference_PSY,
ExternalReference_PSY,
ReferenceDocuments_PSY,
QualityEvent_PSY,
InitiatingDepartment_PSY,
TypeOfChange_PSY,
DateOfInitiation_PSY,
TargetDateOfClosure_PSY,
Market_PSY,
Customer_PSY,
ChangeRelatedTo_PSY,
BatchOrLotNumber_PSY,
BatchOrLotDetail_PSY,
Material_PSY,
Equipment_PSY,
DocumentDetails_PSY,
FacilityUtilityDetails_PSY,
ValidationDetails_PSY,
PackingDetails_PSY,
SoftwareDetails_PSY,
TestingDetails_PSY,
SupplierServiceProviderDetails_PSY,
ProcessDetails_PSY,
OtherDetails_PSY,
Product_PSY,
ElementalImpuritiesAssesment_PSY,
ElementalImpuritiesAssesmentReason_PSY,
NitrosamineImpuritiesAssesment_PSY,
NitrosamineImpuritiesAssesmentReason_PSY,
GenotxicImpuritiesAssesment_PSY,
GenotxicImpuritiesAssesmentReason_PSY,
ExistingProcedure_PSY,
ProposedChange_PSY,
JustificationForProposedChange_PSY,
Documents_PSY,
DoesTheChangeImpactProductMaterialQuality_PSY,
ImpactedProductMaterials_PSY,
AreAnyProceduresImpacted_PSY,
ImpactedProcedures_PSY,
Comments_PSY,
Registeredby_PSY,
Reintiate_PSY,
Status_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[ChangeControlRegistration_PSY] WITH (NOLOCK) where [ChangeControlId_PSY] = @ChangeControlId_PSY   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 


