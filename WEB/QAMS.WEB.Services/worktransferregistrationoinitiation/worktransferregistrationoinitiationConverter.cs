
namespace QAMS.Sheet1.Services
{
    using System;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using VAMLIbrary.Core.Extentions;
    using QAMS.Admin.Entities;
    using QAMS.WEB.Services;

    //using PolicySummary.Common.Entities;


    // Comment
    public static class WorktransferregistrationoinitiationConverter
    {
        
        public static List<worktransferregistrationoinitiation> SetAllworktransferregistrationoinitiation(DataSet dataset)
        {
            try
            {
                List<worktransferregistrationoinitiation> result = new();
                worktransferregistrationoinitiation worktransferregistrationoinitiationData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i++)
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        worktransferregistrationoinitiationData = new worktransferregistrationoinitiation
                        {
                            wtriid = DatatypeConverter.SetIntValue(row[worktransferregistrationoinitiationConstants.wtriid.TrimAt()]),
                            worktransferdescription = Convert.ToString(row[worktransferregistrationoinitiationConstants.worktransferdescription.TrimAt()]),
                            worktransferfrom = Convert.ToString(row[worktransferregistrationoinitiationConstants.worktransferfrom.TrimAt()]),
                            tasklist = Convert.ToString(row[worktransferregistrationoinitiationConstants.tasklist.TrimAt()]),
                            worktransferto = Convert.ToString(row[worktransferregistrationoinitiationConstants.worktransferto.TrimAt()]),
                            validupto = DatatypeConverter.SetDateTime(row[worktransferregistrationoinitiationConstants.validupto.TrimAt()]),
                            CreatedBy = Convert.ToString(row[worktransferregistrationoinitiationConstants.CreatedBy.TrimAt()]),
                            CreatedDate = DatatypeConverter.SetDateTime(row[worktransferregistrationoinitiationConstants.CreatedDate.TrimAt()]),
                            ModifiedBy = Convert.ToString(row[worktransferregistrationoinitiationConstants.ModifiedBy.TrimAt()]),
                            ModifiedDate = DatatypeConverter.SetDateTime(row[worktransferregistrationoinitiationConstants.ModifiedDate.TrimAt()])
                        };
                        result.Add(worktransferregistrationoinitiationData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static worktransferregistrationoinitiation Setworktransferregistrationoinitiation(DataSet dataset)
        {
            var result = SetAllworktransferregistrationoinitiation(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
