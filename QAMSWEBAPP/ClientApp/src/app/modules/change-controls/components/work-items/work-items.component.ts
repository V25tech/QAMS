import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginInitiateService } from '../../services/login-initiate.service';
import { Table } from 'primeng/table';
import { WorkItems } from 'src/app/models/changecontrol.model';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.scss']
})
export class WorkItemsComponent {
  ccInitiateDatasource: WorkItems[] = [];
  selectedCCInitiatedDataSource: any = [];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  id: any;
  searchTypes = [
    { id: 1, name: 'All Status', value: 'All Status' },
    { id: 2, name: 'IN PROGRESS', value: 'In Progress' },
    { id: 3, name: 'APPROVED', value: 'Approved' },
    { id: 4, name: 'REJECTED', value: 'Rejected' },
    { id: 5, name: 'RETURNED', value: 'Returned' },
    { id: 6, name: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];
  status = [
    { label: 'All Status', value: 'All Status' },
    { label: 'IN PROGRESS', value: 'In Progress' },
    {  label: 'APPROVED', value: 'Approved' },
    {  label: 'REJECTED', value: 'Rejected' },
    {  label: 'RETURNED', value: 'Returned' },
    {  label: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];
  constructor(private router: Router, private route: ActivatedRoute,
    private loginInitiateService: LoginInitiateService, private cdr: ChangeDetectorRef) { }
  
  ngOnInit() {
    this.loginInitiateService.getWorkItems().subscribe((data: any) => {
      this.ccInitiateDatasource = data;
      this.ccInitiateDatasource.forEach(dataSource=>{
        dataSource.date = new Date(dataSource.date);
        dataSource.targetDate = new Date(dataSource.targetDate);
      })
    });
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
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
  gotoRegPage() {
    this.router.navigateByUrl('/register-change-control');
  }
  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  gotoWorkTransferPage() {
    this.router.navigateByUrl('/work-Transfer');
  }
  gotoWorkItemPage(id: any) {
    //this.router.navigateByUrl('/workItems/${id}');
    this.router.navigate(['/workItems-workFlow'], { queryParams: { id: id } })
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
}
