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
    username?:string;
    userId?:string,
    roleid?:string,
    category?:string,
    departmentid?:string,
    employeeId?:string,
    email?:string,
    plantid?:string

}