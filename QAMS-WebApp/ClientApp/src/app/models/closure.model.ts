export interface Closure {
    initiativeId?: number | null;
    initiativeName?: string;
    isSave?: boolean | null;        
    plant?: number | null;
    cId?: number | null;
    createdBy?: number | null;
    updatedBy?: number | null;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    decision?: string;
    status?: string;
    remarks?: string;
    implementEffChanges?: string;
    actionPlanReviewComments?: string;
    isAllDocumentsApprovedEff?: boolean | null;
    trainingCompleted?: boolean | null;
    isApprovedChangesEff?: boolean | null;
    isIdentifiedActions?: boolean | null;
    cDocument?: string;
    modifiedBy?: string;
    modifiedDate?: Date | null;
  }