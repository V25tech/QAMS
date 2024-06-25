import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { NewRoleService } from '../../services/new-role.service';
import { CAPAModel, ChangeControlModel, DeviationModel, NewRole, Role } from 'src/app/models/newRole.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
//import { RegNewRole } from 'src/app/models/newRole.model';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],  
  providers: [MessageService]
})
export class RolesComponent {
  newRoleForm!: FormGroup;
  newRoleDataSource: NewRole[] = [];

  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;

  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,
    private NewRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.newRoleForm = this.fb.group({
      newRole: ['', Validators.required],
      description: ['', Validators.required]


    });
    debugger;
    this.NewRoleService.getnewRoleData().subscribe((data: any) => {
      this.newRoleDataSource = data.response;
      //this.newRoleDataSource.forEach(dataSource => (dataSource.createdDate = new Date(dataSource.createdDate)))
    });

  }

  newRoleClick(){
    this.router.navigateByUrl('/new-role');
  }
  regNewRole() {
    if (this.newRoleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const RegNewRole: Role = {
        id: this.newRoleForm.value.id,
        name: this.newRoleForm.value.newRole,
        description: this.newRoleForm.value.description,
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


  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  toggleMenu(index: any) {
    this.selectedIndex = index;
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  visibleSidebar: any;
  closeNavBar() {
    this.visibleSidebar = false;
  }
  goToSetFunctionalProfile() {

  }
  navigateToEditRoles(id:number){
    debugger;
    this.router.navigateByUrl('/new-role');
  }

}

