using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using VAMLIbrary.Core.Common;

namespace QAMS.WEB.Data
{
    public interface IMasterDataData
    {
        List<ZipCodeInformation> GetZipCodesDataMasterData(string[] selectColumns, IEnumerable<Condition> conditions);
    }
}
