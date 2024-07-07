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
    public interface IQADecisionService
    {
        
        ResponseContext<QADecision> GetAllQADecision(RequestContext requestContext);
        
        QADecision GetQADecisionByQADId(System.Int32? qADId);
        
        bool SaveQADecision(QADecision qADecision);
        
        bool UpdateQADecision(QADecision qADecision);
        
        bool DeleteQADecisionByQADId(System.Int32? qADId);
        
        bool DeleteAllQADecision(List<int> qADIds);
    }
}