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
    public interface IQualityEventService
    {
        
        ResponseContext<QualityEvent> GetAllQualityEvent(RequestContext requestContext);
        
        QualityEvent GetQualityEventById(System.Int32? id);
        
        bool SaveQualityEvent(QualityEvent qualityEvent);
        
        bool UpdateQualityEvent(QualityEvent qualityEvent);
        
        bool DeleteQualityEventById(System.Int32? id);
        
        bool DeleteAllQualityEvent(List<int> ids);
    }
}
