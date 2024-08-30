import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model, HodReview } from 'src/app/models/changecontrol.model';
import { Hod_ReviewService } from 'src/app/modules/change-controls/services/hod-review.service';
import { ActionPlanFormComponent } from 'src/app/modules/shared-components/action-plan-form.component/action-plan-form.component';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared-services/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared-services/action-plan.service';
import { CommonService } from 'src/app/modules/shared-services/common.service';

@Component({
  selector: 'app-hod-review',
  templateUrl: './hod-review.component.html',
  styleUrls: ['./hod-review.component.scss']
})
export class HODReviewComponent implements OnInit {

  @Input('changeControl') changeControl: CC_Model;
  objhod: HodReview ={};
  isapprove=false;isreturn=false;isreject=false;
  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;
  plantTypeDetails = [
    { name: 'Documentation', code: 'Documentation' },
    { name: 'Deviations ', code: 'Deviations' }
  ];

  actionPlanInput: ActionPlanInput
  visibleSidebar2: any;
  action_plans: ActionPlanModel[];
  changeControlId: number = 0;

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private actionPlanService: ActionPlanService,
    private hod_ReviewService: Hod_ReviewService) { }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadActionPlans();
      this.loadhodreview();
    })
    //this.setActionPlanInput();
  }

  loadhodreview()
  {
    this.hod_ReviewService.gethodreviewbyintid(this.changeControlId).subscribe((data:any)=>{
      if(data==null || undefined){
        this.objhod.status="In Progress";
      }else{
      this.objhod=data; }
      debugger
      if(data==null || undefined){
        
      }
     else{
      if(this.objhod.status!='In Progress'){
        if(this.objhod.status=='Approve'){
          this.isapprove=true;
        }else if(this.objhod.status=='Reject'){
          this.isreject=true;
        }else if(this.objhod.status=='Return'){
          this.isreturn=true;
        }
        this.cdr.detectChanges();
      }
    }
      console.log(data);
    })
  }
 
  loadActionPlans() {
    this.actionPlanService.getActionsplansByInitIdAndWorkId(this.changeControlId, ActionPlansEnum.CC_HOD_REVIEW_AP).subscribe((p: any) => {
      this.action_plans = p;
    }, er => console.log(er));
  }

  refresh(event: any) {
    this.loadActionPlans();
  }

  setActionPlanInput() {
    let actionPlanInput = new ActionPlanInput();
    actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.CC_HOD_REVIEW_AP];
    actionPlanInput.workflowId = ActionPlansEnum.CC_HOD_REVIEW_AP;
    actionPlanInput.initiativeId = this.changeControlId;
    actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    actionPlanInput.plantTypeDetails = this.plantTypeDetails;

    this.visibleSidebar2 = true;
    this.commonService.setActionPlanInput(actionPlanInput);
  }
  savehod(objhod:HodReview){
    objhod.isSave=false;
    objhod.initiativeId=this.changeControlId;
    objhod.initiativeName="ChangeControl";
    objhod.plant=3;
    objhod.createdBy=1234;
    objhod.updatedBy=1234;
    this.hod_ReviewService.saveHodReview(objhod).subscribe((data:any)=>{

    });
  }
  submithod(objhod:HodReview){
    objhod.isSave=true;
    objhod.updatedBy=1234;
    if(this.isapprove){
    objhod.status="Approve";
    } else if(this.isreject){
      objhod.status="Reject";
      }else if(this.isreturn){
        objhod.status="Return";
        }
    this.hod_ReviewService.updateHodReview(objhod).subscribe((data:any)=>{

    });
  }
  approvehod(){
    debugger
    this.isapprove=true;
    this.isreject=false;
    this.isreturn=false;
    this.objhod.isSave=true;
    this.cdr.detectChanges();
  }
  rejecthod(){
    this.isapprove=false;
    this.isreject=true;
    this.isreturn=false;
    this.objhod.isSave=true;
    this.cdr.detectChanges();
  }
  returnhod(){
    this.isapprove=false;
    this.isreject=false;
    this.isreturn=true;
    this.objhod.isSave=true;
    this.cdr.detectChanges();
  }
}
