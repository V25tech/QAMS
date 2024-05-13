//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.WEB.Entities;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Common.Entities;
    
    
    // Comment
    public static class ChangeControlRegistrationConverter
    {
        
        public static List<ChangeControlRegistration> SetAllChangeControlRegistration(DataSet dataset)
        {
            try
            {
                List<ChangeControlRegistration> result = new List<ChangeControlRegistration>();
                ChangeControlRegistration changeControlRegistrationData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        changeControlRegistrationData = new ChangeControlRegistration();
                        changeControlRegistrationData.ChangeControlId = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.ChangeControlId.TrimAt()]);
                        changeControlRegistrationData.ChangeControlUniqueCode = Convert.ToString(row[ChangeControlRegistrationConstants.ChangeControlUniqueCode.TrimAt()]);
                        changeControlRegistrationData.Reference = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.Reference.TrimAt()]);
                        changeControlRegistrationData.ExternalReference = Convert.ToString(row[ChangeControlRegistrationConstants.ExternalReference.TrimAt()]);
                        changeControlRegistrationData.ReferenceDocuments = Convert.ToString(row[ChangeControlRegistrationConstants.ReferenceDocuments.TrimAt()]);
                        changeControlRegistrationData.QualityEvent = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.QualityEvent.TrimAt()]);
                        changeControlRegistrationData.InitiatingDepartment = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.InitiatingDepartment.TrimAt()]);
                        changeControlRegistrationData.TypeOfChange = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.TypeOfChange.TrimAt()]);
                        changeControlRegistrationData.DateOfInitiation = DatatypeConverter.SetDateTime(row[ChangeControlRegistrationConstants.DateOfInitiation.TrimAt()]);
                        changeControlRegistrationData.TargetDateOfClosure = DatatypeConverter.SetDateTime(row[ChangeControlRegistrationConstants.TargetDateOfClosure.TrimAt()]);
                        changeControlRegistrationData.Market = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Market.TrimAt()]);
                        changeControlRegistrationData.Customer = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Customer.TrimAt()]);
                        changeControlRegistrationData.ChangeRelatedTo = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.ChangeRelatedTo.TrimAt()]);
                        changeControlRegistrationData.BatchOrLotNumber = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.BatchOrLotNumber.TrimAt()]);
                        changeControlRegistrationData.BatchOrLotDetail = Convert.ToString(row[ChangeControlRegistrationConstants.BatchOrLotDetail.TrimAt()]);
                        changeControlRegistrationData.Material = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Material.TrimAt()]);
                        changeControlRegistrationData.Equipment = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Equipment.TrimAt()]);
                        changeControlRegistrationData.DocumentDetails = Convert.ToString(row[ChangeControlRegistrationConstants.DocumentDetails.TrimAt()]);
                        changeControlRegistrationData.FacilityUtilityDetails = Convert.ToString(row[ChangeControlRegistrationConstants.FacilityUtilityDetails.TrimAt()]);
                        changeControlRegistrationData.ValidationDetails = Convert.ToString(row[ChangeControlRegistrationConstants.ValidationDetails.TrimAt()]);
                        changeControlRegistrationData.PackingDetails = Convert.ToString(row[ChangeControlRegistrationConstants.PackingDetails.TrimAt()]);
                        changeControlRegistrationData.SoftwareDetails = Convert.ToString(row[ChangeControlRegistrationConstants.SoftwareDetails.TrimAt()]);
                        changeControlRegistrationData.TestingDetails = Convert.ToString(row[ChangeControlRegistrationConstants.TestingDetails.TrimAt()]);
                        changeControlRegistrationData.SupplierServiceProviderDetails = Convert.ToString(row[ChangeControlRegistrationConstants.SupplierServiceProviderDetails.TrimAt()]);
                        changeControlRegistrationData.ProcessDetails = Convert.ToString(row[ChangeControlRegistrationConstants.ProcessDetails.TrimAt()]);
                        changeControlRegistrationData.OtherDetails = Convert.ToString(row[ChangeControlRegistrationConstants.OtherDetails.TrimAt()]);
                        changeControlRegistrationData.Product = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Product.TrimAt()]);
                        changeControlRegistrationData.ElementalImpuritiesAssesment = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.ElementalImpuritiesAssesment.TrimAt()]);
                        changeControlRegistrationData.ElementalImpuritiesAssesmentReason = Convert.ToString(row[ChangeControlRegistrationConstants.ElementalImpuritiesAssesmentReason.TrimAt()]);
                        changeControlRegistrationData.NitrosamineImpuritiesAssesment = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.NitrosamineImpuritiesAssesment.TrimAt()]);
                        changeControlRegistrationData.NitrosamineImpuritiesAssesmentReason = Convert.ToString(row[ChangeControlRegistrationConstants.NitrosamineImpuritiesAssesmentReason.TrimAt()]);
                        changeControlRegistrationData.GenotxicImpuritiesAssesment = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.GenotxicImpuritiesAssesment.TrimAt()]);
                        changeControlRegistrationData.GenotxicImpuritiesAssesmentReason = Convert.ToString(row[ChangeControlRegistrationConstants.GenotxicImpuritiesAssesmentReason.TrimAt()]);
                        changeControlRegistrationData.ExistingProcedure = Convert.ToString(row[ChangeControlRegistrationConstants.ExistingProcedure.TrimAt()]);
                        changeControlRegistrationData.ProposedChange = Convert.ToString(row[ChangeControlRegistrationConstants.ProposedChange.TrimAt()]);
                        changeControlRegistrationData.JustificationForProposedChange = Convert.ToString(row[ChangeControlRegistrationConstants.JustificationForProposedChange.TrimAt()]);
                        changeControlRegistrationData.Documents = Convert.ToString(row[ChangeControlRegistrationConstants.Documents.TrimAt()]);
                        changeControlRegistrationData.DoesTheChangeImpactProductMaterialQuality = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.DoesTheChangeImpactProductMaterialQuality.TrimAt()]);
                        changeControlRegistrationData.ImpactedProductMaterials = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.ImpactedProductMaterials.TrimAt()]);
                        changeControlRegistrationData.AreAnyProceduresImpacted = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.AreAnyProceduresImpacted.TrimAt()]);
                        changeControlRegistrationData.ImpactedProcedures = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.ImpactedProcedures.TrimAt()]);
                        changeControlRegistrationData.Comments = Convert.ToString(row[ChangeControlRegistrationConstants.Comments.TrimAt()]);
                        changeControlRegistrationData.Registeredby = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Registeredby.TrimAt()]);
                        changeControlRegistrationData.Reintiate = DatatypeConverter.SetBoolValue(row[ChangeControlRegistrationConstants.Reintiate.TrimAt()]);
                        changeControlRegistrationData.Status = DatatypeConverter.SetIntValue(row[ChangeControlRegistrationConstants.Status.TrimAt()]);
                        changeControlRegistrationData.CreatedBy = Convert.ToString(row[ChangeControlRegistrationConstants.CreatedBy.TrimAt()]);
                        changeControlRegistrationData.CreatedDate = DatatypeConverter.SetDateTime(row[ChangeControlRegistrationConstants.CreatedDate.TrimAt()]);
                        changeControlRegistrationData.ModifiedBy = Convert.ToString(row[ChangeControlRegistrationConstants.ModifiedBy.TrimAt()]);
                        changeControlRegistrationData.ModifiedDate = DatatypeConverter.SetDateTime(row[ChangeControlRegistrationConstants.ModifiedDate.TrimAt()]);
                        result.Add(changeControlRegistrationData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static ChangeControlRegistration SetChangeControlRegistration(DataSet dataset)
        {
            var result = SetAllChangeControlRegistration(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
