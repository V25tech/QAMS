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
    public interface IHODReviewService
    {
        
        ResponseContext<HODReview> GetAllHODReview(RequestContext requestContext);
        
        HODReview GetHODReviewByHodId(System.Int32? hodId);
        
        bool SaveHODReview(HODReview hODReview);
        
        bool UpdateHODReview(HODReview hODReview);
        
        bool DeleteHODReviewByHodId(System.Int32? hodId);
        
        bool DeleteAllHODReview(List<int> hodIds);
    }
}
