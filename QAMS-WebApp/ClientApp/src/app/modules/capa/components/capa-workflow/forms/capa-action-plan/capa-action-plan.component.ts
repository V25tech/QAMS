import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { CapaService } from 'src/app/modules/capa/services/capa.service';
interface ActionPlan {
  id: string;
  description: string;
  assignedTo: string;
  status: string;
}

@Component({
  selector: 'app-capa-action-plan',
  templateUrl: './capa-action-plan.component.html',
  styleUrls: ['./capa-action-plan.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CapaActionPlanComponent {
  visibleForceClosure: any;
  visibleMonitorPlan: any;
  actionPlansDatasource: ActionPlan[] = [];
  selectedDate: string = "10/11/2024";
  id: any;
  actionPlanID = "";
  showActionPlans = true;
  defaultRadioBtn = 0;
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef,
    private route: ActivatedRoute, private CapaService: CapaService,private deviationService:CapaService) { }

  ngOnInit(): void {

    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })

    this.CapaService. getCapaActionPlans(this.id).subscribe((data: any) => {
      this.actionPlansDatasource = data;
    });

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
