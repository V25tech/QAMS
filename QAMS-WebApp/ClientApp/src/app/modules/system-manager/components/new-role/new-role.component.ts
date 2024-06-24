import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  
  roleInfo:Role;
  changeCntrl: ChangeControlModel;
  deviationCntrl : DeviationModel;
  CAPACntrl:CAPAModel;
  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,  
    private NewRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  

    this.RoleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      parents: []
      
    });
  }






  saveRoleClick(roleValue: Role) {
    debugger;
    if (this.RoleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {
      const RegNewRole: Role = {
        name: this.RoleForm.value.newRole,
        description: this.RoleForm.value.description,
        createdBy: '',
        createdDate: undefined,
        modifiedBy: '',
        modifiedDate: undefined,
        changeControlRoles: new ChangeControlModel,
        deviationRoles: new DeviationModel,
        capaRoles: new CAPAModel
      };
      roleValue.changeControlRoles=this.changeCntrl;
      roleValue.deviationRoles=this.deviationCntrl;
      roleValue.capaRoles=this.CAPACntrl;
      this.NewRoleService.insertNewRoleDetails(roleValue).subscribe((data: any) => {
        console.log('New Role submitted!', roleValue);
        this.messageService.add({ severity: 'success', summary: 'New Role Saved Successfull', detail: 'Message Content' });
        setTimeout(() => {        
        }, 1000);
      });       
    }
  }  
  backToRoles() {
    this.router.navigateByUrl('/roles');
  }


}
