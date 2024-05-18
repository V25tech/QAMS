import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

import { DeviationsDocument } from 'src/app/models/deviations.model';
import { DeviationsService } from 'src/app/modules/deviations/services/deviations.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-deviations-document',
  templateUrl: './deviations-document.component.html',
  styleUrls: ['./deviations-document.component.scss']
})
export class DeviationsDocumentComponent {
  documentDatasource:DeviationsDocument[]=[];
  visibleSidebar2:any;
  first: number = 0;
  rows: number = 10;
  visible: boolean = false;
  constructor(private deviationService:DeviationsService){

  }
  ngOnInit(): void {
    this.deviationService.getDocumentData().subscribe((data: any) => {
      this.documentDatasource = data;
      this.documentDatasource.forEach(dataSource=>(dataSource.date = new Date(dataSource.date)))
    });
  }

newDocument(){

}
closeNavBar(){
  this.visibleSidebar2 =false;
}
onPageChange(event: PageEvent) {
  this.first = event.first;
  this.rows = event.rows;
}
clear(table: Table) {
  table.clear();
}
@ViewChild('dt') dt: Table | undefined;
applyFilterGlobal($event: any, stringVal: any) {
  this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}

showDialog(){
this.visible =true;
}
}
