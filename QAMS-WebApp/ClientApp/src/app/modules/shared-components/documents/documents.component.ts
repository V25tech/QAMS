import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { ChangeControlsDocument } from 'src/app/models/changecontrol.model';
import { LoginInitiateService } from 'src/app/modules/change-controls/services/login-initiate.service';
import { DocumentService } from '../../shared-services/document.service';
import { MessageService } from 'primeng/api';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [MessageService]
})
export class DocumentsComponent implements OnInit {
  documentDatasource: ChangeControlsDocument[] = [];
  visibleSidebar2: any;
  first: number = 0;
  rows: number = 10;
  visible: boolean = false;
  initiativeId: number = 0;
  file: File | null = null;
  description = '';
  title = '';
  constructor(private loginInitiateService: LoginInitiateService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private documentService: DocumentService) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      let splitItesms = id.split('-');
      this.initiativeId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadDocuments(this.initiativeId, 'ChangeControl');
    })

  }

  loadDocuments(initID: number, initType: string) {

    this.documentService.getAllDocuments(initID, initType).subscribe((data) => {
      console.log(data);
      this.documentDatasource = data;
    }, er => console.log(er));

    // this.loginInitiateService.getDocumentData().subscribe((data: any) => {
    //   this.documentDatasource = data;
    //   this.documentDatasource.forEach(dataSource => (dataSource.date = new Date(dataSource.date)))
    // });
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      this.file = target.files[0];
    }
  }

  onSubmit(): void {
    if (this.file) {
      const formData: FormData = new FormData();
      formData.append('file', this.file);
      formData.append('description', this.description);
      formData.append('title', this.title);
      formData.append('parentControlId', this.initiativeId.toString());
      formData.append('parentType', 'ChangeControl');
      formData.append('CreatedBy', '123');
      this.documentService.uploadAndSaveInfo(formData).subscribe(event => {
        if (event) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Document Uploaded Successfully' });
          this.closeNavBar();
        }
      }, er => console.log(er));
    }
  }

  closeNavBar() {
    this.visibleSidebar2 = false;
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

  showDialog() {
    this.visible = true;
  }
}
