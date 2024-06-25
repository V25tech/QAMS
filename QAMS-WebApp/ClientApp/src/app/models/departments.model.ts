export interface Departments{
    id?:number,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    departmentCode:string

    
}
export interface RegNewdepartment{
    
    departmentName?:string,
    departmentCode?:string
}