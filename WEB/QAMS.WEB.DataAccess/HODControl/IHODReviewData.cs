using QAMS.Common.Entities;
using QAMS.WEB.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAMS.DataAccess.HODControl
{
    public interface IHODReviewData
    {
       DataSet GetAllHODReview(RequestContext requestContext);
        DataSet GetHODReviewByInitId(int p_InitId);
        bool SaveHODReview(HODReview hodReview);
        bool UpdateHODReview(HODReview hodReview);

    }
}
