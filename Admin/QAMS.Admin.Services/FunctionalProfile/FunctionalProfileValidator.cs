//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Admin.Entities;
    using VAMLIbrary.Core.Validators;
    
    
    // Comment
    public static class FunctionalProfileValidator
    {
        
        public static string IsValidFunctionalProfile(FunctionalProfile functionalProfile)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(functionalProfile.Remark,150, nameof(functionalProfile.Remark)));
                validationMessages.Append(validationHelper.NullCheckValidator(functionalProfile.CreatedBy, nameof(functionalProfile.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(functionalProfile.CreatedBy,150, nameof(functionalProfile.CreatedBy)));
                validationMessages.Append(validationHelper.NullCheckValidator(functionalProfile.ModifiedBy, nameof(functionalProfile.ModifiedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(functionalProfile.ModifiedBy,150, nameof(functionalProfile.ModifiedBy)));
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
