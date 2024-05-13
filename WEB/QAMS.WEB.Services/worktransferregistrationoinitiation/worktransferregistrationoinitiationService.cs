
namespace QAMS.Sheet1.Services
{
    using System;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Admin.Services;
    using QAMS.WEB.Data;
    using QAMS.Common.Entities;
    using QAMS.Admin.Entities;
    using QAMS.WEB.Services;


    // Comment
    public class WorktransferregistrationoinitiationService : IWorktransferregistrationoinitiationService
    {
        
        private readonly IworktransferregistrationoinitiationData worktransferregistrationoinitiationData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="worktransferregistrationoinitiationData"></param>
        public WorktransferregistrationoinitiationService(IworktransferregistrationoinitiationData worktransferregistrationoinitiationData)
        {
            this.worktransferregistrationoinitiationData = worktransferregistrationoinitiationData;
        }
        
        public ResponseContext<worktransferregistrationoinitiation> GetAllworktransferregistrationoinitiation(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = worktransferregistrationoinitiationData.GetAllworktransferregistrationoinitiation(requestContext);
                List<worktransferregistrationoinitiation> result = WorktransferregistrationoinitiationConverter.SetAllworktransferregistrationoinitiation(dataset);
                return new ResponseContext<worktransferregistrationoinitiation>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public worktransferregistrationoinitiation GetworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            try
            {
                DataSet dataset = worktransferregistrationoinitiationData.GetworktransferregistrationoinitiationBywtriid(wtriid);
                worktransferregistrationoinitiation result = WorktransferregistrationoinitiationConverter.Setworktransferregistrationoinitiation(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            try
            {
                String validationMessages = worktransferregistrationoinitiationValidator.IsValidworktransferregistrationoinitiation(worktransferregistrationoinitiation);
                if (validationMessages.Length <= 0)
                {
                    var result = worktransferregistrationoinitiationData.Saveworktransferregistrationoinitiation(worktransferregistrationoinitiation);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation worktransferregistrationoinitiation)
        {
            try
            {
                String validationMessages = worktransferregistrationoinitiationValidator.IsValidworktransferregistrationoinitiation(worktransferregistrationoinitiation);
                if (validationMessages.Length <= 0)
                {
                    bool result = worktransferregistrationoinitiationData.Updateworktransferregistrationoinitiation(worktransferregistrationoinitiation);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteworktransferregistrationoinitiationBywtriid(System.Int32? wtriid)
        {
            try
            {
                return worktransferregistrationoinitiationData.DeleteworktransferregistrationoinitiationBywtriid(wtriid);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllworktransferregistrationoinitiation(List<int> wtriids)
        {
            try
            {
                return worktransferregistrationoinitiationData.DeleteAllworktransferregistrationoinitiation(wtriids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
