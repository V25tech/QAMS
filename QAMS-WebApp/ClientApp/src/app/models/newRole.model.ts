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
    controlLoginInitiation: boolean;
    hodReview: boolean;
    qaReview: boolean;
    cftReview: boolean;
    customerNotification: boolean;
    qaDecision: boolean;
    actionPlan: boolean;
    finalClosure: boolean;
    extensionOfTargetDate: boolean;
    workTransfer: boolean;
    dossierPrint: boolean;
    auditTrials: boolean;
    reports: boolean;
  
   
  }
  export class DeviationModel {
    deviationInitiation: boolean;
    hodReview_Deviation: boolean;
    qaReview_Deviation: boolean;
    cftReview_Deviation: boolean;
    customerNotification_Deviation: boolean;
    investigation: boolean;
    qaDecision_Deviation: boolean;
    actionPlan_Deviation: boolean;
    finalClosure_QA: boolean;
    extensionOfTargetDate_Deviation: boolean;
    workTransfer_Deviation: boolean;
    dossierPrint_Deviation: boolean;
    auditTrials_Deviation: boolean;
    reports_Deviation: boolean;
   
  }
  export class CAPAModel {
    capaInitiation: boolean;
    hodReview_CAPA: boolean;
    qaReview_CAPA: boolean;
    cftReview_CAPA: boolean;
    qaDecision_CAPA: boolean;
    actionPlan_CAPA: boolean;
    finalClosure_QA_CAPA: boolean;
    extensionOfTargetDate_CAPA: boolean;
    workTransfer_CAPA: boolean;
    dossierPrint_CAPA: boolean;
    auditTrials_CAPA: boolean;
    reports_CAPA: boolean;      
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
  