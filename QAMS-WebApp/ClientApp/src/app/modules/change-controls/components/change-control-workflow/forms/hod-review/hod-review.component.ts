import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { Hod_ReviewService } from 'src/app/modules/change-controls/services/hod-review.service';
import { ActionPlanFormComponent } from 'src/app/modules/shared-components/action-plan-form.component/action-plan-form.component';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared/action-plan-enums';
import { ActionPlanService } from 'src/app/modules/shared/action-plan.service';
import { CommonService } from 'src/app/modules/shared/common.service';

@Component({
  selector: 'app-hod-review',
  templateUrl: './hod-review.component.html',
  styleUrls: ['./hod-review.component.scss']
})
export class HODReviewComponent implements OnInit {

  @Input('changeControl') changeControl: CC_Model;

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
    })
    //this.setActionPlanInput();
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

}
