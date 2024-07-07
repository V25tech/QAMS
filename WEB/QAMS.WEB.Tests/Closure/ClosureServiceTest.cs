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
    public class ClosureTest
    {
        
        private Mock<IClosureData> closureData;
        
        private IClosureService closureService;
        
        [SetUp()]
        public void Setup()
        {
              closureData = new Mock<IClosureData>();
              closureService = new ClosureService(closureData.Object);
        }
        
        [Test()]
        public void GetAllClosure()
        {
            List<Closure> closure = new List<Closure>();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber=1;
            requestContext.PageSize=10;
            closureData.Setup(p=>p.GetAllClosure(requestContext)).Returns(MockClosureData());
            var result = closureService.GetAllClosure(requestContext);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void GetClosureByCId()
        {
            int cId = 0;
            closureData.Setup(p=>p.GetClosureByCId(cId)).Returns(MockClosureData());
            var result = closureService.GetClosureByCId(cId);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void SaveClosure()
        {
            Closure closure = ClosureViewModel();
            System.Boolean cId = false;
            closureData.Setup(p=>p.SaveClosure(closure)).Returns(cId);
            var result = closureService.SaveClosure(closure);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void UpdateClosure()
        {
            Closure closure = ClosureViewModel();
            bool cId = false;
            closureData.Setup(p=>p.UpdateClosure(closure)).Returns(cId);
            var result = closureService.UpdateClosure(closure);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void DeleteClosureByCId()
        {
            int cId = 0;
            bool result = false;
            closureData.Setup(p=>p.DeleteClosureByCId(cId)).Returns(result);
            var closure = closureService.DeleteClosureByCId(cId);
            Assert.IsNotNull(closure);
        }
        
        public DataSet MockClosureData()
        {
            DataSet dataset = new DataSet();
            DataTable dataTable = new DataTable();
            dataset.Tables.Add(dataTable);
            return dataset;
        }
        
        public Closure ClosureViewModel()
        {
            try
            {
                Closure closure = new Closure();
                return closure;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
