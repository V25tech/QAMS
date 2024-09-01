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
    
    
    // Comment
    public interface ICustomerNotificationService
    {
        
        ResponseContext<CustomerNotification> GetAllCustomerNotification(RequestContext requestContext);
        
        CustomerNotification GetCustomerNotificationByCNId(System.Int32? cNId);
        CustomerNotification GetCustomerNotificationByInitId(System.Int32? initId);

        bool SaveCustomerNotification(CustomerNotification customerNotification);
        
        bool UpdateCustomerNotification(CustomerNotification customerNotification);
        
        bool DeleteCustomerNotificationByCNId(System.Int32? cNId);
        
        bool DeleteAllCustomerNotification(List<int> cNIds);
    }
}
