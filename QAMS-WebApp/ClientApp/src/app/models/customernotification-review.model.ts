export interface CustomerNotificationReview {
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
    cnId?: number | null;
    isProposedChange?: boolean | null;
    cnDocument?: string;
    modifiedBy?: string;
    modifiedDate?: Date | null;
  }