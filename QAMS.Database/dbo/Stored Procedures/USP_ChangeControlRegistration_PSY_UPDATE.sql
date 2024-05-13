﻿  CREATE PROCEDURE [dbo].[USP_ChangeControlRegistration_PSY_UPDATE] @ChangeControlId_PSY int,
@ChangeControlUniqueCode_PSY NVarChar(150),
@Reference_PSY Bit,
@ExternalReference_PSY NVarChar(250),
@ReferenceDocuments_PSY NVarChar(max),
@QualityEvent_PSY Int,
@InitiatingDepartment_PSY Int,
@TypeOfChange_PSY Bit,
@DateOfInitiation_PSY DateTime,
@TargetDateOfClosure_PSY DateTime,
@Market_PSY Int,
@Customer_PSY Int,
@ChangeRelatedTo_PSY Int,
@BatchOrLotNumber_PSY Int,
@BatchOrLotDetail_PSY NVarChar(250),
@Material_PSY Int,
@Equipment_PSY Int,
@DocumentDetails_PSY NVarChar(250),
@FacilityUtilityDetails_PSY NVarChar(250),
@ValidationDetails_PSY NVarChar(250),
@PackingDetails_PSY NVarChar(250),
@SoftwareDetails_PSY NVarChar(250),
@TestingDetails_PSY NVarChar(250),
@SupplierServiceProviderDetails_PSY NVarChar(250),
@ProcessDetails_PSY NVarChar(250),
@OtherDetails_PSY NVarChar(250),
@Product_PSY Int,
@ElementalImpuritiesAssesment_PSY Bit,
@ElementalImpuritiesAssesmentReason_PSY NVarChar(250),
@NitrosamineImpuritiesAssesment_PSY Bit,
@NitrosamineImpuritiesAssesmentReason_PSY NVarChar(250),
@GenotxicImpuritiesAssesment_PSY Bit,
@GenotxicImpuritiesAssesmentReason_PSY NVarChar(250),
@ExistingProcedure_PSY NVarChar(2000),
@ProposedChange_PSY NVarChar(2000),
@JustificationForProposedChange_PSY NVarChar(2000),
@Documents_PSY NVarChar(max),
@DoesTheChangeImpactProductMaterialQuality_PSY Bit,
@ImpactedProductMaterials_PSY Int,
@AreAnyProceduresImpacted_PSY Bit,
@ImpactedProcedures_PSY Int,
@Comments_PSY NVarChar(250),
@Registeredby_PSY Int,
@Reintiate_PSY Bit,
@Status_PSY Int,
@ModifiedBy_PSY NVarChar(150) 
 AS 
 BEGIN 
  BEGIN TRY 
  
 UPDATE [dbo].[ChangeControlRegistration_PSY] SET 
ChangeControlUniqueCode_PSY=@ChangeControlUniqueCode_PSY,
Reference_PSY=@Reference_PSY,
ExternalReference_PSY=@ExternalReference_PSY,
ReferenceDocuments_PSY=@ReferenceDocuments_PSY,
QualityEvent_PSY=@QualityEvent_PSY,
InitiatingDepartment_PSY=@InitiatingDepartment_PSY,
TypeOfChange_PSY=@TypeOfChange_PSY,
DateOfInitiation_PSY=@DateOfInitiation_PSY,
TargetDateOfClosure_PSY=@TargetDateOfClosure_PSY,
Market_PSY=@Market_PSY,
Customer_PSY=@Customer_PSY,
ChangeRelatedTo_PSY=@ChangeRelatedTo_PSY,
BatchOrLotNumber_PSY=@BatchOrLotNumber_PSY,
BatchOrLotDetail_PSY=@BatchOrLotDetail_PSY,
Material_PSY=@Material_PSY,
Equipment_PSY=@Equipment_PSY,
DocumentDetails_PSY=@DocumentDetails_PSY,
FacilityUtilityDetails_PSY=@FacilityUtilityDetails_PSY,
ValidationDetails_PSY=@ValidationDetails_PSY,
PackingDetails_PSY=@PackingDetails_PSY,
SoftwareDetails_PSY=@SoftwareDetails_PSY,
TestingDetails_PSY=@TestingDetails_PSY,
SupplierServiceProviderDetails_PSY=@SupplierServiceProviderDetails_PSY,
ProcessDetails_PSY=@ProcessDetails_PSY,
OtherDetails_PSY=@OtherDetails_PSY,
Product_PSY=@Product_PSY,
ElementalImpuritiesAssesment_PSY=@ElementalImpuritiesAssesment_PSY,
ElementalImpuritiesAssesmentReason_PSY=@ElementalImpuritiesAssesmentReason_PSY,
NitrosamineImpuritiesAssesment_PSY=@NitrosamineImpuritiesAssesment_PSY,
NitrosamineImpuritiesAssesmentReason_PSY=@NitrosamineImpuritiesAssesmentReason_PSY,
GenotxicImpuritiesAssesment_PSY=@GenotxicImpuritiesAssesment_PSY,
GenotxicImpuritiesAssesmentReason_PSY=@GenotxicImpuritiesAssesmentReason_PSY,
ExistingProcedure_PSY=@ExistingProcedure_PSY,
ProposedChange_PSY=@ProposedChange_PSY,
JustificationForProposedChange_PSY=@JustificationForProposedChange_PSY,
Documents_PSY=@Documents_PSY,
DoesTheChangeImpactProductMaterialQuality_PSY=@DoesTheChangeImpactProductMaterialQuality_PSY,
ImpactedProductMaterials_PSY=@ImpactedProductMaterials_PSY,
AreAnyProceduresImpacted_PSY=@AreAnyProceduresImpacted_PSY,
ImpactedProcedures_PSY=@ImpactedProcedures_PSY,
Comments_PSY=@Comments_PSY,
Registeredby_PSY=@Registeredby_PSY,
Reintiate_PSY=@Reintiate_PSY,
Status_PSY=@Status_PSY,
ModifiedBy_PSY=@ModifiedBy_PSY WHERE  [ChangeControlId_PSY] = @ChangeControlId_PSY ;  select @ChangeControlId_PSY; 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 