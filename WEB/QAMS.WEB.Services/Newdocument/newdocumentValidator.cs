
namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using VAMLIbrary.Core.Validators;
    using QAMS.Admin.Entities;


    // Comment
    public static class newdocumentValidator
    {

        public static string IsValidnewdocument(NewDocument newdocument)
        {
            try
            {
                StringBuilder validationMessages = new();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.NullCheckValidator(newdocument.title, nameof(newdocument.title)));
                validationMessages.Append(validationHelper.LengthCheckValidator(newdocument.title, 150, nameof(newdocument.title)));
                validationMessages.Append(validationHelper.NullCheckValidator(newdocument.description, nameof(newdocument.description)));
                validationMessages.Append(validationHelper.LengthCheckValidator(newdocument.description, 150, nameof(newdocument.description)));
                validationMessages.Append(validationHelper.NullCheckValidator(newdocument.uploadfile, nameof(newdocument.uploadfile)));
                validationMessages.Append(validationHelper.LengthCheckValidator(newdocument.uploadfile, 150, nameof(newdocument.uploadfile)));
                validationMessages.Append(validationHelper.LengthCheckValidator(newdocument.CreatedBy, 100, nameof(newdocument.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(newdocument.ModifiedBy, 100, nameof(newdocument.ModifiedBy)));
                if (!String.IsNullOrEmpty(validationMessages.ToString()))
                {
                    return Convert.ToString(validationMessages.Remove(validationMessages.ToString().LastIndexOf(','), 1));
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
