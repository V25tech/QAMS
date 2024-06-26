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
    public class UserTest
    {
        
        private Mock<IUserData> userData;
        
        private IUserService userService;
        
        [SetUp()]
        public void Setup()
        {
              userData = new Mock<IUserData>();
              userService = new UserService(userData.Object);
        }
        
        [Test()]
        public void GetAllUser()
        {
            List<User> user = new List<User>();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber=1;
            requestContext.PageSize=10;
            userData.Setup(p=>p.GetAllUser(requestContext)).Returns(MockUserData());
            var result = userService.GetAllUser(requestContext);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void GetUserById()
        {
            int id = 0;
            userData.Setup(p=>p.GetUserById(id)).Returns(MockUserData());
            var result = userService.GetUserById(id);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void SaveUser()
        {
            User user = UserViewModel();
            System.Boolean id = false;
            userData.Setup(p=>p.SaveUser(user)).Returns(id);
            var result = userService.SaveUser(user);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void UpdateUser()
        {
            User user = UserViewModel();
            bool id = false;
            userData.Setup(p=>p.UpdateUser(user)).Returns(id);
            var result = userService.UpdateUser(user);
            Assert.IsNotNull(result);
        }
        
        [Test()]
        public void DeleteUserById()
        {
            int id = 0;
            bool result = false;
            userData.Setup(p=>p.DeleteUserById(id)).Returns(result);
            var user = userService.DeleteUserById(id);
            Assert.IsNotNull(user);
        }
        
        public DataSet MockUserData()
        {
            DataSet dataset = new DataSet();
            DataTable dataTable = new DataTable();
            dataset.Tables.Add(dataTable);
            return dataset;
        }
        
        public User UserViewModel()
        {
            try
            {
                User user = new User();
                return user;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
