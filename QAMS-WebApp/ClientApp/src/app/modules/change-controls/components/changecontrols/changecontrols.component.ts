import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInitiateService } from '../../services/login-initiate.service';
import { Table } from 'primeng/table';
import { CC_Model, ChangeControls } from 'src/app/models/changecontrol.model';
import { ChangeControlsService } from '../../services/change-controls.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-changecontrols',
  templateUrl: './changecontrols.component.html',
  styleUrls: ['./changecontrols.component.scss']
})
export class ChangecontrolsComponent {
  //ccInitiateDatasource: ChangeControls[]=[];
  ccInitiateDatasource: CC_Model[]=[];
  selectedCCInitiatedDataSource: any = [];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  status = [
    { label: 'All Status', value: 'All Status' },
    { label: 'IN PROGRESS', value: 'In Progress' },
    {  label: 'APPROVED', value: 'Approved' },
    {  label: 'REJECTED', value: 'Rejected' },
    {  label: 'RETURNED', value: 'Returned' },
    {  label: 'APPROVAL PENDING', value: 'Approval Pending' },
  ];
  constructor(private router: Router,
    private loginInitiateService: LoginInitiateService, private cdr: ChangeDetectorRef, private changeControlsService: ChangeControlsService) { }

  ngOnInit() {

    this.changeControlsService.getAllChangeControlbyPlant(3).subscribe((res:any) =>{
      this.ccInitiateDatasource = res.response;
      console.log(this.ccInitiateDatasource);
      //this.ccInitiateDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    })
    
    // this.loginInitiateService.getData().subscribe((data: any) => {
    //   this.ccInitiateDatasource = data;
    //   this.ccInitiateDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    // });
     
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
  loginInitiation() {
    this.router.navigateByUrl('/register-change-control');
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

  gotoEditPage(id: string) {
    this.router.navigateByUrl(`/edit-change-control/${id}`);
  }
  gotoWorkTransferPage() {
    this.router.navigateByUrl('/work-Transfer');
  }
  gotoDossierPrintPage() {
    this.router.navigateByUrl('/dossier-print-request');
  }
  goToExtendDate(){
    this.router.navigateByUrl('/extend-target-date');
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  NavToCCWorkflow(id: any) {
    //this.router.navigateByUrl('/workItems/${id}');
    this.router.navigate(['/cc-workflow'], { queryParams: { id: id } })
  }

}
