import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model, QAReview } from 'src/app/models/changecontrol.model';
import { QA_ReviewService } from 'src/app/modules/change-controls/services/QA_ReviewService';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared-services/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared-services/action-plan.service';
import { CommonService } from 'src/app/modules/shared-services/common.service';

@Component({
  selector: 'app-qa-review',
  templateUrl: './qa-review.component.html',
  styleUrls: ['./qa-review.component.scss']
})
export class QAReviewComponent implements OnInit {

  @Input('changeControl') changeControl: CC_Model;
  objqa: QAReview ={ classificationOfChange:true,impactOnProcFormats:true,
    status:'In Progress',
    isRegularCustomer:true};
    isapprove=false;isreturn=false;isreject=false;
  classificationValue: string = this.objqa.classificationOfChange ? 'major' : 'minor';
  impactOnProcedures: boolean = true;
  proceduresValue: string = this.impactOnProcedures ? 'yes' : 'no';
  selectCommitment: boolean = true;
  commitmentvalue:string=this.selectCommitment ? 'yes' : 'No';
  selectPlantTypeOption: any = "SOP";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;
  //classificationValue: string = '';
  changeImpactProcedure: boolean = true;
  
  selectAdditionalPlanValue: string = "";
  selectedAdditionalPlanTypeVal: string = '';
  constructor(private primeConfig: PrimeNGConfig,
    private actionPlanService: ActionPlanService,
    private commonService: CommonService,
    private qaservice : QA_ReviewService,
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
      this.getqareviewbyinit();
      
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

  // Maps to get the string representation from boolean
  getClassificationValue(): string {
    return this.objqa.classificationOfChange ? 'major' : 'minor';
  }

  // Maps to get the boolean representation from the selected string
  selectClassification(event: any) {
    this.objqa.classificationOfChange = event.target.value === 'major';
    this.classificationValue = event.target.value; // Update classificationValue
    console.log('Selected classification:', this.objqa.classificationOfChange);
  }
  selectImpactProcedures(event: any) {
    // Update boolean property based on selected value
    this.impactOnProcedures = event.target.value === 'yes';
    // Update proceduresValue to keep ngModel in sync
    this.proceduresValue = event.target.value;
    this.changeImpactProcedure=this.impactOnProcedures;
    this.objqa.impactOnProcFormats=this.impactOnProcedures;
    console.log('Impact on Procedures:', this.impactOnProcedures);
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
    this.objqa.isRegularCustomer=this.selectCommitment;
  }
  saveqareview(objqa:QAReview){
   
   if(objqa.qaId > 0){
    this.updateqareview(objqa);
   } else {
   objqa.initiativeId=this.id;objqa.initiativeName='ChangeControl';
   objqa.isSave=false; objqa.plant=3; objqa.status='In Progress';
   objqa.createdBy=1234; objqa.updatedBy=1234;
   this.qaservice.saveQAReview(objqa).subscribe((data:any)=>{
    alert('saved successfully');
   });
  }
  }
  getqareviewbyinit(){
    
    this.qaservice.getqareviewbyintid(this.id).subscribe((data:any)=>{
      if(data==null){
        this.classificationValue = this.objqa.classificationOfChange ? 'major' : 'minor';
        this.proceduresValue = this.impactOnProcedures ? 'yes' : 'no';
      }
      else{
        this.objqa=data;
        this.classificationValue=this.objqa.classificationOfChange ? 'major' : 'minor';
        this.proceduresValue=this.objqa.impactOnProcFormats ? 'yes' : 'no';
        this.changeImpactProcedure=this.objqa.impactOnProcFormats;
        this.commitmentvalue=this.objqa.isRegularCustomer ? 'yes' : 'No';
      }
    });
  }
  updateqareview(objqa: QAReview) {
    this.qaservice.updateQAReview(objqa).subscribe((data:any)=>{
      alert('updated qa review');
    });
  }
  approveqa(){
    
    this.isapprove=true;
    this.isreject=false;
    this.isreturn=false;
    this.objqa.isSave=true;
    this.cdr.detectChanges();
  }
  rejectqa(){
    this.isapprove=false;
    this.isreject=true;
    this.isreturn=false;
    this.objqa.isSave=true;
    this.cdr.detectChanges();
  }
  returnqa(){
    this.isapprove=false;
    this.isreject=false;
    this.isreturn=true;
    this.objqa.isSave=true;
    this.cdr.detectChanges();
  }
  submitqa(objqa:QAReview){
    objqa.isSave=true;
    objqa.updatedBy=1234;
    if(this.isapprove){
      objqa.status="Approve";
    } else if(this.isreject){
      objqa.status="Reject";
      }else if(this.isreturn){
        objqa.status="Return";
        }
    this.qaservice.updateQAReview(objqa).subscribe((data:any)=>{

    });
  }
}


