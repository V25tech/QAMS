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
    using QAMS.Common.Entities;
    
    
    // Comment
    public class Equipment
    {
        
        private System.Int32? idField;
        
        private string nameField;
        
        private string equipmentidField;

        private string departmentField;

        private string makeField;
        
        private string modelField;
        
        private string serialnumberField;
        
        private string installedlocationField;
        
        private System.Int32? departmentidField;
        
        private DateTime? installedonField;
        
        private DateTime? warrantyexpiresonField;
        
        private string suppliedbyField;
        
        private string softwareField;
        
        private string createdbyField;
        
        private DateTime? createddateField;
        
        private string modifiedbyField;
        
        private DateTime? modifieddateField;
        
        public System.Int32? Id
        {
            get
            {
                return this.idField;
            }
            set
            {
                this.idField = value;
            }
        }
        
        public string equipmentName
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        public string department
        {
            get
            {
                return this.departmentField;
            }
            set
            {
                this.departmentField = value;
            }
        }


        public string EquipmentId
        {
            get
            {
                return this.equipmentidField;
            }
            set
            {
                this.equipmentidField = value;
            }
        }
        
        public string Make
        {
            get
            {
                return this.makeField;
            }
            set
            {
                this.makeField = value;
            }
        }
        
        public string Model
        {
            get
            {
                return this.modelField;
            }
            set
            {
                this.modelField = value;
            }
        }
        
        public string SerialNumber
        {
            get
            {
                return this.serialnumberField;
            }
            set
            {
                this.serialnumberField = value;
            }
        }
        
        public string InstalledLocation
        {
            get
            {
                return this.installedlocationField;
            }
            set
            {
                this.installedlocationField = value;
            }
        }
        
        public System.Int32? DepartmentId
        {
            get
            {
                return this.departmentidField;
            }
            set
            {
                this.departmentidField = value;
            }
        }
        
        public DateTime? InstalledOn
        {
            get
            {
                return this.installedonField;
            }
            set
            {
                this.installedonField = value;
            }
        }
        
        public DateTime? WarrantyExpiresOn
        {
            get
            {
                return this.warrantyexpiresonField;
            }
            set
            {
                this.warrantyexpiresonField = value;
            }
        }
        
        public string SuppliedBy
        {
            get
            {
                return this.suppliedbyField;
            }
            set
            {
                this.suppliedbyField = value;
            }
        }
        
        public string Software
        {
            get
            {
                return this.softwareField;
            }
            set
            {
                this.softwareField = value;
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
