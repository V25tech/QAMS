using QAMS.Entities.Common;
using System;

namespace QAMS.WEB.Entities
{
    // Comment

    //EntityInitiationform
    public class ChangeControlRegistration
    {
        public ChangeDetails changeDetails { get; set; }
        public RequestDetails requestDetails { get; set; }

        public string RequestDetailsJson { get; set; }
        public string ChangeDetailsJson { get; set; }
        public string ImpactDetailsJson { get; set; }
        public ImpactAssessmentDetails impactAssessmentDetails { get; set; }       

        public int? ChangeControlId { get; set; }

        public string ChangeControlUniqueCode { get; set; }

        public string Category { get; set; }
        public int CatId { get; set; }
     
        public int? Registeredby { get; set; }


        public bool? Reintiate { get; set; }


        public int? Status { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public string ModifiedBy { get; set; }

    }



    public class RequestDetails
    {
        public string reference { get; set; }
        public string externalReference { get; set; }
        public string qualityEvents { get; set; }
        public string initiatingDepartment { get; set; }
        public string typeOfChange { get; set; }
        public string batchNoLotDetails { get; set; }
        public string dateofInitiation { get; set; }
        public string targetDateofClosure { get; set; }

        public string market { get; set; }

        public string customer { get; set; }




    }

    public class ChangeDetails
    {
        public string customer { get; set; }
        public string genatoxicReason { get; set; }
        public string genotoxicAssesment { get; set; }
        public string nitrosamineReason { get; set; }
        public string nitrosamineAssesment { get; set; }
        public string impurityAssesment { get; set; }
        public string products { get; set; }
        public string others { get; set; }
        public string supplierServiceProvider { get; set; }
        public string testing { get; set; }
        public string software { get; set; }
        public string packing { get; set; }
        public string validation { get; set; }
        public string facilityUtility { get; set; }
        public string document { get; set; }
        public string equipment { get; set; }
        public string material { get; set; }
        public string changesRelatedTo { get; set; }
        public string justificationForProposedChange { get; set; }
        public string proposedChange { get; set; }
        public string existingProcedure { get; set; }

    }
    public class ImpactAssessmentDetails
    {
        public string isChangeImpactProductMaterial { get; set; }

        public string impactProductOrMaterials { get; set; }
        public string isAnyProceduresImpacted { get; set; }
        public string impactedProcedures { get; set; }

        public string comments { get; set; }


    }

}
