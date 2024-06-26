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
    using QAMS.WEB.Entities;
    using QAMS.WEB.Data;
    using QAMS.WEB.Services;
    using Moq;
    using NUnit.Framework;
    
    
    /// <summary>
    /// Comment
    /// </summary>
    public class ChangeControlHodApprovalTest
    {
        
        private Mock<IChangeControlHodApprovalData> changeControlHodApprovalData;
        
        private IChangeControlHodApprovalService changeControlHodApprovalService;
        
        [SetUp()]
        public void Setup()
        {
              changeControlHodApprovalData = new Mock<IChangeControlHodApprovalData>();
              changeControlHodApprovalService = new ChangeControlHodApprovalService(changeControlHodApprovalData.Object);
        }
        
        [Test()]
        public void GetAllChangeControlHodApproval()
        {
            List<ChangeControlHodApproval> changeControlHodApproval = new List<ChangeControlHodApproval>();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber=1;
            requestContext.PageSize=10;
            changeControlHodApprovalData.Setup(p=>p.GetAllChangeControlHodApproval(requestContext)).Returns(MockChangeControlHodApprovalData());
            var result = changeControlHodApprovalService.GetAllChangeControlHodApproval(requestContext);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void GetChangeControlHodApprovalByChangeControlHodApprovalId()
        {
            int changeControlHodApprovalId = 0;
            changeControlHodApprovalData.Setup(p=>p.GetChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId)).Returns(MockChangeControlHodApprovalData());
            var result = changeControlHodApprovalService.GetChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void SaveChangeControlHodApproval()
        {
            ChangeControlHodApproval changeControlHodApproval = ChangeControlHodApprovalViewModel();
            System.Boolean changeControlHodApprovalId = false;
            changeControlHodApprovalData.Setup(p=>p.SaveChangeControlHodApproval(changeControlHodApproval)).Returns(changeControlHodApprovalId);
            var result = changeControlHodApprovalService.SaveChangeControlHodApproval(changeControlHodApproval);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void UpdateChangeControlHodApproval()
        {
            ChangeControlHodApproval changeControlHodApproval = ChangeControlHodApprovalViewModel();
            bool changeControlHodApprovalId = false;
            changeControlHodApprovalData.Setup(p=>p.UpdateChangeControlHodApproval(changeControlHodApproval)).Returns(changeControlHodApprovalId);
            var result = changeControlHodApprovalService.UpdateChangeControlHodApproval(changeControlHodApproval);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void DeleteChangeControlHodApprovalByChangeControlHodApprovalId()
        {
            int changeControlHodApprovalId = 0;
            bool result = false;
            changeControlHodApprovalData.Setup(p=>p.DeleteChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId)).Returns(result);
            var changeControlHodApproval = changeControlHodApprovalService.DeleteChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
            Assert.IsNotNull(changeControlHodApproval);
        }
        
        public DataSet MockChangeControlHodApprovalData()
        {
            DataSet dataset = new DataSet();
            DataTable dataTable = new DataTable();
            dataset.Tables.Add(dataTable);
            return dataset;
        }
        
        public ChangeControlHodApproval ChangeControlHodApprovalViewModel()
        {
            try
            {
                ChangeControlHodApproval changeControlHodApproval = new ChangeControlHodApproval();
                return changeControlHodApproval;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
