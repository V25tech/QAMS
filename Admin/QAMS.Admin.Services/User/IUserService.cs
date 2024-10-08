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
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    
    
    // Comment
    public interface IUserService
    {
        
        ResponseContext<User> GetAllUser(RequestContext requestContext);
        
        User GetUserById(System.Int32? id);

        User GetUserByUserName(string p_UserName);

        User GetUserByUserName(User user);

        bool SaveUser(User user);
        
        bool UpdateUser(User user);
        
        bool DeleteUserById(System.Int32? id);
        
        bool DeleteAllUser(List<int> ids);
        
        List<User> GetUserByRoleId(System.Int32? id);
        
        List<User> GetUserByDepartmentId(System.Int32? id);
        
        bool DeleteUserByRoleId(System.Int32? id);
        
        bool DeleteUserByDepartmentId(System.Int32? id);

      //  User GetUserByUserName(User user);
    }
}
