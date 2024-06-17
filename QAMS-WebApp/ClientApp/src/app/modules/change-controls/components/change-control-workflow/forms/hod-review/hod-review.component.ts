import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput } from 'src/app/models/action-plan.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { Hod_ReviewService } from 'src/app/modules/change-controls/services/hod-review.service';
import { ActionPlansEnum, ActionPlansEnum_DESCRIPTIONS } from 'src/app/modules/shared/action-plan-enums';
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

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private hod_ReviewService: Hod_ReviewService) { }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.setActionPlanInput();
  }

  setActionPlanInput() {
    this.actionPlanInput = new ActionPlanInput();
    this.actionPlanInput.workflowName = ActionPlansEnum_DESCRIPTIONS[ActionPlansEnum.HODReview];
    this.actionPlanInput.workflowId = ActionPlansEnum.HODReview;
    this.actionPlanInput.initiativeId = this.changeControl?.changeControlId
    this.actionPlanInput.initiativeName = this.changeControl?.changeControlUniqueCode;
    this.actionPlanInput.plantTypeDetails = this.plantTypeDetails;
  }
}
