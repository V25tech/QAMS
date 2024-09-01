export interface QADecision {
    initiativeId?: number | null;
    initiativeName?: string;
    isSave?: boolean | null;
    comments?: string;
    remarks?: string;
    status?: string;
    createdBy?: number | null;
    updatedBy?: number | null;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    plant?: number | null;
    qadId?: number | null;
    isReviewedActions?: boolean | null;
    cnDocument?: string;
    modifiedBy?: string;
    modifiedDate?: Date | null;
  }