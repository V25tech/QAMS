export interface Products{
    id?:string,
    isActive?:string, 
    createdBy?:string,
    createdDate:string | Date,
    status?:string
    
}
export interface RegProduct{
    name?:string;
    code?:string,
    chemicalName?:string,
}