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
    public class FunctionalProfile
    {
        
        private System.Int32? idField;
        
        private System.Int32? roleidField;
        
        private System.Boolean? changecontrolinitiationField;
        
        private System.Boolean? cchodreviewField;
        
        private System.Boolean? ccqareviewField;
        
        private System.Boolean? cccftreviewField;
        
        private System.Boolean? cccustomernotificationField;
        
        private System.Boolean? ccqadecisionField;
        
        private System.Boolean? ccactionplanField;
        
        private System.Boolean? ccfinalclosureField;
        
        private System.Boolean? ccextensionoftargetdateField;
        
        private System.Boolean? ccworktransferField;
        
        private System.Boolean? ccdossierprintField;
        
        private System.Boolean? ccaudittrialField;
        
        private System.Boolean? ccreportField;
        
        private System.Boolean? deviationinitiationField;
        
        private System.Boolean? dihodreviewField;
        
        private System.Boolean? diqareviewField;
        
        private System.Boolean? dicftreviewField;
        
        private System.Boolean? dicustomernotificationField;
        
        private System.Boolean? qamanagerField;
        
        private System.Boolean? investigationField;
        
        private System.Boolean? diqadecisionField;
        
        private System.Boolean? diactionplanField;
        
        private System.Boolean? difinalclosureField;
        
        private System.Boolean? diextensionoftargetdateField;
        
        private System.Boolean? diworktransferField;
        
        private System.Boolean? didossierprintField;
        
        private System.Boolean? diaudittrialField;
        
        private System.Boolean? direportField;
        
        private System.Boolean? capainitiationField;
        
        private System.Boolean? capahodreviewField;
        
        private System.Boolean? capaqareviewField;
        
        private System.Boolean? capacftreviewField;
        
        private System.Boolean? capaqadecisionField;
        
        private System.Boolean? capaactionplanField;
        
        private System.Boolean? capafinalclosureField;
        
        private System.Boolean? capaextensionoftargetdateField;
        
        private System.Boolean? capaworktransferField;
        
        private System.Boolean? capadossierprintField;
        
        private System.Boolean? capaaudittrialField;
        
        private System.Boolean? capareportField;
        
        private System.Boolean? securitysettingField;
        
        private System.Boolean? newroleField;
        
        private System.Boolean? setfunctionalprofileField;
        
        private System.Boolean? newuserField;
        
        private System.Boolean? newuserapprovalField;
        
        private System.Boolean? plantassignmentField;
        
        private System.Boolean? modifyplantassignmentField;
        
        private System.Boolean? usergroupField;
        
        private System.Boolean? modifyusergroupField;
        
        private System.Boolean? useraccountstatusField;
        
        private System.Boolean? resetloginpasswordField;
        
        private System.Boolean? modifyuserField;
        
        private System.Boolean? productormaterialregistrationField;
        
        private System.Boolean? batchorlotparticularsField;
        
        private System.Boolean? equipmentregistrationField;
        
        private System.Boolean? marketregistrationField;
        
        private System.Boolean? customerregistrationField;
        
        private System.Boolean? audittrialField;
        
        private string remarkField;
        
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
        
        public System.Int32? RoleId
        {
            get
            {
                return this.roleidField;
            }
            set
            {
                this.roleidField = value;
            }
        }
        
        public System.Boolean? ChangeControlInitiation
        {
            get
            {
                return this.changecontrolinitiationField;
            }
            set
            {
                this.changecontrolinitiationField = value;
            }
        }
        
        public System.Boolean? CCHODReview
        {
            get
            {
                return this.cchodreviewField;
            }
            set
            {
                this.cchodreviewField = value;
            }
        }
        
        public System.Boolean? CCQAReview
        {
            get
            {
                return this.ccqareviewField;
            }
            set
            {
                this.ccqareviewField = value;
            }
        }
        
        public System.Boolean? CCCFTReview
        {
            get
            {
                return this.cccftreviewField;
            }
            set
            {
                this.cccftreviewField = value;
            }
        }
        
        public System.Boolean? CCCustomerNotification
        {
            get
            {
                return this.cccustomernotificationField;
            }
            set
            {
                this.cccustomernotificationField = value;
            }
        }
        
        public System.Boolean? CCQADecision
        {
            get
            {
                return this.ccqadecisionField;
            }
            set
            {
                this.ccqadecisionField = value;
            }
        }
        
        public System.Boolean? CCActionPlan
        {
            get
            {
                return this.ccactionplanField;
            }
            set
            {
                this.ccactionplanField = value;
            }
        }
        
        public System.Boolean? CCFinalClosure
        {
            get
            {
                return this.ccfinalclosureField;
            }
            set
            {
                this.ccfinalclosureField = value;
            }
        }
        
        public System.Boolean? CCExtensionOfTargetDate
        {
            get
            {
                return this.ccextensionoftargetdateField;
            }
            set
            {
                this.ccextensionoftargetdateField = value;
            }
        }
        
        public System.Boolean? CCWorkTransfer
        {
            get
            {
                return this.ccworktransferField;
            }
            set
            {
                this.ccworktransferField = value;
            }
        }
        
        public System.Boolean? CCDossierPrint
        {
            get
            {
                return this.ccdossierprintField;
            }
            set
            {
                this.ccdossierprintField = value;
            }
        }
        
        public System.Boolean? CCAuditTrial
        {
            get
            {
                return this.ccaudittrialField;
            }
            set
            {
                this.ccaudittrialField = value;
            }
        }
        
        public System.Boolean? CCReport
        {
            get
            {
                return this.ccreportField;
            }
            set
            {
                this.ccreportField = value;
            }
        }
        
        public System.Boolean? DeviationInitiation
        {
            get
            {
                return this.deviationinitiationField;
            }
            set
            {
                this.deviationinitiationField = value;
            }
        }
        
        public System.Boolean? DIHODReview
        {
            get
            {
                return this.dihodreviewField;
            }
            set
            {
                this.dihodreviewField = value;
            }
        }
        
        public System.Boolean? DIQAReview
        {
            get
            {
                return this.diqareviewField;
            }
            set
            {
                this.diqareviewField = value;
            }
        }
        
        public System.Boolean? DICFTReview
        {
            get
            {
                return this.dicftreviewField;
            }
            set
            {
                this.dicftreviewField = value;
            }
        }
        
        public System.Boolean? DICustomerNotification
        {
            get
            {
                return this.dicustomernotificationField;
            }
            set
            {
                this.dicustomernotificationField = value;
            }
        }
        
        public System.Boolean? QAManager
        {
            get
            {
                return this.qamanagerField;
            }
            set
            {
                this.qamanagerField = value;
            }
        }
        
        public System.Boolean? Investigation
        {
            get
            {
                return this.investigationField;
            }
            set
            {
                this.investigationField = value;
            }
        }
        
        public System.Boolean? DIQADecision
        {
            get
            {
                return this.diqadecisionField;
            }
            set
            {
                this.diqadecisionField = value;
            }
        }
        
        public System.Boolean? DIActionPlan
        {
            get
            {
                return this.diactionplanField;
            }
            set
            {
                this.diactionplanField = value;
            }
        }
        
        public System.Boolean? DIFinalClosure
        {
            get
            {
                return this.difinalclosureField;
            }
            set
            {
                this.difinalclosureField = value;
            }
        }
        
        public System.Boolean? DIExtensionOfTargetDate
        {
            get
            {
                return this.diextensionoftargetdateField;
            }
            set
            {
                this.diextensionoftargetdateField = value;
            }
        }
        
        public System.Boolean? DIWorkTransfer
        {
            get
            {
                return this.diworktransferField;
            }
            set
            {
                this.diworktransferField = value;
            }
        }
        
        public System.Boolean? DIDossierPrint
        {
            get
            {
                return this.didossierprintField;
            }
            set
            {
                this.didossierprintField = value;
            }
        }
        
        public System.Boolean? DIAuditTrial
        {
            get
            {
                return this.diaudittrialField;
            }
            set
            {
                this.diaudittrialField = value;
            }
        }
        
        public System.Boolean? DIReport
        {
            get
            {
                return this.direportField;
            }
            set
            {
                this.direportField = value;
            }
        }
        
        public System.Boolean? CAPAInitiation
        {
            get
            {
                return this.capainitiationField;
            }
            set
            {
                this.capainitiationField = value;
            }
        }
        
        public System.Boolean? CAPAHODReview
        {
            get
            {
                return this.capahodreviewField;
            }
            set
            {
                this.capahodreviewField = value;
            }
        }
        
        public System.Boolean? CAPAQAReview
        {
            get
            {
                return this.capaqareviewField;
            }
            set
            {
                this.capaqareviewField = value;
            }
        }
        
        public System.Boolean? CAPACFTReview
        {
            get
            {
                return this.capacftreviewField;
            }
            set
            {
                this.capacftreviewField = value;
            }
        }
        
        public System.Boolean? CAPAQADecision
        {
            get
            {
                return this.capaqadecisionField;
            }
            set
            {
                this.capaqadecisionField = value;
            }
        }
        
        public System.Boolean? CAPAActionPlan
        {
            get
            {
                return this.capaactionplanField;
            }
            set
            {
                this.capaactionplanField = value;
            }
        }
        
        public System.Boolean? CAPAFinalClosure
        {
            get
            {
                return this.capafinalclosureField;
            }
            set
            {
                this.capafinalclosureField = value;
            }
        }
        
        public System.Boolean? CAPAExtensionOfTargetDate
        {
            get
            {
                return this.capaextensionoftargetdateField;
            }
            set
            {
                this.capaextensionoftargetdateField = value;
            }
        }
        
        public System.Boolean? CAPAWorkTransfer
        {
            get
            {
                return this.capaworktransferField;
            }
            set
            {
                this.capaworktransferField = value;
            }
        }
        
        public System.Boolean? CAPADossierPrint
        {
            get
            {
                return this.capadossierprintField;
            }
            set
            {
                this.capadossierprintField = value;
            }
        }
        
        public System.Boolean? CAPAAuditTrial
        {
            get
            {
                return this.capaaudittrialField;
            }
            set
            {
                this.capaaudittrialField = value;
            }
        }
        
        public System.Boolean? CAPAReport
        {
            get
            {
                return this.capareportField;
            }
            set
            {
                this.capareportField = value;
            }
        }
        
        public System.Boolean? SecuritySetting
        {
            get
            {
                return this.securitysettingField;
            }
            set
            {
                this.securitysettingField = value;
            }
        }
        
        public System.Boolean? NewRole
        {
            get
            {
                return this.newroleField;
            }
            set
            {
                this.newroleField = value;
            }
        }
        
        public System.Boolean? SetFunctionalProfile
        {
            get
            {
                return this.setfunctionalprofileField;
            }
            set
            {
                this.setfunctionalprofileField = value;
            }
        }
        
        public System.Boolean? NewUser
        {
            get
            {
                return this.newuserField;
            }
            set
            {
                this.newuserField = value;
            }
        }
        
        public System.Boolean? NewUserApproval
        {
            get
            {
                return this.newuserapprovalField;
            }
            set
            {
                this.newuserapprovalField = value;
            }
        }
        
        public System.Boolean? PlantAssignment
        {
            get
            {
                return this.plantassignmentField;
            }
            set
            {
                this.plantassignmentField = value;
            }
        }
        
        public System.Boolean? ModifyPlantAssignment
        {
            get
            {
                return this.modifyplantassignmentField;
            }
            set
            {
                this.modifyplantassignmentField = value;
            }
        }
        
        public System.Boolean? UserGroup
        {
            get
            {
                return this.usergroupField;
            }
            set
            {
                this.usergroupField = value;
            }
        }
        
        public System.Boolean? ModifyUserGroup
        {
            get
            {
                return this.modifyusergroupField;
            }
            set
            {
                this.modifyusergroupField = value;
            }
        }
        
        public System.Boolean? UserAccountStatus
        {
            get
            {
                return this.useraccountstatusField;
            }
            set
            {
                this.useraccountstatusField = value;
            }
        }
        
        public System.Boolean? ResetLoginPassword
        {
            get
            {
                return this.resetloginpasswordField;
            }
            set
            {
                this.resetloginpasswordField = value;
            }
        }
        
        public System.Boolean? ModifyUser
        {
            get
            {
                return this.modifyuserField;
            }
            set
            {
                this.modifyuserField = value;
            }
        }
        
        public System.Boolean? ProductOrMaterialRegistration
        {
            get
            {
                return this.productormaterialregistrationField;
            }
            set
            {
                this.productormaterialregistrationField = value;
            }
        }
        
        public System.Boolean? BatchOrLotParticulars
        {
            get
            {
                return this.batchorlotparticularsField;
            }
            set
            {
                this.batchorlotparticularsField = value;
            }
        }
        
        public System.Boolean? EquipmentRegistration
        {
            get
            {
                return this.equipmentregistrationField;
            }
            set
            {
                this.equipmentregistrationField = value;
            }
        }
        
        public System.Boolean? MarketRegistration
        {
            get
            {
                return this.marketregistrationField;
            }
            set
            {
                this.marketregistrationField = value;
            }
        }
        
        public System.Boolean? CustomerRegistration
        {
            get
            {
                return this.customerregistrationField;
            }
            set
            {
                this.customerregistrationField = value;
            }
        }
        
        public System.Boolean? AuditTrial
        {
            get
            {
                return this.audittrialField;
            }
            set
            {
                this.audittrialField = value;
            }
        }
        
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
