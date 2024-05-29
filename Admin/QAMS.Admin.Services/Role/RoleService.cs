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
    using QAMS.Admin.Data;
    using Newtonsoft.Json;


    // Comment
    public class RoleService : IRoleService
    {

        private readonly IRoleData roleData;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="roleData"></param>
        public RoleService(IRoleData roleData)
        {
            this.roleData = roleData;
        }

        public ResponseContext<Role> GetAllRole(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = roleData.GetAllRole(requestContext);
                List<Role> result = RoleConverter.SetAllRole(dataset);
                return new ResponseContext<Role>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public Role GetRoleById(System.Int32? id)
        {
            try
            {
                DataSet dataset = roleData.GetRoleById(id);
                Role result = RoleConverter.SetRole(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveRole(Role role)
        {
            try
            {
                String validationMessages = RoleValidator.IsValidRole(role);
                string roleMetadata = JsonConvert.SerializeObject(role, Formatting.Indented);
                role.roleMetadata = roleMetadata;
                if (validationMessages.Length <= 0)
                {
                    var result = roleData.SaveRole(role);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool UpdateRole(Role role)
        {
            try
            {
                String validationMessages = RoleValidator.IsValidRole(role);
                if (validationMessages.Length <= 0)
                {
                    bool result = roleData.UpdateRole(role);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteRoleById(System.Int32? id)
        {
            try
            {
                return roleData.DeleteRoleById(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool DeleteAllRole(List<int> ids)
        {
            try
            {
                return roleData.DeleteAllRole(ids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
