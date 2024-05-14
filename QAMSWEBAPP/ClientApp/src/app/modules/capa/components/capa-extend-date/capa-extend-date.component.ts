import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-capa-extend-date',
  templateUrl: './capa-extend-date.component.html',
  styleUrls: ['./capa-extend-date.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CapaExtendDateComponent {
  constructor(private router: Router,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  defaultRadioBtn = 0;
  dates: Date[] | undefined;

  confirm1() {
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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Extension of Target Date Submitted' });
  }
  backToCapaClick(){
    this.router.navigateByUrl('/capa');
  }
}
