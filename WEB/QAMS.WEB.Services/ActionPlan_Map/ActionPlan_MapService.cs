//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Services
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    using QAMS.WEB.Entities;
    using QAMS.WEB.Data;
    
    
    // Comment
    public class ActionPlan_MapService : IActionPlan_MapService
    {
        
        private readonly IActionPlan_MapData actionPlan_MapData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="actionPlan_MapData"></param>
        public ActionPlan_MapService(IActionPlan_MapData actionPlan_MapData)
        {
            this.actionPlan_MapData = actionPlan_MapData;
        }
        
        public ResponseContext<ActionPlan_Map> GetAllActionPlan_Map(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = actionPlan_MapData.GetAllActionPlan_Map(requestContext);
                List<ActionPlan_Map> result = ActionPlan_MapConverter.SetAllActionPlan_Map(dataset);
                return new ResponseContext<ActionPlan_Map>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public ActionPlan_Map GetActionPlan_MapByUserId(System.Int32? userId)
        {
            try
            {
                DataSet dataset = actionPlan_MapData.GetActionPlan_MapByUserId(userId);
                ActionPlan_Map result = ActionPlan_MapConverter.SetActionPlan_Map(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveActionPlan_Map(ActionPlan_Map actionPlan_Map)
        {
            try
            {
                String validationMessages = ActionPlan_MapValidator.IsValidActionPlan_Map(actionPlan_Map);
                if (validationMessages.Length <= 0)
                {
                    var result = actionPlan_MapData.SaveActionPlan_Map(actionPlan_Map);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateActionPlan_Map(ActionPlan_Map actionPlan_Map)
        {
            try
            {
                String validationMessages = ActionPlan_MapValidator.IsValidActionPlan_Map(actionPlan_Map);
                if (validationMessages.Length <= 0)
                {
                    bool result = actionPlan_MapData.UpdateActionPlan_Map(actionPlan_Map);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteActionPlan_MapByUserId(System.Int32? userId)
        {
            try
            {
                return actionPlan_MapData.DeleteActionPlan_MapByUserId(userId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllActionPlan_Map(List<int> userIds)
        {
            try
            {
                return actionPlan_MapData.DeleteAllActionPlan_Map(userIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
