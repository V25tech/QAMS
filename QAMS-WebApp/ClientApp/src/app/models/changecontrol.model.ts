export interface CC_Model {
    requestDetails?: RequestDetails;
    changeDetails?: ChangeDetails;
    impactAssessmentDetails?: ImpactAssessmentDetails;

    changeControlId?: number,
    changeControlUniqueCode?: string,
    category?: string,
    catId?: number,
    registeredby?: number
    reintiate?: boolean,
    status?: string,
    createdBy?: string,
    createdDate?: Date,
    modifiedBy?: string,
    plantId?: number
}

export interface RequestDetails {
    reference?: string,
    externalReference?: string,
    qualityEvents?: string,
    initiatingDepartment?: string,
    typeOfChange?: string,
    batchNoLotNo?: string,
    batchNoLotDetails?: string,
    dateofInitiation?: any,
    targetDateofClosure?: any,
    market?: string,
    customer?: string
}

export interface ChangeDetails {
    changesRelatedTo?: string,
    material?: string,
    equipment?: string,
    document?: string,
    facilityUtility?: string,
    validation?: string,
    packing?: string,
    software?: string,
    testing?: string,
    supplierServiceProvider?: string,
    others?: string,
    products?: string,
    impurityAssesment?: string,
    impurityReason?: string,
    nitrosamineAssesment?: string,
    nitrosamineReason?: string,
    genotoxicAssesment?: string,
    genatoxicReason?: string,
    existingProcedure?: string,
    proposedChange?: string,
    justificationForProposedChange?: string
}
export interface ImpactAssessmentDetails {
    isChangeImpactProductMaterial?: string,
    impactProductOrMaterials?: string,
    isAnyProceduresImpacted?: string,
    impactedProcedures?: string,
    comments?: string
}

export interface ChangeControls {
    id?: string,
    department?: string,
    initiatedBy?: string,
    date: string | Date,
    status?: string
}
export interface ChangeControlsDocument {
    document?: string,
    id?: string,
    description?: string,
    uploadedBy?: string,
    date: string | Date,
    parentControlId:number,
    parentType ? : string
}
export interface WorkItems {
    id?: string,
    workItemId?: string,
    WorkType?: string,
    changeControlUniqueCode?: string,
    date: string | Date,
    targetDate: string | Date,
    status?: string
}
export interface CCAuditTrails {
    id?: string,
    initiatedBy?: string,
    date: string | Date,
    status?: string,
    revision?: string,
    dateExtended?: string
}
export interface RequestContext {
    PageNumber : number,
    PageSize:number,
    planId:number
}
export interface HodReview {
    initiativeId?: number | null;
    initiativeName?: string;
    isSave?: boolean | null;
    comments?: string;
    status?: string;
    createdBy?: number | null;
    updatedBy?: number | null;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    plant?: number | null;
    hodId?: number | null;
    hodDocument?: string;
    modifiedBy?: string;
    modifiedDate?: Date | null;
  }
  
  export interface QAReview {
    classificationOfChange?: boolean | null;
    impactOnProcFormats?: boolean | null;
    procedureFormat?: string | null;
    isRegularCustomer?: boolean | null;
    impactCommitment?: string | null;
    reviewComments?: string | null;
    initiativeId?: number | null;
    initiativeName?: string | null;
    isSave?: boolean | null;
    status?: string | null;
    createdBy?: number | null;
    updatedBy?: number | null;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    plant?: number | null;
    qaId?: number | null;
    qaDocument?: string | null;
    modifiedBy?: string | null;
    modifiedDate?: Date | null;
  }
  
    