export interface UserGroup{
    id?:Int16Array,
    code?:string,
    name?:string,
    roles?:string,
    createdBy?:string,
    createdDate:Date ,
    modifiedBy?:string,
    modifiedDate?:Date,
    remarks?:string
    
}
export interface RegUserGroup{
    name?:string,
    code?:string,
    remarks?:string
    
}