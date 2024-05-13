namespace QAMS.Sheet1.Services
{
    using System;
    using System.Text;
    using VAMLIbrary.Core.Validators;
    using QAMS.Admin.Entities;


    // Comment
    public static class worktransferregistrationoinitiationValidator
    {
        
        public static string IsValidworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.NullCheckValidator(worktransferregistrationoinitiation.worktransferdescription, nameof(worktransferregistrationoinitiation.worktransferdescription)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.worktransferdescription,150, nameof(worktransferregistrationoinitiation.worktransferdescription)));
                validationMessages.Append(validationHelper.NullCheckValidator(worktransferregistrationoinitiation.worktransferfrom, nameof(worktransferregistrationoinitiation.worktransferfrom)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.worktransferfrom,150, nameof(worktransferregistrationoinitiation.worktransferfrom)));
                validationMessages.Append(validationHelper.NullCheckValidator(worktransferregistrationoinitiation.tasklist, nameof(worktransferregistrationoinitiation.tasklist)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.tasklist,150, nameof(worktransferregistrationoinitiation.tasklist)));
                validationMessages.Append(validationHelper.NullCheckValidator(worktransferregistrationoinitiation.worktransferto, nameof(worktransferregistrationoinitiation.worktransferto)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.worktransferto,150, nameof(worktransferregistrationoinitiation.worktransferto)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.CreatedBy,100, nameof(worktransferregistrationoinitiation.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(worktransferregistrationoinitiation.ModifiedBy,100, nameof(worktransferregistrationoinitiation.ModifiedBy)));
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
