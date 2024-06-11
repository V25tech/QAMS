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
    
    
    // Comment
    public class DepartmentService : IDepartmentService
    {
        
        private readonly IDepartmentData departmentData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="departmentData"></param>
        public DepartmentService(IDepartmentData departmentData)
        {
            this.departmentData = departmentData;
        }
        
        public ResponseContext<Department> GetAllDepartment(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = departmentData.GetAllDepartment(requestContext);
                List<Department> result = DepartmentConverter.SetAllDepartment(dataset);
                return new ResponseContext<Department>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public Department GetDepartmentById(System.Int32? id)
        {
            try
            {
                DataSet dataset = departmentData.GetDepartmentById(id);
                Department result = DepartmentConverter.SetDepartment(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveDepartment(Department department)
        {
            try
            {
                department.initiatedBy = "Admin";
                department.modifiedBy = "admin";
                String validationMessages = DepartmentValidator.IsValidDepartment(department);
                if (validationMessages.Length <= 0)
                {
                    var result = departmentData.SaveDepartment(department);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateDepartment(Department department)
        {
            try
            {
                String validationMessages = DepartmentValidator.IsValidDepartment(department);
                if (validationMessages.Length <= 0)
                {
                    bool result = departmentData.UpdateDepartment(department);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteDepartmentById(System.Int32? id)
        {
            try
            {
                return departmentData.DeleteDepartmentById(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllDepartment(List<int> ids)
        {
            try
            {
                return departmentData.DeleteAllDepartment(ids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
