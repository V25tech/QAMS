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
    public class Market
    {

        private System.Int32? idField;

        //private string nameField;

        //private string codeField;

        private string remarkField;

        //private string createdbyField;

        // private DateTime? createddateField;

        private string modifiedbyField;

        private DateTime? modifieddateField;

        public System.Int32? id { get; set; }


        public string name { get; set; }
        //{
        //    get
        //    {
        //        return this.nameField;
        //    }
        //    set
        //    {
        //        this.nameField = value;
        //    }
        //}

        public string uniqueCode { get; set; }
        //{
        //    get
        //    {
        //        return this.codeField;
        //    }
        //    set
        //    {
        //        this.codeField = value;
        //    }
        //}

        public string Remark
        {
            get
            {
                return this.remarkField;
            }
            set
            {
                this.remarkField = value;
            }
        }

        public string createdBy { get; set; }
        //{
        //    get
        //    {
        //        return this.createdbyField;
        //    }
        //    set
        //    {
        //        this.createdbyField = value;
        //    }
        //}

        public DateTime? createdDate { get; set; }
        //{
        //    get
        //    {
        //        return this.createddateField;
        //    }
        //    set
        //    {
        //        this.createddateField = value;
        //    }
        //}

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
