import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CapaService } from 'src/app/modules/capa/services/capa.service';
export interface Documents{
  documentName:any;
}

@Component({
  selector: 'app-capa-dosseier-print-request',
  templateUrl: './capa-dosseier-print-request.component.html',
  styleUrls: ['./capa-dosseier-print-request.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CapaDosseierPrintRequestComponent implements OnInit {
  
  selectedProducts3?: Documents;
  dossierDetails:any;
  defaultRadioBtn = 0;
  displayInputsFlag:boolean=false;
  
  constructor(private router: Router,private CapaService:CapaService,
    private cdr:ChangeDetectorRef,private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  ngOnInit(): void {
   this.CapaService.getCapaDossierPrint().subscribe((res)=>{
    this.dossierDetails = res;
   })
  
  }
 toggle(value:any){
  this.displayInputsFlag = value ==='yes'?true:false;
  
 }
 submitDossier(){
  this.confirmationService.confirm({
    message: 'Are you sure that you want to Submit the Request?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
    },
    reject: () => {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
    }
  });
}
backToCapalick() {
  this.router.navigateByUrl('/capa');
}
}
