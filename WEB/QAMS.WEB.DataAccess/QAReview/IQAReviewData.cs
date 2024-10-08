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
    public interface IQAReviewData
    {
        
        DataSet GetAllQAReview(RequestContext requestContext);
        
        DataSet GetQAReviewByQAId(System.Int32? qAId);

        DataSet GetQAReviewByInitId(System.Int32? initId);

        bool SaveQAReview(QAReview qAReview);
        
        bool UpdateQAReview(QAReview qAReview);
        
        bool DeleteQAReviewByQAId(System.Int32? qAId);
        
        bool DeleteAllQAReview(List<int> qAIds);
    }
}
