import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LoginInitiateService } from '../../services/login-initiate.service';
import { Table } from 'primeng/table';
import { ChangeControls } from 'src/app/models/changecontrol.model';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-action-plans',
  templateUrl: './action-plans.component.html',
  styleUrls: ['./action-plans.component.scss']
})
export class ActionPlansComponent {
  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup: any = "User Group";
  selectedDate: string = "10/11/2024";

  defaultRadioBtn = 0;
  id: any;



  ccInitiateDatasource: ChangeControls[] = [];
  selectedCCInitiatedDataSource: any = [];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  status = [
    { label: 'All Status', value: 'All Status' },
    { label: 'IN PROGRESS', value: 'In Progress' },
    { label: 'APPROVED', value: 'Approved' },
    { label: 'REJECTED', value: 'Rejected' },
    { label: 'RETURNED', value: 'Returned' },
    { label: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];


  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private loginInitiateService: LoginInitiateService) { }
    
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
    this.loginInitiateService.getData().subscribe((data: any) => {
      this.ccInitiateDatasource = data;
      this.ccInitiateDatasource.forEach(dataSource => dataSource.date = new Date(dataSource.date))
    });
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }

  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  toggleMenu(index: any) {
    this.selectedIndex = index;
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }

  getStatusClass(status: string): string {
    if (status === 'In Progress') {
      return 'status-in-progress';
    } else if (status === 'Approved') {
      return 'status-approved';
    } else if (status === 'Approval Pending') {
      return 'status-under-review';
    }
    else if (status === 'Rejected') {
      return 'status-rejected';
    }
    else if (status === 'Returned') {
      return 'status-returned';
    } else {
      return '';
    }
  }

  visibleSidebar2: any;
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
