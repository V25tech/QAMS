import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-closure-cc',
  templateUrl: './closure-cc.component.html',
  styleUrls: ['./closure-cc.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClosureCCComponent {
  constructor( private cdr: ChangeDetectorRef,private confirmationService: ConfirmationService, 
    private messageService: MessageService,private router: Router){

  }
  
  displayBasic: boolean = false;
  selectedDecisionDetails:string="Implemented";
  decisionDetails = [
    { name: ' Implemented', code: ' Implemented' },
    { name: 'Partially Implemented ', code: 'Partially Implemented' },
    { name: 'Not Implemented ', code: 'Not Implemented' },

  ];
  selectionDecision(event: any) {
    
    this.selectedDecisionDetails = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();

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
backToCCClick(){
  this.router.navigateByUrl('/change-controls');
}
}
