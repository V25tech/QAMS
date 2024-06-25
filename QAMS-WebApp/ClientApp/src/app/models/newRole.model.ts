export interface NewRole{
    
    name?:string,
    description?:string,
    createdBy?:string,
    createdDate:string | Date
    
}
// export interface RegNewRole{
//     newRole?:string,
//     description?:string
// }
export class ChangeControlModel {
    controlLoginInitiation: boolean=false;
    hodReview: boolean=false;
    qaReview: boolean=false;
    cftReview: boolean=false;
    customerNotification: boolean=false;
    qaDecision: boolean=false;
    actionPlan: boolean=false;
    finalClosure: boolean=false;
    extensionOfTargetDate: boolean=false;
    workTransfer: boolean=false;
    dossierPrint: boolean=false;
    auditTrials: boolean=false;
    reports: boolean=false;
  
   
  }
  export class DeviationModel {
    deviationInitiation: boolean=false;
    hodReview_Deviation: boolean=false;
    qaReview_Deviation: boolean=false;
    cftReview_Deviation: boolean=false;
    customerNotification_Deviation: boolean=false;
    investigation: boolean=false;
    qaDecision_Deviation: boolean=false;
    actionPlan_Deviation: boolean=false;
    finalClosure_QA: boolean=false;
    extensionOfTargetDate_Deviation: boolean=false;
    workTransfer_Deviation: boolean=false;
    dossierPrint_Deviation: boolean=false;
    auditTrials_Deviation: boolean=false;
    reports_Deviation: boolean=false;
   
  }
  export class CAPAModel {
    capaInitiation: boolean=false;
    hodReview_CAPA: boolean=false;
    qaReview_CAPA: boolean=false;
    cftReview_CAPA: boolean=false;
    qaDecision_CAPA: boolean=false;
    actionPlan_CAPA: boolean=false;
    finalClosure_QA_CAPA: boolean=false;
    extensionOfTargetDate_CAPA: boolean=false;
    workTransfer_CAPA: boolean=false;
    dossierPrint_CAPA: boolean=false;
    auditTrials_CAPA: boolean=false;
    reports_CAPA: boolean=false;      
  }
  
  export class Role {
    name: string;
    description: string;
    createdBy: string;
    createdDate: Date | null;
    modifiedBy: string;
    modifiedDate: Date | null;
    changeControlRoles: ChangeControlModel;
    deviationRoles: DeviationModel;
    capaRoles: CAPAModel;
  }
  