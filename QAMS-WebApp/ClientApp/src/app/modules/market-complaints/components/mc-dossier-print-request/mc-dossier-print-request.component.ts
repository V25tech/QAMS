import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { MarketComplaintsService } from 'src/app/modules/market-complaints/services/market-complaints.service';
export interface Documents{
  documentName:any;
}
@Component({
  selector: 'app-mc-dossier-print-request',
  templateUrl: './mc-dossier-print-request.component.html',
  styleUrls: ['./mc-dossier-print-request.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class McDossierPrintRequestComponent {
  selectedProducts3?: Documents;
  dossierDetails:any;
  defaultRadioBtn = 0;
  displayInputsFlag:boolean=false;
  
  constructor(private router: Router,private MarketComplaintsService:MarketComplaintsService,
    private cdr:ChangeDetectorRef,private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  ngOnInit(): void {
   this.MarketComplaintsService.getDossierData().subscribe((res)=>{
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
backToMcClick() {
  this.router.navigateByUrl('/market-complaints');
}
}
