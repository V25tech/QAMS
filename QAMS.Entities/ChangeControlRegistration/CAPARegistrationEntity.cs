//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QAMS.WEB.Entities
{
    
    // Comment
    public class CAPA  : BaseEntity
    {
        
        private System.Boolean? correctiveActionPlanRequired;

        private System.Boolean? preventiveActionPlansReq;        

        private byte[] documentFile;

        private string externaldocumentFile;     

        private System.Boolean? otherActionPlansReq;     

        public System.Boolean? CorrectiveActionPlanRequired
        {
            get
            {
                return this.correctiveActionPlanRequired;
            }
            set
            {
                this.correctiveActionPlanRequired = value;
            }
        }

        public string ExternaldocumentFile
        {
            get
            {
                return this.externaldocumentFile;
            }
            set
            {
                this.externaldocumentFile = value;
            }
        }    

        public System.Boolean? PreventiveActionPlansReq
        {
            get
            {
                return this.preventiveActionPlansReq;
            }
            set
            {
                this.preventiveActionPlansReq = value;
            }
        }
        public byte[] DocumentFile
        {
            get
            {
                return this.documentFile;
            }
            set
            {
                this.documentFile = value;
            }
        }      

        public System.Boolean? OtherActionPlansReq
        {
            get
            {
                return this.otherActionPlansReq;
            }
            set
            {
                this.otherActionPlansReq = value;
            }
        }        
    }
}
