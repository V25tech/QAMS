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
    using QAMS.Admin.Entities;
    using QAMS.Admin.Data;
    using QAMS.Admin.Services;
    using Moq;
    using NUnit.Framework;
    
    
    /// <summary>
    /// Comment
    /// </summary>
    public class ChangeContolActionPlanTest
    {
        
        private Mock<IChangeContolActionPlanData> changeContolActionPlanData;
        
        private IChangeContolActionPlanService changeContolActionPlanService;
        
        [SetUp()]
        public void Setup()
        {
              changeContolActionPlanData = new Mock<IChangeContolActionPlanData>();
              changeContolActionPlanService = new ChangeContolActionPlanService(changeContolActionPlanData.Object);
        }
        
        [Test()]
        public void GetAllChangeContolActionPlan()
        {
            List<ChangeContolActionPlan> changeContolActionPlan = new List<ChangeContolActionPlan>();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber=1;
            requestContext.PageSize=10;
            changeContolActionPlanData.Setup(p=>p.GetAllChangeContolActionPlan(requestContext)).Returns(MockChangeContolActionPlanData());
            var result = changeContolActionPlanService.GetAllChangeContolActionPlan(requestContext);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void GetChangeContolActionPlanByChangeContolActionPlanId()
        {
            int changeContolActionPlanId = 0;
            changeContolActionPlanData.Setup(p=>p.GetChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId)).Returns(MockChangeContolActionPlanData());
            var result = changeContolActionPlanService.GetChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void SaveChangeContolActionPlan()
        {
            ChangeContolActionPlan changeContolActionPlan = ChangeContolActionPlanViewModel();
            System.Boolean changeContolActionPlanId = false;
            changeContolActionPlanData.Setup(p=>p.SaveChangeContolActionPlan(changeContolActionPlan)).Returns(changeContolActionPlanId);
            var result = changeContolActionPlanService.SaveChangeContolActionPlan(changeContolActionPlan);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void UpdateChangeContolActionPlan()
        {
            ChangeContolActionPlan changeContolActionPlan = ChangeContolActionPlanViewModel();
            bool changeContolActionPlanId = false;
            changeContolActionPlanData.Setup(p=>p.UpdateChangeContolActionPlan(changeContolActionPlan)).Returns(changeContolActionPlanId);
            var result = changeContolActionPlanService.UpdateChangeContolActionPlan(changeContolActionPlan);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void DeleteChangeContolActionPlanByChangeContolActionPlanId()
        {
            int changeContolActionPlanId = 0;
            bool result = false;
            changeContolActionPlanData.Setup(p=>p.DeleteChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId)).Returns(result);
            var changeContolActionPlan = changeContolActionPlanService.DeleteChangeContolActionPlanByChangeContolActionPlanId(changeContolActionPlanId);
            Assert.IsNotNull(changeContolActionPlan);
        }
        
        public DataSet MockChangeContolActionPlanData()
        {
            DataSet dataset = new DataSet();
            DataTable dataTable = new DataTable();
            dataset.Tables.Add(dataTable);
            return dataset;
        }
        
        public ChangeContolActionPlan ChangeContolActionPlanViewModel()
        {
            try
            {
                ChangeContolActionPlan changeContolActionPlan = new ChangeContolActionPlan();
                return changeContolActionPlan;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
