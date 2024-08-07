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
    public class Role 
    {
        public string id { get; set; }
        public string name { get; set; }

        public string description { get; set; }

        public string createdBy { get; set; }

        public DateTime? createdDate { get; set; }

        public string modifiedBy { get; set; }

        public string roleMetadata { get; set; }

        public DateTime? modifiedDate { get; set; }


        public ChangeControlRoles ChangeControlRoles { get; set; }
        public DeviationRoles DeviationRoles { get; set; }  

        public CAPARoles CAPARoles { get; set; }


    }


    public class ChangeControlRoles
    {
        public bool ControlLoginInitiation { get; set; }
        public bool HODReview { get; set; }
        public bool QAReview { get; set; }
        public bool CFTReview { get; set; }
        public bool CustomerNotification { get; set; }
        public bool QADecision { get; set; }
        public bool ActionPlan { get; set; }
        public bool FinalClosure { get; set; }
        public bool ExtensionOfTargetDate { get; set; }
        public bool WorkTransfer { get; set; }
        public bool DossierPrint { get; set; }
        public bool AuditTrials { get; set; }
        public bool Reports { get; set; }
    }

    public class DeviationRoles
    {
        public bool DeviationInitiation { get; set; }
        public bool HODReview_Deviation { get; set; }
        public bool QAReview_Deviation { get; set; }
        public bool CFTReview_Deviation { get; set; }
        public bool CustomerNotification_Deviation { get; set; }
        public bool Investigation { get; set; }
        public bool QADecision_Deviation { get; set; }
        public bool ActionPlan_Deviation { get; set; }
        public bool FinalClosure_QA { get; set; }
        public bool ExtensionOfTargetDate_Deviation { get; set; }
        public bool WorkTransfer_Deviation { get; set; }
        public bool DossierPrint_Deviation { get; set; }
    }

    public class CAPARoles
    {
        public bool CAPAInitiation { get; set; }
        public bool HODReview_CAPA { get; set; }
        public bool QAReview_CAPA { get; set; }
        public bool CFTReview_CAPA { get; set; }
        public bool QADecision_CAPA { get; set; }
        public bool ActionPlan_CAPA { get; set; }
        public bool FinalClosure_QA_CAPA { get; set; }
        public bool ExtensionOfTargetDate_CAPA { get; set; }
        public bool WorkTransfer_CAPA { get; set; }
        public bool DossierPrint_CAPA { get; set; }
        public bool AuditTrials_CAPA { get; set; }
        public bool Reports_CAPA { get; set; }
    }

}

