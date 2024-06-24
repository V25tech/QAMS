export enum ActionPlansEnum {
    ControlLoginInitiation = 1,
    CC_HOD_REVIEW_AP = 2,
    CC_QA_REVIEW_AP = 3,
    CC_QA_REVIEW_RAAP = 4,    
    CC_CFT_REVIEW_AP = 5,
    CC_QA_DECISION_AP = 6,
    CustomerNotification = 7,    
    ActionPlan = 70,
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
    [ActionPlansEnum.CC_HOD_REVIEW_AP]: "HOD Review",
    [ActionPlansEnum.CC_QA_REVIEW_AP]: "QA Review",
    [ActionPlansEnum.CC_QA_REVIEW_RAAP]: "QA Review",
    [ActionPlansEnum.CC_CFT_REVIEW_AP]: "CFT Review",
    [ActionPlansEnum.CustomerNotification]: "Customer Notification",
    [ActionPlansEnum.CC_QA_DECISION_AP]: "QA Decision",
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
