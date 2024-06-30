
import { ChangeDetectorRef, Component,  ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BatchLot } from 'src/app/models/BatchLotParticulars.model';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-batch-lot-particulars',
  templateUrl: './batch-lot-particulars.component.html',
  styleUrls: ['./batch-lot-particulars.component.scss']
})
export class BatchLotParticularsComponent {
  batchLotDatasource: BatchLot[]=[];
  selectedCCInitiatedDataSource: any = [];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  
  constructor(private router: Router,
    private batchLotServicesService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.batchLotServicesService.getBatchLotData().subscribe((data: any) => {    
      debugger;  
      this.batchLotDatasource = data.response;
      //this.batchLotDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });     
  }
   
  Initiation() {
    this.router.navigateByUrl('/reg-batch-lot-particulars');
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

 
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  navigateToEditEquipment(id:number){    
    this.router.navigateByUrl('/reg-batch-lot-particulars?Id='+id);
  }

}
