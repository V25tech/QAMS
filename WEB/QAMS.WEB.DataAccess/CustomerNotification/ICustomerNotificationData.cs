//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Sheet1.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.Entities;
    
    
    // Comment
    public interface ICustomerNotificationData
    {
        
        DataSet GetAllCustomerNotification(RequestContext requestContext);
        
        DataSet GetCustomerNotificationByCNId(System.Int32? cNId);
        
        bool SaveCustomerNotification(CustomerNotification customerNotification);
        
        bool UpdateCustomerNotification(CustomerNotification customerNotification);
        
        bool DeleteCustomerNotificationByCNId(System.Int32? cNId);
        
        bool DeleteAllCustomerNotification(List<int> cNIds);
    }
}
