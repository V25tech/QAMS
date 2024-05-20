//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;
    using VAMLibrary.Core;
    using VAMLibrary.Core.Common;


    // Comment
    public class ChangeControlRegistrationData : IChangeControlRegistrationData
    {

        private readonly DataAccessHelper dataAccessHelper;

        public ChangeControlRegistrationData(DataAccessHelper dataAccessHelper)
        {
            this.dataAccessHelper = dataAccessHelper;
        }

        public DataSet GetAllChangeControlRegistration(RequestContext requestContext)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageNumber, Value = requestContext.PageNumber });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = RequestContextConstants.PageSize, Value = requestContext.PageSize });
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_GET_ALL, sqlparms, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public DataSet GetChangeControlRegistrationByChangeControlId(System.Int32? changeControlId)
        {
            try
            {
                DataSet dataset = (DataSet)dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_GET, ChangeControlRegistrationConstants.ChangeControlId, DbType.Int32, changeControlId, ExecutionType.Dataset);
                return dataset;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveChangeControlRegistration(ChangeControlRegistration changeControlRegistration)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ChangeControlUniqueCode, Value = changeControlRegistration.ChangeControlUniqueCode });
                #region Commented Region
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.Reference, Value = changeControlRegistration.Reference });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ExternalReference, Value = changeControlRegistration.ExternalReference });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ReferenceDocuments, Value = changeControlRegistration.ReferenceDocuments });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.QualityEvent, Value = changeControlRegistration.QualityEvent });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.InitiatingDepartment, Value = changeControlRegistration.InitiatingDepartment });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.TypeOfChange, Value = changeControlRegistration.TypeOfChange });
                //sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ChangeControlRegistrationConstants.DateOfInitiation, Value = changeControlRegistration.DateOfInitiation });
                //sqlparms.Add(new SqlParameter { DbType = DbType.DateTime, ParameterName = ChangeControlRegistrationConstants.TargetDateOfClosure, Value = changeControlRegistration.TargetDateOfClosure });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Market, Value = changeControlRegistration.Market });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Customer, Value = changeControlRegistration.Customer });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.ChangeRelatedTo, Value = changeControlRegistration.ChangeRelatedTo });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.BatchOrLotNumber, Value = changeControlRegistration.BatchOrLotNumber });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.BatchOrLotDetail, Value = changeControlRegistration.BatchOrLotDetail });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Material, Value = changeControlRegistration.Material });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Equipment, Value = changeControlRegistration.Equipment });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.DocumentDetails, Value = changeControlRegistration.DocumentDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.FacilityUtilityDetails, Value = changeControlRegistration.FacilityUtilityDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ValidationDetails, Value = changeControlRegistration.ValidationDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.PackingDetails, Value = changeControlRegistration.PackingDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.SoftwareDetails, Value = changeControlRegistration.SoftwareDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.TestingDetails, Value = changeControlRegistration.TestingDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.SupplierServiceProviderDetails, Value = changeControlRegistration.SupplierServiceProviderDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ProcessDetails, Value = changeControlRegistration.ProcessDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.OtherDetails, Value = changeControlRegistration.OtherDetails });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Product, Value = changeControlRegistration.Product });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.ElementalImpuritiesAssesment, Value = changeControlRegistration.ElementalImpuritiesAssesment });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ElementalImpuritiesAssesmentReason, Value = changeControlRegistration.ElementalImpuritiesAssesmentReason });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.NitrosamineImpuritiesAssesment, Value = changeControlRegistration.NitrosamineImpuritiesAssesment });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.NitrosamineImpuritiesAssesmentReason, Value = changeControlRegistration.NitrosamineImpuritiesAssesmentReason });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.GenotxicImpuritiesAssesment, Value = changeControlRegistration.GenotxicImpuritiesAssesment });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.GenotxicImpuritiesAssesmentReason, Value = changeControlRegistration.GenotxicImpuritiesAssesmentReason });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ExistingProcedure, Value = changeControlRegistration.ExistingProcedure });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ProposedChange, Value = changeControlRegistration.ProposedChange });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.JustificationForProposedChange, Value = changeControlRegistration.JustificationForProposedChange });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.Documents, Value = changeControlRegistration.Documents });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.DoesTheChangeImpactProductMaterialQuality, Value = changeControlRegistration.DoesTheChangeImpactProductMaterialQuality });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.ImpactedProductMaterials, Value = changeControlRegistration.ImpactedProductMaterials });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.AreAnyProceduresImpacted, Value = changeControlRegistration.AreAnyProceduresImpacted });
                //sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.ImpactedProcedures, Value = changeControlRegistration.ImpactedProcedures });
                //sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.Comments, Value = changeControlRegistration.Comments }); 
                #endregion
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.RequestDetails, Value = changeControlRegistration.RequestDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ImpactDetails, Value = changeControlRegistration.ImpactDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ChangeDetails, Value = changeControlRegistration.ChangeDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Registeredby, Value = changeControlRegistration.Registeredby });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.Reintiate, Value = changeControlRegistration.Reintiate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Status, Value = changeControlRegistration.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.CreatedBy, Value = changeControlRegistration.CreatedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ModifiedBy, Value = changeControlRegistration.ModifiedBy });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.CategoryName, Value = changeControlRegistration.Category });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int16, ParameterName = ChangeControlRegistrationConstants.CategoryId, Value = changeControlRegistration.CatId });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_INSERT, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool UpdateChangeControlRegistration(ChangeControlRegistration changeControlRegistration)
        {
            try
            {
                List<SqlParameter> sqlparms = new List<SqlParameter>();
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.ChangeControlId, Value = changeControlRegistration.ChangeControlId });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ChangeControlUniqueCode, Value = changeControlRegistration.ChangeControlUniqueCode });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.RequestDetails, Value = changeControlRegistration.RequestDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ImpactDetails, Value = changeControlRegistration.ImpactDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ChangeDetails, Value = changeControlRegistration.ChangeDetails });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Registeredby, Value = changeControlRegistration.Registeredby });
                sqlparms.Add(new SqlParameter { DbType = DbType.Boolean, ParameterName = ChangeControlRegistrationConstants.Reintiate, Value = changeControlRegistration.Reintiate });
                sqlparms.Add(new SqlParameter { DbType = DbType.Int32, ParameterName = ChangeControlRegistrationConstants.Status, Value = changeControlRegistration.Status });
                sqlparms.Add(new SqlParameter { DbType = DbType.String, ParameterName = ChangeControlRegistrationConstants.ModifiedBy, Value = changeControlRegistration.ModifiedBy });
                Object result = dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_UPDATE, sqlparms, ExecutionType.Scalar);
                return (Convert.ToInt32(result) > 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteChangeControlRegistrationByChangeControlId(System.Int32? changeControlId)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_DELETE, ChangeControlRegistrationConstants.ChangeControlId, DbType.Int32, changeControlId, ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteAllChangeControlRegistration(List<int> changeControlIds)
        {
            try
            {
                var result = dataAccessHelper.ExecuteStoredProcedure(ChangeControlRegistrationConstants.USP_ChangeControlRegistration_PSY_DELETE_ALL, ChangeControlRegistrationConstants.ChangeControlId, DbType.String, string.Join(',', changeControlIds), ExecutionType.NonQuery);
                return (Convert.ToInt32(result) >= 0);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
