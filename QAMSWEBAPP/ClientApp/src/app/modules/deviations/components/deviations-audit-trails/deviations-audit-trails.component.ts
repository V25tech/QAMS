import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { DeviationsService } from '../../services/deviations.service';
import { DeviationsAuditTrails } from 'src/app/models/deviations.model';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-deviations-audit-trails',
  templateUrl: './deviations-audit-trails.component.html',
  styleUrls: ['./deviations-audit-trails.component.scss']
})
export class DeviationsAuditTrailsComponent {
  devAuditDatasource: DeviationsAuditTrails[]=[];
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
    private deviationsService: DeviationsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.deviationsService.getDeviationAuditDetails().subscribe((data: any) => {
      this.devAuditDatasource = data;
      this.devAuditDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
}
toggleMenu(index: any) {
  this.selectedIndex = index;
  this.isOpen = !this.isOpen;
  this.cdr.detectChanges();
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
  this.deviationsService.getDeviationAuditDetails().subscribe((data: any) => {
    this.devAuditDatasource = data;
    this.devAuditDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date));
    if(value ==='true'){
      this.devAuditDatasource=this.devAuditDatasource.filter((obj)=>obj.dateExtended === value);
    }else if(value ==='All Status'){
      this.devAuditDatasource = data;
    }else{
      this.devAuditDatasource=this.devAuditDatasource.filter((obj)=>obj.status === value);
    }
    
  });
}

}
