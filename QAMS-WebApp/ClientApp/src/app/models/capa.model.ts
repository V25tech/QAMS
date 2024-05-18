export interface CapaDetails{
    id?:string,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string
}
export interface CapaDocument{
    document?:string,
    id?:string,
    description?:string,
    uploadedBy?:string,
    date:string | Date
}
export interface CapaAuditTrails{
    id?:string,
    initiatedBy?:string,
    date:string | Date,
    status?:string,
    revision?:string,
    dateExtended?:string
}