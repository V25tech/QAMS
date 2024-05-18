import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginInitiateService } from 'src/app/modules/change-controls/services/login-initiate.service';
import { DeviationsService } from '../../services/deviations.service';
export interface Documents{
  documentName:any;
}
@Component({
  selector: 'app-devition-dossier-print-request',
  templateUrl: './devition-dossier-print-request.component.html',
  styleUrls: ['./devition-dossier-print-request.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class DevitionDossierPrintRequestComponent {
  selectedProducts3?: Documents;
  dossierDetails:any;
  defaultRadioBtn = 0;
  displayInputsFlag:boolean=false;
  
  constructor(private router: Router,private deviationService:DeviationsService,
    private cdr:ChangeDetectorRef,private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  ngOnInit(): void {
   this.deviationService.getDossierDetails().subscribe((res)=>{
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
  this.router.navigateByUrl('/deviations');
}

}
