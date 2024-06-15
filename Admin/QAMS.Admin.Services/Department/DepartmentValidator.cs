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
                validationMessages.Append(validationHelper.NullCheckValidator(department.departmentName, nameof(department.departmentName)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.departmentName, 150, nameof(department.departmentName)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.departmentCode, nameof(department.departmentCode)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.departmentCode, 150, nameof(department.departmentCode)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.initiatedBy, nameof(department.initiatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.initiatedBy, 150, nameof(department.initiatedBy)));
                validationMessages.Append(validationHelper.NullCheckValidator(department.modifiedBy, nameof(department.modifiedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(department.modifiedBy, 150, nameof(department.modifiedBy)));
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
