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
    public static class QADecisionValidator
    {
        
        public static string IsValidQADecision(QADecision qADecision)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.InitiativeName,200, nameof(qADecision.InitiativeName)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.Comments,500, nameof(qADecision.Comments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.Status,100, nameof(qADecision.Status)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.Remarks,500, nameof(qADecision.Remarks)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.CNDocument,0, nameof(qADecision.CNDocument)));
                validationMessages.Append(validationHelper.LengthCheckValidator(qADecision.ModifiedBy,100, nameof(qADecision.ModifiedBy)));
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
