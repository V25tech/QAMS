export interface RequestDetails{
    reference?:string,
    extReference?:string,
    qltyReference?:string,
    initiationDepartment?:string,
    typOfChange?:string,
    batchLotNo?:string,
    batchLotDetails?:string,
    dateOfInitiate?:any,
    trgtDateClosure?:any,
    market?:string,
    customer?:string
}

export interface ChangeDetails{
    changesRelatedTo?:string,
    existingProcedure?:string,
    proposedChange?:string,
    justificationOfProposedChange?:string
}
export interface AssessmentDetails{
    changeImpactQuality?:string,
    impactProduct?:string,
    proceduresImpacted?:string,
    impactedProcedures?:string,
    comments?:string
}

export interface ChangeControls{
    id?:string,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string
}
export interface ChangeControlsDocument{
    document?:string,
    id?:string,
    description?:string,
    uploadedBy?:string,
    date:string | Date
}
export interface WorkItems{
    id?:string,
    workItemId?:string,
    WorkType?:string,
    changeControlUniqueCode?:string,
    date:string | Date,
    targetDate:string | Date,
    status?:string
}
export interface CCAuditTrails{
    id?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string,
    revision?:string,
    dateExtended?:string
}