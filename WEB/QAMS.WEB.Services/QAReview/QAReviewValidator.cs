//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Sheet1.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Entities;
    using VAMLIbrary.Core.Validators;
    
    
    // Comment
    public static class QAReviewValidator
    {
        
        public static string IsValidQAReview(QAReview qAReview)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.ProcedureFormat,150, nameof(qAReview.ProcedureFormat)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.ImpactCommitment,500, nameof(qAReview.ImpactCommitment)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.ReviewComments,500, nameof(qAReview.ReviewComments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.InitiativeName,200, nameof(qAReview.InitiativeName)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.Status,100, nameof(qAReview.Status)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.QaDocument,0, nameof(qAReview.QaDocument)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qAReview.ModifiedBy,100, nameof(qAReview.ModifiedBy)));
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
