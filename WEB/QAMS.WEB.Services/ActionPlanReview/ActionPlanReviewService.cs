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
    using QAMS.Common.Entities;
    using QAMS.Entities;
    using QAMS.Sheet1.Data;
    using QAMS.WEB.Services;


    // Comment
    public class ActionPlanReviewService : IActionPlanReviewService
    {
        
        private readonly IActionPlanReviewData actionPlanReviewData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="actionPlanReviewData"></param>
        public ActionPlanReviewService(IActionPlanReviewData actionPlanReviewData)
        {
            this.actionPlanReviewData = actionPlanReviewData;
        }
        
        public ResponseContext<ActionPlanReview> GetAllActionPlanReview(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = actionPlanReviewData.GetAllActionPlanReview(requestContext);
                List<ActionPlanReview> result = ActionPlanReviewConverter.SetAllActionPlanReview(dataset);
                return new ResponseContext<ActionPlanReview>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public ActionPlanReview GetActionPlanReviewByAPId(System.Int32? aPId)
        {
            try
            {
                DataSet dataset = actionPlanReviewData.GetActionPlanReviewByAPId(aPId);
                ActionPlanReview result = ActionPlanReviewConverter.SetActionPlanReview(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveActionPlanReview(ActionPlanReview actionPlanReview)
        {
            try
            {
                String validationMessages = ActionPlanReviewValidator.IsValidActionPlanReview(actionPlanReview);
                if (validationMessages.Length <= 0)
                {
                    var result = actionPlanReviewData.SaveActionPlanReview(actionPlanReview);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateActionPlanReview(ActionPlanReview actionPlanReview)
        {
            try
            {
                String validationMessages = ActionPlanReviewValidator.IsValidActionPlanReview(actionPlanReview);
                if (validationMessages.Length <= 0)
                {
                    bool result = actionPlanReviewData.UpdateActionPlanReview(actionPlanReview);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteActionPlanReviewByAPId(System.Int32? aPId)
        {
            try
            {
                return actionPlanReviewData.DeleteActionPlanReviewByAPId(aPId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllActionPlanReview(List<int> aPIds)
        {
            try
            {
                return actionPlanReviewData.DeleteAllActionPlanReview(aPIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}