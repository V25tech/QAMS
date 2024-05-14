import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { DeviationsService } from 'src/app/modules/deviations/services/deviations.service';

interface ActionPlan {
  id: string;
  description: string;
  assignedTo: string;
  status: string;
}

@Component({
  selector: 'app-deviation-action-plans-review',
  templateUrl: './deviation-action-plans-review.component.html',
  styleUrls: ['./deviation-action-plans-review.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class DeviationActionPlansReviewComponent {
  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";
  visibleSidebar2: any;
  visibleForceClosure: any;
  visibleMonitorPlan: any;
  defaultRadioBtn = 0;
  id: any;
  actionPlanID = "";
  showActionPlans = true;
  actionPlansDatasource: ActionPlan[] = [];
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

  status = [
    { label: 'All Status', value: 'All Status' },
    { label: 'IN PROGRESS', value: 'In Progress' },
    { label: 'APPROVED', value: 'Approved' },
    { label: 'REJECTED', value: 'Rejected' },
    { label: 'RETURNED', value: 'Returned' },
    { label: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];
  

  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute,
    private deviationService:DeviationsService) { }

  ngOnInit(): void {

    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })

    this.deviationService. getDeviationActionPlans(this.id).subscribe((data: any) => {
      this.actionPlansDatasource = data;
    });

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

  getStatusClass(status: string): string {
    if (status === 'Open') {
      return 'status-open';
    } else if (status === 'Closed') {
      return 'status-closed';
    } else if (status === 'Approved') {
      return 'status-approved';
    } else if (status === 'In Review') {
      return 'status-inreview';
    } else if (status === 'Rejected') {
      return 'status-rejected';
    } else if (status === 'Returned') {
      return 'status-returned';
    } else {
      return '';
    }
  }

  actionPlanClick(id: any) {
    this.actionPlanID = id;
    this.showActionPlans = false;
  }
  backToActionPlans() {
    this.actionPlanID = "";
    this.showActionPlans = true;
  }
}
