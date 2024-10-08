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
    public class QAReviewService : IQAReviewService
    {
        
        private readonly IQAReviewData qAReviewData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="qAReviewData"></param>
        public QAReviewService(IQAReviewData qAReviewData)
        {
            this.qAReviewData = qAReviewData;
        }
        
        public ResponseContext<QAReview> GetAllQAReview(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = qAReviewData.GetAllQAReview(requestContext);
                List<QAReview> result = QAReviewConverter.SetAllQAReview(dataset);
                return new ResponseContext<QAReview>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public QAReview GetQAReviewByQAId(System.Int32? qAId)
        {
            try
            {
                DataSet dataset = qAReviewData.GetQAReviewByQAId(qAId);
                QAReview result = QAReviewConverter.SetQAReview(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public QAReview GetQAReviewByInitId(System.Int32? initId)
        {
            try
            {
                DataSet dataset = qAReviewData.GetQAReviewByInitId(initId);
                QAReview result = QAReviewConverter.SetQAReview(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveQAReview(QAReview qAReview)
        {
            try
            {
                String validationMessages = QAReviewValidator.IsValidQAReview(qAReview);
                if (validationMessages.Length <= 0)
                {
                    var result = qAReviewData.SaveQAReview(qAReview);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateQAReview(QAReview qAReview)
        {
            try
            {
                String validationMessages = QAReviewValidator.IsValidQAReview(qAReview);
                if (validationMessages.Length <= 0)
                {
                    bool result = qAReviewData.UpdateQAReview(qAReview);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteQAReviewByQAId(System.Int32? qAId)
        {
            try
            {
                return qAReviewData.DeleteQAReviewByQAId(qAId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllQAReview(List<int> qAIds)
        {
            try
            {
                return qAReviewData.DeleteAllQAReview(qAIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
