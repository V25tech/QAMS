import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CftReview } from 'src/app/models/cft-review.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { CftReviewService } from 'src/app/modules/change-controls/services/cft-review.service';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared-services/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared-services/action-plan.service';
import { CommonService } from 'src/app/modules/shared-services/common.service';

@Component({
  selector: 'app-cft-review',
  templateUrl: './cft-review.component.html',
  styleUrls: ['./cft-review.component.scss']
})
export class CftReviewComponent {

  @Input('changeControl') changeControl: CC_Model;

  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;

  actionPlanInput: ActionPlanInput
  cftreview: CftReview = {};
  visibleSidebar2: any;
  action_plans: ActionPlanModel[];
  changeControlId: number = 0;

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private commonService: CommonService,
    private actionPlanService: ActionPlanService,
    private cftReviewService: CftReviewService,
    private route: ActivatedRoute) { }
  plantTypeDetails = [
    { name: 'Documentation', code: 'Documentation' },
    { name: 'Deviations ', code: 'Deviations' }
  ]
  inChargeDepartmentDetails = [
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  ngOnInit(): void {

    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadActionPlans();
      this.loadCftReview();
    })
  }

  loadActionPlans() {
    this.actionPlanService.getActionsplansByInitIdAndWorkId(this.changeControlId, ActionPlansEnum.CC_CFT_REVIEW_AP).subscribe((p: any) => {
      this.action_plans = p;
    }, er => console.log(er));
  }


  loadCftReview() {
    this.cftReviewService.getCftreviewbyintid(this.changeControlId).subscribe( (data)=> {
      this.cftreview=data;
    }, err => console.log(err))
  }

  refresh(event: any) {
    this.loadActionPlans();
  }

  setActionPlanInput() {
    let actionPlanInput = new ActionPlanInput();
    actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.CC_CFT_REVIEW_AP];
    actionPlanInput.workflowId = ActionPlansEnum.CC_CFT_REVIEW_AP;
    actionPlanInput.initiativeId = this.changeControlId;
    actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    actionPlanInput.plantTypeDetails = this.plantTypeDetails;

    this.visibleSidebar2 = true;
    this.commonService.setActionPlanInput(actionPlanInput);
  }


  saveCFTReview() {
    this.cftreview.isSave = false;
    this.cftreview.initiativeId = this.changeControlId;
    this.cftreview.initiativeName = "ChangeControl";
    this.cftreview.plant = 3;
    this.cftreview.createdBy = 1234;
    this.cftreview.updatedBy = 1234;
    this.cftReviewService.saveCftReview(this.cftreview).subscribe((data: any) => {
      console.log(data);
    }, er => console.log(er));
  }

  submit(){
    this.cftReviewService.updateCftReview(this.cftreview).subscribe((data: any) => {
      console.log(data);
    }, er => console.log(er));
  }

  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  selectPlantType(event: any) {
    this.selectPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectIncharge(event: any) {
    this.selectInChargeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectUserGroup(event: any) {
    this.selectUserGroupDetails = event.target.value;
    this.cdr.detectChanges();
  }

  selectAssignToGroup(event: any) {
    this.selectGroup = event.target.value;
    this.cdr.detectChanges();
  }
}
