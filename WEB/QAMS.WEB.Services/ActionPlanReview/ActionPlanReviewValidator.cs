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
    public static class ActionPlanReviewValidator
    {
        
        public static string IsValidActionPlanReview(ActionPlanReview actionPlanReview)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.InitiativeName,200, nameof(actionPlanReview.InitiativeName)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.Comments,500, nameof(actionPlanReview.Comments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.Status,100, nameof(actionPlanReview.Status)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.Remarks,500, nameof(actionPlanReview.Remarks)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.ActionPlanReviewComments,500, nameof(actionPlanReview.ActionPlanReviewComments)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.APDocument,0, nameof(actionPlanReview.APDocument)));
                validationMessages.Append(validationHelper.LengthCheckValidator(actionPlanReview.ModifiedBy,100, nameof(actionPlanReview.ModifiedBy)));
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
