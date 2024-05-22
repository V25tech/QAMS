using QAMS.Entities.Common;
using System;

namespace QAMS.WEB.Entities
{
    // Comment

    //EntityInitiationform
    public class ChangeControlRegistration 
    {
        public ChangeDetailsEntity ChangeDetails { get; set; }
        public RequestDetailsEntity RequestDetails { get; set; }

        public string RequestDetailsJson { get; set; }
        public string ChangeDetailsJson { get; set; }
        public string ImpactDetailsJson { get; set; }
        public  ImpactDetailsEntity ImpactDetails { get; set; }

        private int? changecontrolidField;

        private string changecontroluniquecodeField;

        private string CategoryField;

        private readonly int catIdField;

        public int? ChangeControlId
        {
            get
            {
                return this.changecontrolidField;
            }
            set
            {
                this.changecontrolidField = value;
            }
        }

        public string ChangeControlUniqueCode
        {
            get
            {
                return this.changecontroluniquecodeField;
            }
            set
            {
                this.changecontroluniquecodeField = value;
            }
        }
        public string Category
        {
            get
            {
                return this.CategoryField;
            }
            set
            {
                this.CategoryField = value;
            }
        }

        public int CatId
        {
            get
            {
                return this.catIdField;
            }
            set
            {
                CatId = value;
            }
        }
        private System.Int32? registeredbyField;

        private System.Boolean? reintiateField;

        private System.Int32? statusField;

        private string createdbyField;

        private DateTime? createddateField;

        private string modifiedbyField;

        private DateTime? modifieddateField;
        public System.Int32? Registeredby
        {
            get
            {
                return this.registeredbyField;
            }
            set
            {
                this.registeredbyField = value;
            }
        }

        public System.Boolean? Reintiate
        {
            get
            {
                return this.reintiateField;
            }
            set
            {
                this.reintiateField = value;
            }
        }

        public System.Int32? Status
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

        public string CreatedBy
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
    }
}
