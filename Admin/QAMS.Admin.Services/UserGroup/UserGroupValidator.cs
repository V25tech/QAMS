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
    public static class UserGroupValidator
    {
        
        public static string IsValidUserGroup(UserGroup userGroup)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.NullCheckValidator(userGroup.name, nameof(userGroup.name)));
                validationMessages.Append(validationHelper.LengthCheckValidator(userGroup.name,150, nameof(userGroup.name)));
                validationMessages.Append(validationHelper.NullCheckValidator(userGroup.code, nameof(userGroup.code)));
                validationMessages.Append(validationHelper.LengthCheckValidator(userGroup.code,150, nameof(userGroup.code)));
                validationMessages.Append(validationHelper.NullCheckValidator(userGroup.roles, nameof(userGroup.roles)));
                validationMessages.Append(validationHelper.LengthCheckValidator(userGroup.roles,150, nameof(userGroup.roles)));
                validationMessages.Append(validationHelper.NullCheckValidator(userGroup.createdBy, nameof(userGroup.createdBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(userGroup.createdBy,150, nameof(userGroup.createdBy)));
                validationMessages.Append(validationHelper.NullCheckValidator(userGroup.modifiedBy, nameof(userGroup.modifiedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(userGroup.modifiedBy,150, nameof(userGroup.modifiedBy)));
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
