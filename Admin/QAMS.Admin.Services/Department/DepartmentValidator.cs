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
    public static class DepartmentValidator
    {
        
        public static string IsValidDepartment(Department department)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.NullCheckValidator(department.Name, nameof(department.Name)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.Name,150, nameof(department.Name)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.Code, nameof(department.Code)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.Code,150, nameof(department.Code)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.CreatedBy, nameof(department.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.CreatedBy,150, nameof(department.CreatedBy)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.ModifiedBy, nameof(department.ModifiedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.ModifiedBy,150, nameof(department.ModifiedBy)));
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
