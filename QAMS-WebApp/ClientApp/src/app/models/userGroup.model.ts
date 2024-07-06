import { ModifyUser, RegModifyUser } from "./modifyUser.model"

export interface UserGroup{
    id?:any,
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
    remarks?:string,
    selectedUsers?:string
}