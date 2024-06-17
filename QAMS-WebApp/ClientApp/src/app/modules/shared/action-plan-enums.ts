export enum ActionPlansEnum {
    ControlLoginInitiation = 1,
    HODReview = 2,
    QAReview = 3,
    CFTReview = 4,
    CustomerNotification = 5,
    QADecision = 6,
    ActionPlan = 7,
    FinalClosure = 8,
    ExtensionofTargetDate = 9,
    WorkTransfer = 10,
    DossierPrint = 11,
    AuditTrials = 12,
    Reports = 13,
    DeviationInitiation = 14,
    Investigation = 15,
    CAPAInitiation = 16
}

// Constants for descriptions of each step
export const ActionPlansEnum_DESCRIPTIONS = {
    [ActionPlansEnum.ControlLoginInitiation]: "Control Login Initiation",
    [ActionPlansEnum.HODReview]: "HOD Review",
    [ActionPlansEnum.QAReview]: "QA Review",
    [ActionPlansEnum.CFTReview]: "CFT Review",
    [ActionPlansEnum.CustomerNotification]: "Customer Notification",
    [ActionPlansEnum.QADecision]: "QA Decision",
    [ActionPlansEnum.ActionPlan]: "Action Plan.",
    [ActionPlansEnum.FinalClosure]: "Final Closure",
    [ActionPlansEnum.ExtensionofTargetDate]: "ExtensionOf Target Date",
    [ActionPlansEnum.WorkTransfer]: "Work Transfer.",
    [ActionPlansEnum.DossierPrint]: "Dossier Print",
    [ActionPlansEnum.AuditTrials]: "Audit Trials",
    [ActionPlansEnum.Reports]: "Reports",
    [ActionPlansEnum.DeviationInitiation]: "Deviation Initiation",
    [ActionPlansEnum.Investigation]: "Investigation",
    [ActionPlansEnum.CAPAInitiation]: "Corrective and Preventive Action Initiation"
}
