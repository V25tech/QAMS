using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using VAMLIbrary.Core.Common;

namespace QAMS.WEB.Services
{
    public interface IMasterDataService
    {
        
        List<ZipCodeInformation> GetZipcodes(string fields, string Zipcode);

    }
}
