//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Data
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    
    
    // Comment
    public interface IMarketData
    {
        
        DataSet GetAllMarket(RequestContext requestContext);
        
        DataSet GetMarketById(System.Int32? id);
        
        bool SaveMarket(Market market);
        
        bool UpdateMarket(Market market);
        
        bool DeleteMarketById(System.Int32? id);
        
        bool DeleteAllMarket(List<int> ids);
    }
}
