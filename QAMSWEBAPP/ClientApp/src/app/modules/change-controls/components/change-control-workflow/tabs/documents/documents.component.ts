import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ChangeControlsDocument } from 'src/app/models/changecontrol.model';
import { LoginInitiateService } from 'src/app/modules/change-controls/services/login-initiate.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit{
  documentDatasource:ChangeControlsDocument[]=[];
  visibleSidebar2:any;
  first: number = 0;
  rows: number = 10;
  visible: boolean = false;
  constructor(private loginInitiateService:LoginInitiateService){

  }
  ngOnInit(): void {
    this.loginInitiateService.getDocumentData().subscribe((data: any) => {
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
