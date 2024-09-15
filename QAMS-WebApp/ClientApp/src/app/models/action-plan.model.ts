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
    modifiedBy?: string,
    modifiedDate?: string,
    approvedUser?: number,
    approvedUserGroup?: number,
    initiativeId?: number,
    initiativeName?: string,
    workflowId?: number,
    workflowName?: string,
    isReviewed?: boolean,
    isApproved?: boolean,
    isSave?: boolean,
    reviewStatusComment?: string,
    aPReviewComments?: string,
    aPRemarks?: string
    
}

export class ActionPlanInput {
    initiativeId?: number;
    initiativeName?: string;
    workflowId?: number;
    workflowName?: string;
    plantTypeDetails?: any;
}
