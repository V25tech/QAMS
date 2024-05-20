export interface UserGroup{
    id?:Int16Array,
    code?:string,
    name?:string,
    roles?:string,
    createdBy?:string,
    createdDate:Date ,
    modifiedBy?:string,
    modifiedDate?:Date
    
}
export interface RegUserGroup{
    remarks?:string
}