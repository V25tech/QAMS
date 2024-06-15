export interface ActionPlanModel {
    type?: string,
    description?: string,
    departmentId?: number,
    assignTo?: string,
    assignedUser?: number,
    assignedUserGroup?: number,
    targetDate?: string,
    remarks?: string

    changeContolActionPlanId?: number,
    createdBy?: string,
    createdDate?: string,
    modifiedBy?: number,
    modifiedDate?: string,
    approvedUser?: number,
    approvedUserGroup?: number,
    initiativeId?: number,
    initiativeName?: string,
    workflowId?: number,
    workflowName?: string,
    isReviewed?: boolean,
    isApproved?: boolean
}


// {
//     "changeContolActionPlanId": 0,
//     "type": "string",
//     "description": "string",
//     "departmentId": 0,
//     "assignedUser": 0,
//     "assignedUserGroup": 0,
//     "targetDate": "2024-06-09T11:26:19.529Z",
//     "remarks": "string",
//     "createdBy": "string",
//     "createdDate": "2024-06-09T11:26:19.529Z",
//     "modifiedBy": "string",
//     "modifiedDate": "2024-06-09T11:26:19.529Z",
//     "approvedUser": 0,
//     "approvedUserGroup": 0,
//     "initiativeId": 0,
//     "initiativeName": "string",
//     "workflowId": 0,
//     "workflowName": "string",
//     "isReviewed": true,
//     "isApproved": true
//   }
  