import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mc-work-transfer-request',
  templateUrl: './mc-work-transfer-request.component.html',
  styleUrls: ['./mc-work-transfer-request.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class McWorkTransferRequestComponent {
  dates: Date[] | undefined;
  
  constructor(private router: Router,
    private cdr: ChangeDetectorRef,private confirmationService: ConfirmationService, private messageService: MessageService) {

  }
 
  transferFromSource = [
    { label: 'Select', value: '' },
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Jane Smith', value: 'Jane Smith' },
    { label: 'Alice Johnson', value: 'Alice Johnson' },
  ];
  taskSource = [
    { label: 'Task 1', value: 'Task 1' },
    { label: 'Task 2', value: 'Task 2' },
    { label: 'Task 3', value: 'Task 3' },
    { label: 'Task 4', value: 'Task 4' },
    { label: 'Task 5', value: 'Task 5' },
    { label: 'Task 6', value: 'Task 6' },
  ];
  transferToSource = [
    { label: 'Select', value: '' },
    { label: 'Alice', value: 'Alice' },
    { label: 'Jane Smith', value: 'Jane Smith' },
  ];
  addRequest() { 
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
