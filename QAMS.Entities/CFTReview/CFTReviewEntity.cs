//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.Entities
{
    using System;
    using System.Collections.Generic;
    using QAMS.Common.Entities;
    
    
    // Comment
    public class CFTReview
    {
        
        private System.Int32? initiativeidField;
        
        private string initiativenameField;
        
        private System.Boolean? issaveField;
        
        private string remarksField;
        
        private string statusField;
        
        private System.Int32? createdbyField;
        
        private System.Int32? updatedbyField;
        
        private DateTime? createddateField;
        
        private DateTime? updateddateField;
        
        private System.Int32? plantField;
        
        private System.Boolean? isproposedchangeField;
        
        private System.Int32? cftidField;
        
        private string cftdocumentField;
        
        private string modifiedbyField;
        
        private DateTime? modifieddateField;
        
        public System.Int32? InitiativeId
        {
            get
            {
                return this.initiativeidField;
            }
            set
            {
                this.initiativeidField = value;
            }
        }
        
        public string InitiativeName
        {
            get
            {
                return this.initiativenameField;
            }
            set
            {
                this.initiativenameField = value;
            }
        }
        
        public System.Boolean? IsSave
        {
            get
            {
                return this.issaveField;
            }
            set
            {
                this.issaveField = value;
            }
        }
        
        public string Remarks
        {
            get
            {
                return this.remarksField;
            }
            set
            {
                this.remarksField = value;
            }
        }
        
        public string Status
        {
            get
            {
                return this.statusField;
            }
            set
            {
                this.statusField = value;
            }
        }
        
        public System.Int32? CreatedBy
        {
            get
            {
                return this.createdbyField;
            }
            set
            {
                this.createdbyField = value;
            }
        }
        
        public System.Int32? UpdatedBy
        {
            get
            {
                return this.updatedbyField;
            }
            set
            {
                this.updatedbyField = value;
            }
        }
        
        public DateTime? CreatedDate
        {
            get
            {
                return this.createddateField;
            }
            set
            {
                this.createddateField = value;
            }
        }
        
        public DateTime? UpdatedDate
        {
            get
            {
                return this.updateddateField;
            }
            set
            {
                this.updateddateField = value;
            }
        }
        
        public System.Int32? Plant
        {
            get
            {
                return this.plantField;
            }
            set
            {
                this.plantField = value;
            }
        }
        
        public System.Boolean? IsProposedChange
        {
            get
            {
                return this.isproposedchangeField;
            }
            set
            {
                this.isproposedchangeField = value;
            }
        }
        
        public System.Int32? CFTId
        {
            get
            {
                return this.cftidField;
            }
            set
            {
                this.cftidField = value;
            }
        }
        
        public string CFTDocument
        {
            get
            {
                return this.cftdocumentField;
            }
            set
            {
                this.cftdocumentField = value;
            }
        }
        
        public string ModifiedBy
        {
            get
            {
                return this.modifiedbyField;
            }
            set
            {
                this.modifiedbyField = value;
            }
        }
        
        public DateTime? ModifiedDate
        {
            get
            {
                return this.modifieddateField;
            }
            set
            {
                this.modifieddateField = value;
            }
        }
    }
}