//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Admin.Entities
{
    using System;
    using System.Collections.Generic;
   // using PolicySummary.Common.Entities;
    
    
    // Comment
    public class NewDocument
    {
        
        private System.Int32? ndField;
        
        private string titleField;
        
        private string descriptionField;
        
        private string uploadfileField;
        
        private string createdbyField;
        
        private DateTime? createddateField;
        
        private string modifiedbyField;

        private string CategoryField;
        
        private DateTime? modifieddateField;

        private int catIdField;

        private int changeControlIdField;

        public int ParentControlId
        {
            get; set;
        }

        public System.Int32? nd
        {
            get; set;
        }
        
        public string title
        {
            get; set;
        }
        
        public string description
        {
            get; set;
        }
        
        public string uploadfile
        {
            get; set;
        }
        
        public string CreatedBy
        {
            get; set;
        }
        
        public DateTime? CreatedDate
        {
            get; set;
        }
        
        public string ModifiedBy
        {
            get; set;
        }
        
        public DateTime? ModifiedDate
        {
            get; set;
        }

        //public string Category
        //{
        //    get; set;
        //}

        //public int CatId
        //{
        //    get; set;
        //}
    }
}
