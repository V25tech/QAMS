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
    using QAMS.Admin.Data;
    
    
    // Comment
    public class MarketService : IMarketService
    {
        
        private readonly IMarketData marketData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="marketData"></param>
        public MarketService(IMarketData marketData)
        {
            this.marketData = marketData;
        }
        
        public ResponseContext<Market> GetAllMarket(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = marketData.GetAllMarket(requestContext);
                List<Market> result = MarketConverter.SetAllMarket(dataset);
                return new ResponseContext<Market>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public Market GetMarketById(System.Int32? id)
        {
            try
            {
                DataSet dataset = marketData.GetMarketById(id);
                Market result = MarketConverter.SetMarket(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveMarket(Market market)
        {
            try
            {
                market.createdBy = "admin";
                market.ModifiedBy="admin";
                String validationMessages = MarketValidator.IsValidMarket(market);
                if (validationMessages.Length <= 0)
                {
                    var result = marketData.SaveMarket(market);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateMarket(Market market)
        {
            try
            {
                String validationMessages = MarketValidator.IsValidMarket(market);
                if (validationMessages.Length <= 0)
                {
                    bool result = marketData.UpdateMarket(market);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteMarketById(System.Int32? id)
        {
            try
            {
                return marketData.DeleteMarketById(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllMarket(List<int> ids)
        {
            try
            {
                return marketData.DeleteAllMarket(ids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
