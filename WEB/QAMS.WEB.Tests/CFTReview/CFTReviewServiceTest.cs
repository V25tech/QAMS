//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Tests
{
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.Entities;
    using QAMS.Sheet1.Data;
    using QAMS.Sheet1.Services;
    using Moq;
    using NUnit.Framework;
    
    
    /// <summary>
    /// Comment
    /// </summary>
    public class CFTReviewTest
    {
        
        private Mock<ICFTReviewData> cFTReviewData;
        
        private ICFTReviewService cFTReviewService;
        
        [SetUp()]
        public void Setup()
        {
              cFTReviewData = new Mock<ICFTReviewData>();
              cFTReviewService = new CFTReviewService(cFTReviewData.Object);
        }
        
        [Test()]
        public void GetAllCFTReview()
        {
            List<CFTReview> cFTReview = new List<CFTReview>();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber=1;
            requestContext.PageSize=10;
            cFTReviewData.Setup(p=>p.GetAllCFTReview(requestContext)).Returns(MockCFTReviewData());
            var result = cFTReviewService.GetAllCFTReview(requestContext);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void GetCFTReviewByCFTId()
        {
            int cFTId = 0;
            cFTReviewData.Setup(p=>p.GetCFTReviewByCFTId(cFTId)).Returns(MockCFTReviewData());
            var result = cFTReviewService.GetCFTReviewByCFTId(cFTId);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void SaveCFTReview()
        {
            CFTReview cFTReview = CFTReviewViewModel();
            System.Boolean cFTId = false;
            cFTReviewData.Setup(p=>p.SaveCFTReview(cFTReview)).Returns(cFTId);
            var result = cFTReviewService.SaveCFTReview(cFTReview);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void UpdateCFTReview()
        {
            CFTReview cFTReview = CFTReviewViewModel();
            bool cFTId = false;
            cFTReviewData.Setup(p=>p.UpdateCFTReview(cFTReview)).Returns(cFTId);
            var result = cFTReviewService.UpdateCFTReview(cFTReview);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void DeleteCFTReviewByCFTId()
        {
            int cFTId = 0;
            bool result = false;
            cFTReviewData.Setup(p=>p.DeleteCFTReviewByCFTId(cFTId)).Returns(result);
            var cFTReview = cFTReviewService.DeleteCFTReviewByCFTId(cFTId);
            Assert.IsNotNull(cFTReview);
        }
        
        public DataSet MockCFTReviewData()
        {
            DataSet dataset = new DataSet();
            DataTable dataTable = new DataTable();
            dataset.Tables.Add(dataTable);
            return dataset;
        }
        
        public CFTReview CFTReviewViewModel()
        {
            try
            {
                CFTReview cFTReview = new CFTReview();
                return cFTReview;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}