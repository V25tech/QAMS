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
    using Newtonsoft.Json;
    using QAMS.Entities;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Common.Entities;
    using QAMS.WEB.Services;


    // Comment
    public static class CustomerNotificationConverter
    {
        
        public static List<CustomerNotification> SetAllCustomerNotification(DataSet dataset)
        {
            try
            {
                List<CustomerNotification> result = new List<CustomerNotification>();
                CustomerNotification customerNotificationData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        customerNotificationData = new CustomerNotification();
                        customerNotificationData.InitiativeId = DatatypeConverter.SetIntValue(row[CustomerNotificationConstants.InitiativeId.TrimAt()]);
                        customerNotificationData.InitiativeName = Convert.ToString(row[CustomerNotificationConstants.InitiativeName.TrimAt()]);
                        customerNotificationData.IsSave = DatatypeConverter.SetBoolValue(row[CustomerNotificationConstants.IsSave.TrimAt()]);
                        customerNotificationData.Comments = Convert.ToString(row[CustomerNotificationConstants.Comments.TrimAt()]);
                        customerNotificationData.Status = Convert.ToString(row[CustomerNotificationConstants.Status.TrimAt()]);
                        customerNotificationData.CreatedBy = DatatypeConverter.SetIntValue(row[CustomerNotificationConstants.CreatedBy.TrimAt()]);
                        customerNotificationData.UpdatedBy = DatatypeConverter.SetIntValue(row[CustomerNotificationConstants.UpdatedBy.TrimAt()]);
                        customerNotificationData.CreatedDate = DatatypeConverter.SetDateTime(row[CustomerNotificationConstants.CreatedDate.TrimAt()]);
                        customerNotificationData.UpdatedDate = DatatypeConverter.SetDateTime(row[CustomerNotificationConstants.UpdatedDate.TrimAt()]);
                        customerNotificationData.Plant = DatatypeConverter.SetIntValue(row[CustomerNotificationConstants.Plant.TrimAt()]);
                        customerNotificationData.CNId = DatatypeConverter.SetIntValue(row[CustomerNotificationConstants.CNId.TrimAt()]);
                        customerNotificationData.IsProposedChange = DatatypeConverter.SetBoolValue(row[CustomerNotificationConstants.IsProposedChange.TrimAt()]);
                        customerNotificationData.Remarks = Convert.ToString(row[CustomerNotificationConstants.Remarks.TrimAt()]);
                        customerNotificationData.CNDocument = Convert.ToString(row[CustomerNotificationConstants.CNDocument.TrimAt()]);
                        customerNotificationData.ModifiedBy = Convert.ToString(row[CustomerNotificationConstants.ModifiedBy.TrimAt()]);
                        customerNotificationData.ModifiedDate = DatatypeConverter.SetDateTime(row[CustomerNotificationConstants.ModifiedDate.TrimAt()]);
                        result.Add(customerNotificationData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static CustomerNotification SetCustomerNotification(DataSet dataset)
        {
            var result = SetAllCustomerNotification(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
