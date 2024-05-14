import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginInitiateService } from '../../services/login-initiate.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
export interface Documents{
  documentName:any;
}

@Component({
  selector: 'app-dossier-print-request',
  templateUrl: './dossier-print-request.component.html',
  styleUrls: ['./dossier-print-request.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class DossierPrintRequestComponent implements OnInit{
  selectedProducts3?: Documents;
  dossierDetails:any;
  defaultRadioBtn = 0;
  displayInputsFlag:boolean=false;
  
  constructor(private router: Router,private loginInitiationService:LoginInitiateService,
    private cdr:ChangeDetectorRef,private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  ngOnInit(): void {
   this.loginInitiationService.getDossierDetails().subscribe((res)=>{
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
backToCCClick() {
  this.router.navigateByUrl('/change-controls');
}

}
