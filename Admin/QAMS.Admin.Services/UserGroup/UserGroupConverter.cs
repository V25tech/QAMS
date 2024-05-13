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
    using Newtonsoft.Json;
    using QAMS.Admin.Entities;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Common.Entities;
    
    
    // Comment
    public static class UserGroupConverter
    {
        
        public static List<UserGroup> SetAllUserGroup(DataSet dataset)
        {
            try
            {
                List<UserGroup> result = new List<UserGroup>();
                UserGroup userGroupData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        userGroupData = new UserGroup();
                        userGroupData.Id = DatatypeConverter.SetIntValue(row[UserGroupConstants.Id.TrimAt()]);
                        userGroupData.Name = Convert.ToString(row[UserGroupConstants.Name.TrimAt()]);
                        userGroupData.Code = Convert.ToString(row[UserGroupConstants.Code.TrimAt()]);
                        userGroupData.Roles = Convert.ToString(row[UserGroupConstants.Roles.TrimAt()]);
                        userGroupData.Revision = DatatypeConverter.SetIntValue(row[UserGroupConstants.Revision.TrimAt()]);
                        userGroupData.CreatedBy = Convert.ToString(row[UserGroupConstants.CreatedBy.TrimAt()]);
                        userGroupData.CreatedDate = DatatypeConverter.SetDateTime(row[UserGroupConstants.CreatedDate.TrimAt()]);
                        userGroupData.ModifiedBy = Convert.ToString(row[UserGroupConstants.ModifiedBy.TrimAt()]);
                        userGroupData.ModifiedDate = DatatypeConverter.SetDateTime(row[UserGroupConstants.ModifiedDate.TrimAt()]);
                        result.Add(userGroupData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static UserGroup SetUserGroup(DataSet dataset)
        {
            var result = SetAllUserGroup(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
