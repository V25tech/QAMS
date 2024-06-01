import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ModifyUser } from 'src/app/models/modifyUser.model';
import { ModifyUserService } from '../../services/modify-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RegModifyUser } from 'src/app/models/modifyUser.model';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss'],
  providers: [MessageService]
})
export class ModifyUserComponent {
  modifyUserForm!: FormGroup;
  modifyUserDatasource: ModifyUser[]=[];
  selectRoleOption: any = "Administrator";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  selectedStatusFlag:boolean=true;
  selectedStatusValue:any;
  selectedStatusIndex:any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private modifyUserService: ModifyUserService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {
    this.modifyUserForm = this.fb.group({
      userId: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', Validators.required]
    
    });
    debugger;
    this.modifyUserService.getUserData().subscribe((data: any) => {
      this.modifyUserDatasource = data.response;
      // this.modifyUserDatasource.forEach(dataSource=>dataSource.createdDate = new Date(dataSource.createdDate))
    });
     
  }
  roleDetails=[
    { name: 'Administrator', code: 'Administrator' },
    { name: 'Reviewer ', code: 'Reviewer' }
   ]

  
 

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
  selectRole(event:any){
    this.selectRoleOption = event.target.value;
    this.cdr.detectChanges();
   }


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  visibleSidebar: any;
  visibleSidebar2:any;
  closeNavBar() {
    this.visibleSidebar = false;
    this.visibleSidebar2 = false;
  }
  regModifyUser() {
    if (this.modifyUserForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const RegModifyUser: RegModifyUser = {
        userId: this.modifyUserForm.value.userId,
        role: this.modifyUserForm.value.role,
        department: this.modifyUserForm.value.department,
        employeeId: this.modifyUserForm.value.employeeId,
        email: this.modifyUserForm.value.email
      };

      
      console.log('Form submitted!', RegModifyUser);
      this.messageService.add({ severity: 'success', summary: ' User Modified Successfully', detail: 'Message Content' });
    }
  }
  selectStatusType(event:any){
    this.selectedStatusValue = event.target.value;
    if(event.target.value ==="Active"){
     this.selectedStatusFlag = true;
    }else{
     this.selectedStatusFlag = false;
    }
   }
   
   status = [
     { label:'Active', value:'Active'},
     { label:'In Active', value:'In Active' }
     ];
     openFlyout(index:any){
       this.selectedIndex = index;
        this.selectedStatusFlag = !this.selectedStatusFlag;
     }


}
