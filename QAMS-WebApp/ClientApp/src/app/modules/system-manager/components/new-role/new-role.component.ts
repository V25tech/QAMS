import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewRoleService } from '../../services/new-role.service';
import { CAPAModel, ChangeControlModel, DeviationModel, NewRole, Role } from 'src/app/models/newRole.model';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  providers: [MessageService]
})
export class NewRoleComponent implements OnInit {
  RoleForm!: FormGroup;
// updated code starts here

    id:number=0;
   editMode: boolean = false;
   roleReg: NewRole;
   editCCValue: NewRole;
   

  roleInfo=new Role();
  changeCntrl=new ChangeControlModel();
  deviationCntrl =new DeviationModel();
  CAPACntrl=new CAPAModel();
  
  constructor(private fb: FormBuilder, private router: Router,  private route: ActivatedRoute,protected messageService: MessageService, 
    private NewRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void{
   

    this.BuildRoleForm();
    this.cdr.detectChanges();
    //this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;
      debugger;        
      this.GetRoleById(this.id);
    })
    
  }
cancelClick(){
  this.router.navigateByUrl('/roles');
}
saveControlChange(ccValue: NewRole) {
  // this.NewRoleService.insertNewRoleDetails(ccValue).subscribe((data: any) => {
  //   console.log('Form submitted!', ccValue);
  //   this.messageService.add({ severity: 'success', summary: 'Role Registration Saved Successfull', detail: 'Message Content' });
  //   setTimeout(() => {
  //     this.backToRoles();
  //   }, 1000);
  // });    
}
updateControlChange(ccValue: NewRole) {
  console.log(JSON.stringify(ccValue))
  // this.NewRoleService.updateRoleDetails(this.editCCValue).subscribe((res: any) => {
  //   console.log(res);
  //   this.backToRoles();
  // }, (er: any) => console.log(er));
}
backToRoles(){
  this.router.navigateByUrl('/roles');
}
GetRoleById(id:number)
{
  this.NewRoleService.GetRoleById(id).subscribe((res:any) => {
    debugger;
    this.roleReg = res;
    let ccValue: NewRole = res; //JSON.parse(ccValueStr) ?? null;
    this.editCCValue = ccValue;
    if (ccValue) {
      this.RoleForm.patchValue(ccValue);
    }
  }, (er: any) => console.log(er));    
}
BuildRoleForm()
{




    this.changeCntrl = new ChangeControlModel(); // Default value (can be true or false based on your logic)
    this.deviationCntrl=new DeviationModel();
    this.CAPACntrl=new CAPAModel();
    this.RoleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ChangeControlModel: this.fb.group({
        controlLoginInitiation: [this.changeCntrl.controlLoginInitiation], // Default value (can be true or false based on your logic)
        hodReview: [this.changeCntrl.hodReview],
        qaReview:[this.changeCntrl.qaReview],
        cftReview:[this.changeCntrl.cftReview],
        customerNotification:[this.changeCntrl.customerNotification],
        qaDecision:[this.changeCntrl.qaDecision],
        actionPlan:[this.changeCntrl.actionPlan],
        finalClosure:[this.changeCntrl.finalClosure],
        extensionOfTargetDate:[this.changeCntrl.extensionOfTargetDate],
        workTransfer:[this.changeCntrl.workTransfer],
        dossierPrint:[this.changeCntrl.dossierPrint],
        auditTrials:[this.changeCntrl.auditTrials],
        reports:[this.changeCntrl.reports]
        })   ,      
      DeviationModel :this.fb.group({
        deviationInitiation:[this.deviationCntrl.deviationInitiation],
        hodReview_Deviation:[this.deviationCntrl.hodReview_Deviation],
        qaReview_Deviation:[this.deviationCntrl.qaDecision_Deviation],
        cftReview_Deviation:[this.deviationCntrl.cftReview_Deviation],
        customerNotification_Deviation:[this.deviationCntrl.customerNotification_Deviation],
        investigation:[this.deviationCntrl.investigation],
        qaDecision_Deviation:[this.deviationCntrl.qaDecision_Deviation],
        actionPlan_Deviation:[this.deviationCntrl.actionPlan_Deviation],
        finalClosure_QA:[this.deviationCntrl.finalClosure_QA],
        extensionOfTargetDate_Deviation:[this.deviationCntrl.extensionOfTargetDate_Deviation],
        dossierPrint_Deviation:[this.deviationCntrl.dossierPrint_Deviation],
        auditTrials_Deviation:[this.deviationCntrl.auditTrials_Deviation],
        reports_Deviation:[this.deviationCntrl.reports_Deviation],
        workTransfer_Deviation:[this.deviationCntrl.workTransfer_Deviation]
      }),
    CAPAModel :this.fb.group({
      capaInitiation:[this.CAPACntrl.capaInitiation],
      hodReview_CAPA:[this.CAPACntrl.hodReview_CAPA],
      qaReview_CAPA:[this.CAPACntrl.qaReview_CAPA],
      cftReview_CAPA:[this.CAPACntrl.cftReview_CAPA],
      qaDecision_CAPA:[this.CAPACntrl.qaDecision_CAPA],
      actionPlan_CAPA:[this.CAPACntrl.actionPlan_CAPA],
      finalClosure_QA_CAPA:[this.CAPACntrl.finalClosure_QA_CAPA],
      extensionOfTargetDate_CAPA:[this.CAPACntrl.extensionOfTargetDate_CAPA],
      workTransfer_CAPA:[this.CAPACntrl.workTransfer_CAPA],
      dossierPrint_CAPA:[this.CAPACntrl.dossierPrint_CAPA],
      auditTrials_CAPA:[this.CAPACntrl.auditTrials_CAPA],
      reports_CAPA:[this.CAPACntrl.reports_CAPA]
    })
    })
  }
  debugger: any;
  roleRegistration(){
    if (this.RoleForm.valid) {
      console.log(this.RoleForm.value);
      let ccRoleValue: NewRole = this.RoleForm.value;
      if (this.editMode) {
        this.updateControlChange(ccRoleValue);
      }    
    else {
      this.saveControlChange(ccRoleValue);
    }
  }
}

//updated code ends here
  
  saveRoleClick(roleValue: Role) {
    debugger;
    if (this.RoleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {
      const RegNewRole: Role = {
        id:this.RoleForm.value.id,
        name: this.RoleForm.value.name,
        description: this.RoleForm.value.description,
        createdBy: '',
        createdDate: undefined,
        modifiedBy: '',
        modifiedDate: undefined,
        changeControlRoles: this.RoleForm.value.ChangeControlModel,
        deviationRoles: this.RoleForm.value.DeviationModel,
        capaRoles: this.RoleForm.value.CAPAModel
      };
      roleValue=RegNewRole;
      roleValue.changeControlRoles=RegNewRole.changeControlRoles;
      roleValue.deviationRoles=RegNewRole.deviationRoles;
      roleValue.capaRoles=RegNewRole.capaRoles;
      this.NewRoleService.insertNewRoleDetails(roleValue).subscribe((data: any) => {
        console.log('New Role submitted!', roleValue);
        this.messageService.add({ severity: 'success', summary: 'New Role Saved Successfull', detail: 'Message Content' });
        setTimeout(() => {        
        }, 1000);
      });       
    }
  }  
  // backToRoles() {
  //    this.router.navigateByUrl('/roles');
  //  }
}
