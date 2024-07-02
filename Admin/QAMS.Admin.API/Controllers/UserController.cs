//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    using QAMS.Admin.Services;


    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        
        private readonly IUserService userService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userService"></param>
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }
        
        /// <summary>
        /// This method is used to Get List of User
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost("GetAllUser")]
        public ActionResult<ResponseContext<User>> GetAllUser(RequestContext requestContext)
        {
            var result = userService.GetAllUser(requestContext);
            return result;
        }
        
        /// <summary>
        /// This method is used to Get User By Id id
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(System.Int32? id)
        {
            var result = userService.GetUserById(id);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save User
        /// </summary>
        /// <param name="user"></param>
        [HttpPost("saveuser")]
        public ActionResult<System.Boolean> SaveUser(User user)
        {
            var result = userService.SaveUser(user);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update User
        /// </summary>
        /// <param name="user"></param>
        [HttpPost("updateuser")]
        public ActionResult<System.Boolean> UpdateUser(User user)
        {
            var result = userService.UpdateUser(user);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete User By Id id
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteUserById(System.Int32? id)
        {
            var result = userService.DeleteUserById(id);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete User By Multiple ids ids
        /// </summary>
        /// <param name="ids"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllUser(List<int> ids)
        {
            var result = userService.DeleteAllUser(ids);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("getUserByRoleId/{id}")]
        public ActionResult<List<User>> GetUserByRoleId(System.Int32? id)
        {
            var result = userService.GetUserByRoleId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("getUserByDepartmentId/{id}")]
        public ActionResult<List<User>> GetUserByDepartmentId(System.Int32? id)
        {
            var result = userService.GetUserByDepartmentId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("deleteUserByRoleId/{id}")]
        public ActionResult<bool> DeleteUserByRoleId(System.Int32? id)
        {
            var result = userService.DeleteUserByRoleId(id);
            return result;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("deleteUserByDepartmentId/{id}")]
        public ActionResult<bool> DeleteUserByDepartmentId(System.Int32? id)
        {
            var result = userService.DeleteUserByDepartmentId(id);
            return result;
        }
    }
}
