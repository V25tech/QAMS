import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ActionPlanModel } from 'src/app/models/action-plan.model';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { ActionPlanService } from 'src/app/modules/change-controls/services/action-plan.service';
import { Hod_ReviewService } from 'src/app/modules/change-controls/services/hod-review.service';
import { ActionPlansEnum } from 'src/app/modules/shared/action-plan-enums';
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
  ]
  inChargeDepartmentDetails = [
    { name: 'Quality Control', code: 'Quality Control', id: 0 },
    { name: 'Quality Assurance ', code: 'Quality Assurance', id: 1 }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1', id: 0 },
    { name: 'User Group2', code: 'User Group2', id: 1 }
  ]

  usersDetails = [
    { name: 'User 1', code: 'User1', id: 0 },
    { name: 'User 2', code: 'User2', id: 1 }
  ]

  mainForm: FormGroup;

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private actionPlanService: ActionPlanService,
    private hod_ReviewService: Hod_ReviewService) { }

  ngOnInit(): void {
    this.commonService.buildLoginUserInfo();

    this.primeConfig.ripple = true;
    this.buildMainForm();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  buildMainForm() {
    this.mainForm = this.fb.group({
      //Request Details Controls
      type: [this.plantTypeDetails[0].code, Validators.required],
      description: ['', Validators.required],
      departmentId: [this.inChargeDepartmentDetails[0].id, Validators.required],
      assignTo: ['userGroup', Validators.required],
      assignedUser: [{ value: '', disabled: true }],
      assignedUserGroup: [{ value: this.userGroupDetails[0].id, disabled: false }],
      targetDate: ['', Validators.required],
      remarks: ['', Validators.required]
    });

    this.mainForm.get('assignTo').valueChanges.subscribe(value => {
      if (value === 'userGroup') {
        this.mainForm.get('assignedUserGroup').enable();
        this.mainForm.get('assignedUserGroup').setValue(this.userGroupDetails[0].id);
        this.mainForm.get('assignedUser').disable();
      } else if (value === 'user') {
        this.mainForm.get('assignedUser').enable();
        this.mainForm.get('assignedUser').setValue(this.usersDetails[0].id);
        this.mainForm.get('assignedUserGroup').disable();
      }
    });
  }

  onSubmit() {
    let actionPlan: ActionPlanModel = this.mainForm.value;
    actionPlan.createdBy = this.commonService.LogginedUserId.toString();
    actionPlan.createdDate = new Date().toDateString();
    actionPlan.isApproved = false;
    actionPlan.isReviewed = false;
    actionPlan.workflowId = ActionPlansEnum.HODReview;
    actionPlan.workflowName = "HODReview";
    actionPlan.initiativeId = this.changeControl.changeControlId;
    actionPlan.initiativeName = this.changeControl.changeControlUniqueCode;
    
    //actionPlan.

    console.log(JSON.stringify(actionPlan))
    this.actionPlanService.saveChangeControlActionPlans(actionPlan).subscribe(res => {
      console.log(res);
      this.closeNavBar();
    }, er => console.log(er));
  }


  visibleSidebar2: any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }

}
