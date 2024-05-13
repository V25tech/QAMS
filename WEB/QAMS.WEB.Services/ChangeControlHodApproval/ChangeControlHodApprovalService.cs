//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;
    using QAMS.WEB.Data;
    
    
    // Comment
    public class ChangeControlHodApprovalService : IChangeControlHodApprovalService
    {
        
        private readonly IChangeControlHodApprovalData changeControlHodApprovalData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="changeControlHodApprovalData"></param>
        public ChangeControlHodApprovalService(IChangeControlHodApprovalData changeControlHodApprovalData)
        {
            this.changeControlHodApprovalData = changeControlHodApprovalData;
        }
        
        public ResponseContext<ChangeControlHodApproval> GetAllChangeControlHodApproval(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = changeControlHodApprovalData.GetAllChangeControlHodApproval(requestContext);
                List<ChangeControlHodApproval> result = ChangeControlHodApprovalConverter.SetAllChangeControlHodApproval(dataset);
                return new ResponseContext<ChangeControlHodApproval>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public ChangeControlHodApproval GetChangeControlHodApprovalByChangeControlHodApprovalId(System.Int32? changeControlHodApprovalId)
        {
            try
            {
                DataSet dataset = changeControlHodApprovalData.GetChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
                ChangeControlHodApproval result = ChangeControlHodApprovalConverter.SetChangeControlHodApproval(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveChangeControlHodApproval(ChangeControlHodApproval changeControlHodApproval)
        {
            try
            {
                String validationMessages = ChangeControlHodApprovalValidator.IsValidChangeControlHodApproval(changeControlHodApproval);
                if (validationMessages.Length <= 0)
                {
                    var result = changeControlHodApprovalData.SaveChangeControlHodApproval(changeControlHodApproval);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateChangeControlHodApproval(ChangeControlHodApproval changeControlHodApproval)
        {
            try
            {
                String validationMessages = ChangeControlHodApprovalValidator.IsValidChangeControlHodApproval(changeControlHodApproval);
                if (validationMessages.Length <= 0)
                {
                    bool result = changeControlHodApprovalData.UpdateChangeControlHodApproval(changeControlHodApproval);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteChangeControlHodApprovalByChangeControlHodApprovalId(System.Int32? changeControlHodApprovalId)
        {
            try
            {
                return changeControlHodApprovalData.DeleteChangeControlHodApprovalByChangeControlHodApprovalId(changeControlHodApprovalId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllChangeControlHodApproval(List<int> changeControlHodApprovalIds)
        {
            try
            {
                return changeControlHodApprovalData.DeleteAllChangeControlHodApproval(changeControlHodApprovalIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public List<ChangeControlHodApproval> GetChangeControlHodApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            try
            {
                DataSet dataset = changeControlHodApprovalData.GetChangeControlHodApprovalByChangeControlRegistrationId(changeControlId);
                List<ChangeControlHodApproval> result = ChangeControlHodApprovalConverter.SetAllChangeControlHodApproval(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteChangeControlHodApprovalByChangeControlRegistrationId(System.Int32? changeControlId)
        {
            try
            {
                return changeControlHodApprovalData.DeleteChangeControlHodApprovalByChangeControlRegistrationId(changeControlId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
