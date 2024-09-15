import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Closure } from 'src/app/models/closure.model';
import { ClosureService } from 'src/app/modules/change-controls/services/closure.service';

@Component({
  selector: 'app-closure-cc',
  templateUrl: './closure-cc.component.html',
  styleUrls: ['./closure-cc.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClosureCCComponent {
  constructor(private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private closureService: ClosureService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  closure: Closure = this.getEmptyClosure();
  id: any;
  changeControlId: number = 0;
  displayBasic: boolean = false;
  selectedDecisionDetails: string = "Implemented";
  decisionDetails = [
    { name: ' Implemented', code: ' Implemented' },
    { name: 'Partially Implemented ', code: 'Partially Implemented' },
    { name: 'Not Implemented ', code: 'Not Implemented' },

  ];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadClosure();
    })
  }


  loadClosure() {
    this.closureService.getClosurebyintid(this.changeControlId).subscribe((data: any) => {
      this.closure = data?? this.getEmptyClosure();
    }, er => {
      console.log(er);
      this.closure = this.getEmptyClosure();
    });
  }

  getEmptyClosure() {
    let cclousre: Closure = {
      isApprovedChangesEff: null,
      trainingCompleted:null,
      isAllDocumentsApprovedEff:null,
      isIdentifiedActions:null,
    }
    return cclousre;
  }

  saveClosure() {

    this.closure.isSave = false;
    this.closure.initiativeId = this.changeControlId;
    this.closure.initiativeName = "ChangeControl";
    this.closure.plant = 3;
    this.closure.createdBy = 1234;
    this.closure.updatedBy = 1234;
    this.closureService.saveClosure(this.closure).subscribe((data: any) => {
      console.log(data);
    }, er => console.log(er));
  }


  submitClosuer() {
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
