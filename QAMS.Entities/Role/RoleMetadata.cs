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
    public class RoleMetadata
    {

        private int idField;
        private string Type;
        private bool HODReview { get; set; }
        private bool QAReview { get; set; }
        private bool CFTReview { get; set; }
        private bool CustomerNotification { get; set; }
        private bool QADecision { get; set; }
        private bool ActionPlan { get; set; }

        private bool FinalClosure { get; set; }

        private bool ExtensionOfTargetDate { get; set; }

        private bool WorkTransfer { get; set; }

        private bool DossierPrint { get; set; }

        private bool AuditTrails { get; set; }

        private bool Reports { get; set; }
    }
}
