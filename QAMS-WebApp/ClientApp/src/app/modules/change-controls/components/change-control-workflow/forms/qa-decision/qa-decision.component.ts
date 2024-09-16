import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { QADecision } from 'src/app/models/qa-decision.model';
import { QaDecisionService } from 'src/app/modules/change-controls/services/qa-decision.service';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared-services/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared-services/action-plan.service';
import { CommonService } from 'src/app/modules/shared-services/common.service';

@Component({
  selector: 'app-qa-decision',
  templateUrl: './qa-decision.component.html',
  styleUrls: ['./qa-decision.component.scss'],
  providers: [MessageService]
})
export class QaDecisionComponent {

  @Input('changeControl') changeControl: CC_Model;

  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";

  defaultRadioBtn = 0;
  id: any;
  plantTypeDetails = [
    { name: 'SOP', code: 'SOP' },
    { name: 'STP ', code: 'STP' }
  ]

  inChargeDepartmentDetails = [
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  actionPlanInput: ActionPlanInput
  visibleSidebar2: any;
  action_plans: ActionPlanModel[];
  changeControlId: number = 0;
  qaDecision: QADecision = this.getEmptyQADecision();


  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private commonService: CommonService,
    private messageService: MessageService,
    private actionPlanService: ActionPlanService,
    private qaDecisionService: QaDecisionService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadActionPlans();
      this.loadQADecision();
    })
    //this.setActionPlanInput();
  }


  loadActionPlans() {
    this.actionPlanService.getActionsplansByInitIdAndWorkId(this.changeControlId, ActionPlansEnum.CC_QA_DECISION_AP).subscribe((p: any) => {
      this.action_plans = p;
    }, er => console.log(er));
  }

  refresh(event: any) {
    this.loadActionPlans();
  }

  setActionPlanInput() {
    let actionPlanInput = new ActionPlanInput();
    actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.CC_QA_DECISION_AP];
    actionPlanInput.workflowId = ActionPlansEnum.CC_QA_DECISION_AP;
    actionPlanInput.initiativeId = this.changeControlId;
    actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    actionPlanInput.plantTypeDetails = this.plantTypeDetails;

    this.visibleSidebar2 = true;
    this.commonService.setActionPlanInput(actionPlanInput);
  }

  loadQADecision() {
    this.qaDecisionService.getQaDecisionbyintid(this.changeControlId).subscribe((data: any) => {
      this.qaDecision = data ?? this.getEmptyQADecision();
    }, er => {
      this.qaDecision = this.getEmptyQADecision();
      console.log(er);
    });
  }

  getEmptyQADecision() {
    let qa_decision: QADecision = {
      isReviewedActions: null,
      remarks: '',
      comments: '',
      status: ''
    };
    return qa_decision;
  }

  saveQADecision() {
    this.qaDecision.isSave = false;
    this.qaDecision.initiativeId = this.changeControlId;
    this.qaDecision.initiativeName = "ChangeControl";
    this.qaDecision.plant = 3;
    this.qaDecision.createdBy = 1234;
    this.qaDecision.updatedBy = 1234;
    this.qaDecisionService.saveQaDecision(this.qaDecision).subscribe((data: any) => {
      if (data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'QA Decision Updated Successfully' });
      }
    }, er => console.log(er));
  }

  submit() {
    this.qaDecision.isSave = true;
    this.qaDecision.updatedBy = 1234;
    this.qaDecisionService.updateQaDecision(this.qaDecision).subscribe((data: any) => {
      if (data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'QA Decision Updated Successfully' });
      }
    }, er => console.log(er));
  }

  selectIncharge(event: any) {
    this.selectInChargeOption = event.target.value;
    this.cdr.detectChanges();
  }
}
