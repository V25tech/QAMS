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
    public class ProductService : IProductService
    {
        
        private readonly IProductData productData;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="productData"></param>
        public ProductService(IProductData productData)
        {
            this.productData = productData;
        }
        
        public ResponseContext<Product> GetAllProduct(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = productData.GetAllProduct(requestContext);
                List<Product> result = ProductConverter.SetAllProduct(dataset);
                return new ResponseContext<Product>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public Product GetProductById(System.Int32? id)
        {
            try
            {
                DataSet dataset = productData.GetProductById(id);
                Product result = ProductConverter.SetProduct(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveProduct(Product product)
        {
            product.createdBy = "admin";
            product.modifiedBy = "admin";
            product.code = "admin";
            try
            {
                String validationMessages = ProductValidator.IsValidProduct(product);
                if (validationMessages.Length <= 0)
                {
                    var result = productData.SaveProduct(product);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateProduct(Product product)
        {
            try
            {
                String validationMessages = ProductValidator.IsValidProduct(product);
                if (validationMessages.Length <= 0)
                {
                    bool result = productData.UpdateProduct(product);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteProductById(System.Int32? id)
        {
            try
            {
                return productData.DeleteProductById(id);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllProduct(List<int> ids)
        {
            try
            {
                return productData.DeleteAllProduct(ids);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
