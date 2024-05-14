import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CapaDocument } from 'src/app/models/capa.model';
import { CapaService } from 'src/app/modules/capa/services/capa.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-capa-documents',
  templateUrl: './capa-documents.component.html',
  styleUrls: ['./capa-documents.component.scss']
})


export class CapaDocumentsComponent implements OnInit{
  documentDatasource:CapaDocument[]=[];
  visibleSidebar2:any;
  first: number = 0;
  rows: number = 10;
  visible: boolean = false;
  constructor(private CapaService:CapaService){

  }
  ngOnInit(): void {
    this.CapaService.getDocumentData().subscribe((data: any) => {
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
