export interface Deviations{
    id?:string,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string
}
export interface DeviationsDocument{
    document?:string,
    id?:string,
    description?:string,
    uploadedBy?:string,
    date:string | Date
}

export interface DeviationsAuditTrails{
    id?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string,
    revision?:string,
    dateExtended?:string
}