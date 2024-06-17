import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewRoleService } from '../../services/new-role.service';
import { CAPAModel, ChangeControlModel, DeviationModel, NewRole, Role } from 'src/app/models/newRole.model';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
//import { RegNewRole } from 'src/app/models/newRole.model';


export interface Parent {
  name: string;
  children: children[];
}

export interface children {
  name: string;
  subChildren: subChildren[];
}

export interface subChildren {
  name: string;
  value: boolean;
}

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  providers: [MessageService]

})

export class NewRoleComponent implements OnInit {
  RoleForm!: FormGroup;

  parents: Parent[] | undefined; // Predefined parent data


  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,
    private NewRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.parents = [
      {
        name: 'Parent-X',
        children: [
          {
            name: 'child-XA',
            subChildren: [
              { name: 'Sub-child-XA1', value: true },
              { name: 'Sub-child-XA2', value: false },
              { name: 'Sub-child-XA3', value: true }
            ]
          },
          {
            name: 'child-XB',
            subChildren: [
              { name: 'Sub-child-XB1', value: false },
              { name: 'Sub-child-XB2', value: true },
              { name: 'Sub-child-XB3', value: false }
            ]
          }
        ]
      },
      // ... other parents if needed
    ];

    this.RoleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      parents: []
      //parents: this.fb.array(this.parents.map(parent => this.createParentGroup(parent)))
    });
  }






  saveRoleClick() {
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
      console.log('Form submitted!', RegNewRole);
      this.messageService.add({ severity: 'success', summary: ' New Role Registered Successfully', detail: 'Message Content' });
    }
  }

  backToRoles() {
    this.router.navigateByUrl('/roles');
  }


}
