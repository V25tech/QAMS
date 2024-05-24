export interface ModifyUser{
    id?:string,
    roleId?:string,
    userId?:string,
    departmentId?:string,
    createdBy?:string,
    createdDate:string | Date,
    
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