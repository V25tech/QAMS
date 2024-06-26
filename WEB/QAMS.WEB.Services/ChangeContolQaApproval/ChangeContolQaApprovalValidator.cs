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
    using VAMLIbrary.Core.Validators;
    
    
    // Comment
    public static class ChangeContolQaApprovalValidator
    {
        
        public static string IsValidChangeContolQaApproval(ChangeContolQaApproval changeContolQaApproval)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange,250, nameof(changeContolQaApproval.ProceduresOrDrawingsOrAssociatedFormatsImpactedAsResultOfChange)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.ImpactedRegulatoryCustomerCommitments,250, nameof(changeContolQaApproval.ImpactedRegulatoryCustomerCommitments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.ProposedAdditionalActionPlans,150, nameof(changeContolQaApproval.ProposedAdditionalActionPlans)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.QAReviewComments,2000, nameof(changeContolQaApproval.QAReviewComments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.Remarks,150, nameof(changeContolQaApproval.Remarks)));
                validationMessages.Append(validationHelper.NullCheckValidator(changeContolQaApproval.CreatedBy, nameof(changeContolQaApproval.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.CreatedBy,150, nameof(changeContolQaApproval.CreatedBy)));
                validationMessages.Append(validationHelper.NullCheckValidator(changeContolQaApproval.ModifiedBy, nameof(changeContolQaApproval.ModifiedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(changeContolQaApproval.ModifiedBy,150, nameof(changeContolQaApproval.ModifiedBy)));
                if (!String.IsNullOrEmpty(validationMessages.ToString()))
                {
                    return Convert.ToString(validationMessages.Remove(validationMessages.ToString().LastIndexOf(','),1));
                }
                else
                {
                    return Convert.ToString(validationMessages);
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
