export interface Products{
    id?:string,
    productName?:string, 
    initiatedBy?:string,
    date:string | Date,
    status?:string
    
}
export interface RegProduct{
    name?:string;
    uniqueCode?:string,
    chemicalName?:string,
}