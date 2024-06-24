import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ActionPlanInput, ActionPlanModel } from 'src/app/models/action-plan.model';
import { ActionPlanService } from 'src/app/modules/shared/action-plan.service';
import { CommonService } from 'src/app/modules/shared/common.service';
import { ModifyUserService } from '../../system-manager/services/modify-user.service';
import { UserGroupService } from '../../system-manager/services/user-group.service';

@Component({
    selector: 'action-plan-form',
    templateUrl: './action-plan-form.component.html',
    styleUrls: ['./action-plan-form.component.scss'],
    providers: [MessageService]
})
export class ActionPlanFormComponent implements OnInit {
    @Input() initiativeId: number;
    @Input() initiativeName: string;
    @Input() visibleSidebar2: boolean;
    @Output() visibleSidebar2Change: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() refreshEvent = new EventEmitter();


    selectedDate: string = "10/11/2024";
    defaultRadioBtn = 0;
    id: any;
    actionPlanInput: ActionPlanInput;

    plantTypeDetails: any = [];
    inChargeDepartmentDetails = [
        { name: 'Quality Control', code: 'Quality Control', id: 0 },
        { name: 'Quality Assurance ', code: 'Quality Assurance', id: 1 }
    ]
    userGroupDetails = [
        { name: 'User Group1', code: 'User Group1', id: 1 },
        { name: 'User Group2', code: 'User Group2', id: 2 }
    ]

    usersDetails = [
        { firstName: 'User 1', code: 'User1', id: 1 },
        { firstName: 'User 2', code: 'User2', id: 2 }
    ]

    mainForm: FormGroup;

    constructor(private primeConfig: PrimeNGConfig,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private messageService: MessageService,
        private commonService: CommonService,
        private userService: ModifyUserService,
        private userGroupService: UserGroupService,
        private actionPlanService: ActionPlanService) { }

    ngOnInit(): void {
        this.primeConfig.ripple = true;

        this.commonService.buildLoginUserInfo();
        this.loadUsersAndUserGroups();

        this.buildMainForm();
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });

        this.commonService.actionPlanInputObservable.subscribe((p: ActionPlanInput) => {
            this.actionPlanInput = p;
            this.plantTypeDetails = p.plantTypeDetails;
        })
    }

    loadUsersAndUserGroups() {
        this.userService.getUserData().subscribe(p => {
            this.usersDetails = p?.response;
        }, er => console.log(er));

        this.userGroupService.getUserData().subscribe(p => {
            this.userGroupDetails = p?.response;
        }, er => console.log(er));
    }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    buildMainForm() {
        this.mainForm = this.fb.group({
            //Request Details Controls
            type: ['', Validators.required],
            description: ['', Validators.required],
            departmentId: [this.inChargeDepartmentDetails[0].id, Validators.required],
            assignTo: ['userGroup', Validators.required],
            assignedUser: [{ value: 0, disabled: false }],
            assignedUserGroup: [{ value: 0, disabled: false }],
            targetDate: ['', Validators.required],
            remarks: ['', Validators.required]
        });

        this.mainForm.get('assignTo').valueChanges.subscribe(value => {
            this.mainForm.get('assignedUser').setValue(0);
            this.mainForm.get('assignedUserGroup').setValue(0);
        });
    }

    onSubmit(next = false) {
        let actionPlan: ActionPlanModel = this.mainForm.value;
        actionPlan.createdBy = this.commonService.LogginedUserId.toString();
        actionPlan.modifiedBy = actionPlan.createdBy;
        actionPlan.isApproved = false;
        actionPlan.isReviewed = false;
        actionPlan.workflowId = this.actionPlanInput.workflowId;  // ActionPlansEnum.HODReview;
        actionPlan.workflowName = this.actionPlanInput.workflowName;// "HODReview";
        actionPlan.initiativeId = this.actionPlanInput.initiativeId; //this.changeControl.changeControlId;
        actionPlan.initiativeName = this.actionPlanInput.initiativeName; //this.changeControl.changeControlUniqueCode;
        actionPlan.changeContolActionPlanId = 0;

        actionPlan.createdDate = new Date().toISOString();
        actionPlan.targetDate = new Date(actionPlan.targetDate).toISOString();

        console.log(JSON.stringify(actionPlan))
        this.actionPlanService.saveActionPlans(actionPlan).subscribe(res => {
            console.log(res);

            this.refreshEvent.emit(this.actionPlanInput.workflowId);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Action Plan Initiated Successfully' });
            this.buildMainForm();
            if (!next) {
                this.closeNavBar();
            }
        }, er => console.log(er));
    }

    closeNavBar() {
        this.visibleSidebar2 = false;
        this.visibleSidebar2Change.emit(this.visibleSidebar2);
    }
}
