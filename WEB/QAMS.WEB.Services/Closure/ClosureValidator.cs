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
    public static class ClosureValidator
    {
        
        public static string IsValidClosure(Closure closure)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.InitiativeName,200, nameof(closure.InitiativeName)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.ImplementEffChanges,500, nameof(closure.ImplementEffChanges)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.Status,100, nameof(closure.Status)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.Decision,200, nameof(closure.Decision)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.Remarks,500, nameof(closure.Remarks)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.ActionPlanReviewComments,500, nameof(closure.ActionPlanReviewComments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.CDocument,0, nameof(closure.CDocument)));
                validationMessages.Append(validationHelper.LengthCheckValidator(closure.ModifiedBy,100, nameof(closure.ModifiedBy)));
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
