import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { CapaDetails } from 'src/app/models/capa.model';
import { CapaService } from 'src/app/modules/capa/services/capa.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent {
  capaDatasource:CapaDetails[]=[];
  selectedCapaDataSource: any = [];
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
    private CapaService: CapaService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.CapaService.getData().subscribe((data: any) => {
      this.capaDatasource = data;
      this.capaDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
     
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

  toggleMenu(index: any) {
    this.selectedIndex = index;
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }

  gotoRegPage() {
    this.router.navigateByUrl('/register-capa');
  }
  gotoWorkTransferPage() {
    this.router.navigateByUrl('/capa-work-transfer-request');
  }
  gotoDossierPrintPage() {
    this.router.navigateByUrl('/capa-dossier-print-request');
  }
  goToExtendDate(){
    this.router.navigateByUrl('/capa-extend-date');
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  NavToCapaWorkflow(id: any) {
    //this.router.navigateByUrl('/workItems/${id}');
    this.router.navigate(['/capa-workflow'], { queryParams: { id: id } })
  }

}

