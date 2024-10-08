//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Sheet1.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.Entities;
    using QAMS.Sheet1.Data;
    using QAMS.WEB.Services;


    // Comment
    public class CustomerNotificationService : ICustomerNotificationService
    {
        
        private readonly ICustomerNotificationData customerNotificationData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="customerNotificationData"></param>
        public CustomerNotificationService(ICustomerNotificationData customerNotificationData)
        {
            this.customerNotificationData = customerNotificationData;
        }
        
        public ResponseContext<CustomerNotification> GetAllCustomerNotification(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = customerNotificationData.GetAllCustomerNotification(requestContext);
                List<CustomerNotification> result = CustomerNotificationConverter.SetAllCustomerNotification(dataset);
                return new ResponseContext<CustomerNotification>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public CustomerNotification GetCustomerNotificationByCNId(System.Int32? cNId)
        {
            try
            {
                DataSet dataset = customerNotificationData.GetCustomerNotificationByCNId(cNId);
                CustomerNotification result = CustomerNotificationConverter.SetCustomerNotification(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        public CustomerNotification GetCustomerNotificationByInitId(System.Int32? initId)
        {
            try
            {
                DataSet dataset = customerNotificationData.GetCustomerNotificationByInitId(initId);
                CustomerNotification result = CustomerNotificationConverter.SetCustomerNotification(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        public bool SaveCustomerNotification(CustomerNotification customerNotification)
        {
            try
            {
                String validationMessages = CustomerNotificationValidator.IsValidCustomerNotification(customerNotification);
                customerNotification.CreatedDate =  DateTime.Now;
                customerNotification.UpdatedDate = DateTime.Now;
                if (validationMessages.Length <= 0)
                {
                    var result = customerNotificationData.SaveCustomerNotification(customerNotification);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateCustomerNotification(CustomerNotification customerNotification)
        {
            try
            {
                String validationMessages = CustomerNotificationValidator.IsValidCustomerNotification(customerNotification);
                if (validationMessages.Length <= 0)
                {
                    bool result = customerNotificationData.UpdateCustomerNotification(customerNotification);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteCustomerNotificationByCNId(System.Int32? cNId)
        {
            try
            {
                return customerNotificationData.DeleteCustomerNotificationByCNId(cNId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllCustomerNotification(List<int> cNIds)
        {
            try
            {
                return customerNotificationData.DeleteAllCustomerNotification(cNIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
