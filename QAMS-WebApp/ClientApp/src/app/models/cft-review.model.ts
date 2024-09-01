export interface CftReview {
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
    cftId?: number | null;
    isProposedChange?: boolean | null;
    cftDocument?: string;
    modifiedBy?: string;
    modifiedDate?: Date | null;
  }