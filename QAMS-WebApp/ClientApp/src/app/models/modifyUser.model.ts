export interface ModifyUser{
    id?:string,
    role?:string,
    userName?:string,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    
}
export interface RegModifyUser{
    userName?:string;
    userId?:string,
    role?:string,
    category?:string,
    department?:string,
    employeeId?:string,
    email?:string

}