//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Services
{
    using System;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    using QAMS.Admin.Data;


    // Comment
    public class UserService : IUserService
    {

        private readonly IUserData userData;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userData"></param>
        public UserService(IUserData userData)
        {
            this.userData = userData;
        }

        public ResponseContext<User> GetAllUser(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = userData.GetAllUser(requestContext);
                List<User> result = UserConverter.SetAllUser(dataset);
                return new ResponseContext<User>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public User GetUserById(System.Int32? id)
        {
            try
            {
                DataSet dataset = userData.GetUserById(id);
                User result = UserConverter.SetUser(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveUser(User user)
        {
            try
            {
                user.CreatedBy = "admin";
                user.ModifiedBy = "admin";
                user.RoleId = 2;               
                user.DepartmentId = 3;
                //user.FirstName = user.LastName = user.userName;
                user.userName = user.FirstName + user.LastName;
                //String validationMessages = UserValidator.IsValidUser(user);
                //if (validationMessages.Length <= 0)
                //{
                var result = userData.SaveUser(user);
                return result;
                //}
                //throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool UpdateUser(User user)
        {
            try
            {
                String validationMessages = UserValidator.IsValidUser(user);
                if (validationMessages.Length <= 0)
                {
                    bool result = userData.UpdateUser(user);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteUserById(System.Int32? id)
        {
            try
            {
                return userData.DeleteUserById(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteAllUser(List<int> ids)
        {
            try
            {
                return userData.DeleteAllUser(ids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public List<User> GetUserByRoleId(System.Int32? id)
        {
            try
            {
                DataSet dataset = userData.GetUserByRoleId(id);
                List<User> result = UserConverter.SetAllUser(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public List<User> GetUserByDepartmentId(System.Int32? id)
        {
            try
            {
                DataSet dataset = userData.GetUserByDepartmentId(id);
                List<User> result = UserConverter.SetAllUser(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteUserByRoleId(System.Int32? id)
        {
            try
            {
                return userData.DeleteUserByRoleId(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteUserByDepartmentId(System.Int32? id)
        {
            try
            {
                return userData.DeleteUserByDepartmentId(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
