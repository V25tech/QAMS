export interface ModifyUser{
    id?:string,
    roleId?:string,
    userName?:string;
    departmentId?:string,
    createdBy?:string,
    createdDate:string | Date,
    
}
export interface RegModifyUser{
    firstname?:string;
    lastname?:string;
  
    userId?:string,
    role?:string,
    category?:string,
    department?:string,
    employeeId?:string,
    email?:string

}