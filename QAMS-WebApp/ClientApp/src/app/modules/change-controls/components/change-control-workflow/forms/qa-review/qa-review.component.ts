import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared/action-plan.service';
import { CommonService } from 'src/app/modules/shared/common.service';

@Component({
  selector: 'app-qa-review',
  templateUrl: './qa-review.component.html',
  styleUrls: ['./qa-review.component.scss']
})
export class QAReviewComponent implements OnInit {

  @Input('changeControl') changeControl: CC_Model;

  selectPlantTypeOption: any = "SOP";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;
  classificationValue: string = '';
  changeImpactProcedure: boolean = true;
  selectCommitment: boolean = true;
  selectAdditionalPlanValue: string = "";
  selectedAdditionalPlanTypeVal: string = '';
  constructor(private primeConfig: PrimeNGConfig,
    private actionPlanService: ActionPlanService,
    private commonService: CommonService,
    private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  plantTypeDetails = [
    { name: 'SOP', code: 'SOP' },
    { name: 'STP ', code: 'STP' }
  ]
  additionalActionPlanType = [
    { name: 'QRM', code: 'QRM' },
    { name: 'QOM ', code: 'QOM' }
  ]
  inChargeDepartmentDetails = [
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  actionPlanInput: ActionPlanInput;
  visibleSidebar2: any;
  action_plans: ActionPlanModel[];
  risk_assesment_action_plans: ActionPlanModel[];
  changeControlId: number = 0;

  visibleSidebar3: any;


  ngOnInit(): void {

    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadActionPlans();
      this.loadRiskAssessmentActionPlans();
    })
  }

  loadActionPlans() {
    this.actionPlanService.getActionsplansByInitIdAndWorkId(this.changeControlId, ActionPlansEnum.CC_QA_REVIEW_AP).subscribe((p: any) => {
      this.action_plans = p;
    }, er => console.log(er));
  }

  loadRiskAssessmentActionPlans() {
    this.actionPlanService.getActionsplansByInitIdAndWorkId(this.changeControlId, ActionPlansEnum.CC_QA_REVIEW_RAAP).subscribe((p: any) => {
      this.risk_assesment_action_plans = p;
    }, er => console.log(er));
  }

  setActionPlanInput() {
    let actionPlanInput = new ActionPlanInput();
    actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.CC_QA_REVIEW_AP];
    actionPlanInput.workflowId = ActionPlansEnum.CC_QA_REVIEW_AP;
    actionPlanInput.initiativeId = this.changeControlId;
    actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    actionPlanInput.plantTypeDetails = this.plantTypeDetails;

    this.visibleSidebar2 = true;
    this.commonService.setActionPlanInput(actionPlanInput);

  }

  setRiskAssessmentActionPlanInput() {
    let actionPlanInput = new ActionPlanInput();
    actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.CC_QA_REVIEW_RAAP];
    actionPlanInput.workflowId = ActionPlansEnum.CC_QA_REVIEW_RAAP;
    actionPlanInput.initiativeId = this.changeControlId;
    actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    actionPlanInput.plantTypeDetails = this.additionalActionPlanType;
    
    this.visibleSidebar2 = true;
    this.commonService.setActionPlanInput(actionPlanInput);
  }

  refresh(event: any) {
    if (event == ActionPlansEnum.CC_QA_REVIEW_AP)
      this.loadActionPlans();
    else if (event == ActionPlansEnum.CC_QA_REVIEW_RAAP)
      this.loadRiskAssessmentActionPlans();
  }

  closeNavBar() {
    this.visibleSidebar2 = false;
  }

  selectClassification(event: any) {
    this.classificationValue = event.target.value;
  }
  selectImpactProcedures(event: any) {
    if (event.target.value === 'No') {
      this.changeImpactProcedure = false;
    } else if (event.target.value === 'Not Applicable') {
      this.changeImpactProcedure = false;
    }
    else {
      this.changeImpactProcedure = true;
    }
  }
  selectCustomerCommitment(event: any) {
    if (event.target.value === 'No') {
      this.selectCommitment = false;
    } else if (event.target.value === 'Not Applicable') {
      this.selectCommitment = false;
    }
    else {
      this.selectCommitment = true;
    }
  }

}
