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



    // Comment
    public class User
    {



        public System.Int32? Id { get; set; }
        public System.Int32? roleid { get; set; }
        public string role { get; set; }
        public string userId { get; set; }
        public string userName { get; set; }
        public string FirstName { get; set; }

        public string Plants { get; set; }

        public string plantid {  get; set; }


        public string LastName { get; set; }



        public System.Int32? departmentid { get; set; }



        public string department { get; set; }


        public string employeeId { get; set; }


        public string email { get; set; }


        public string Password { get; set; }


        public System.Boolean? IsActive { get; set; }


        public System.Boolean? ForgotLoginPassword { get; set; }


        public string CreatedBy { get; set; }


        public DateTime? CreatedDate { get; set; }

        public string ModifiedBy { get; set; }


        public DateTime? ModifiedDate { get; set; }

    }
}
