import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CCAuditTrails} from 'src/app/models/changecontrol.model';
import { LoginInitiateService } from '../../services/login-initiate.service';
import { Table } from 'primeng/table';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-cc-audit-trails',
  templateUrl: './cc-audit-trails.component.html',
  styleUrls: ['./cc-audit-trails.component.scss']
})
export class CcAuditTrailsComponent {
  ccAuditDatasource: CCAuditTrails[]=[];
  selectedCCInitiatedDataSource: any = [];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  tab=1;
  status = [
    { label: 'All Status', value: 'All Status' },
    { label: 'IN PROGRESS', value: 'In Progress' },
    {  label: 'APPROVED', value: 'Approved' },
    {  label: 'REJECTED', value: 'Rejected' },
    {  label: 'RETURNED', value: 'Returned' },
    {  label: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];
  constructor(private router: Router,
    private loginInitiateService: LoginInitiateService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loginInitiateService.getCCAuditDetails().subscribe((data: any) => {
      this.ccAuditDatasource = data;
      this.ccAuditDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
}
toggleMenu(index: any) {
  this.selectedIndex = index;
  this.isOpen = !this.isOpen;
  this.cdr.detectChanges();
}

gotoRegPage() {
  this.router.navigateByUrl('/register-change-control');
}
gotoWorkTransferPage() {
  this.router.navigateByUrl('/work-Transfer');
}
gotoDossierPrintPage() {
  this.router.navigateByUrl('/dossier-print-request');
}
onPageChange(event: PageEvent) {
  this.first = event.first;
  this.rows = event.rows;
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


clear(table: Table) {
  table.clear();
}
@ViewChild('dt') dt: Table | undefined;
applyFilterGlobal($event: any, stringVal: any) {
  this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
filterData(value:any,tagValue:any){
  this.tab = tagValue;
  this.loginInitiateService.getCCAuditDetails().subscribe((data: any) => {
    this.ccAuditDatasource = data;
    this.ccAuditDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date));
    if(value ==='true'){
      this.ccAuditDatasource=this.ccAuditDatasource.filter((obj)=>obj.dateExtended === value);
    }else if(value ==='All Status'){
      this.ccAuditDatasource = data;
    }else{
      this.ccAuditDatasource=this.ccAuditDatasource.filter((obj)=>obj.status === value);
    }
    
  });
}

}

