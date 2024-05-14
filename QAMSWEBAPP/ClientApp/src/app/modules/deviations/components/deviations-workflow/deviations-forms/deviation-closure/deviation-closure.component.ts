import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-deviation-closure',
  templateUrl: './deviation-closure.component.html',
  styleUrls: ['./deviation-closure.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class DeviationClosureComponent {
  constructor( private cdr: ChangeDetectorRef,private confirmationService: ConfirmationService, 
    private messageService: MessageService,private router: Router){

  }
  
  displayBasic: boolean = false;
  selectedDecisionDetails:string="Implemented";
  externalFlag:boolean=true;
  internalFlag:boolean=false;
  applicableFlag:boolean=false;
  clearanceRequired:boolean=true;
  doesCapaClosed:boolean=true;
  decisionDetails = [
    { name: ' Critical', code: 'Critical' },
    { name: 'Major', code: 'Major' },
    { name: 'Minor', code: 'Minor' },

  ];
  selectionDecision(event: any) {
    
    this.selectedDecisionDetails = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();

}
selectRef(event:any){
  if(event.target.value ==='No'){
    this.clearanceRequired =false;
   }else if(event.target.value ==='Not Applicable'){
     this.clearanceRequired =false;
   }
   else{
     this.clearanceRequired=true;
   }
 }
 selectCapaPlans(event:any){
  if(event.target.value ==='Yes'){
    this.doesCapaClosed =false;
   }else if(event.target.value ==='Not Applicable'){
     this.doesCapaClosed =false;
   }
   else{
     this.doesCapaClosed =true;
   }
 }
submitClosuer(){
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
backToDEVClick(){
  this.router.navigateByUrl('/deviations');
}
}
