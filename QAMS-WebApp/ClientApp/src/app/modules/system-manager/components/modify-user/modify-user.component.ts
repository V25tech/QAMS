import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ModifyUser } from 'src/app/models/modifyUser.model';
import { ModifyUserService } from '../../services/modify-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RegModifyUser } from 'src/app/models/modifyUser.model';
import { NewRoleService } from '../../services/new-role.service';
import { DepartmentsService } from '../../services/departments.service';
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
    //update code starts here
  id:number=0;
  editMode: boolean = false;
  userReg: RegModifyUser;
  editCCValue: RegModifyUser;   
  selectRoleOption: any = "Administrator";
  selecteddepart:any="";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  selectedStatusFlag:boolean=true;
  selectedStatusValue:any;
  selectedStatusIndex:any;
  roleDetails: any;
  departmentsDataSource: any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,  private route: ActivatedRoute,private roleService : NewRoleService,private DepartmentsService : DepartmentsService,
    private modifyUserService: ModifyUserService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {   
    this.BuildUserForm();
    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;           
      this.GetUserDetailsbyId(this.id);
      this.GetRoleDetails();
      this.GetDepartments();
    })
    this.modifyUserService.getUserData().subscribe((data: any) => {
      this.modifyUserDatasource = data.response;
      this.modifyUserDatasource.forEach(dataSource => (dataSource.createdDate = new Date(dataSource.createdDate)));      
    }); 
    
  }
    cancelClick(){
      this.router.navigateByUrl('/users');
    }
    saveControlChange(ccValue: RegModifyUser) {
      this.modifyUserService.insertUserDetails(ccValue).subscribe((data: any) => {
        console.log('Form submitted!', ccValue);
        this.messageService.add({ severity: 'success', summary: 'Usergroup Registration Saved Successfull', detail: 'Message Content' });
        setTimeout(() => {        
        }, 1000);
      });    
    }
    updateControlChange(ccValue: RegModifyUser) {
      console.log(JSON.stringify(ccValue))
      this.modifyUserService.updateUserDetails(this.editCCValue).subscribe(res => {
        console.log(res);
        this.backToUser();
      }, er => console.log(er));
    }
    backToUser(){
      this.router.navigateByUrl('/users');
    }
  GetDepartments()
  {
    this.DepartmentsService.getDepartmentsData().subscribe((data: any) => {
      debugger
      this.departmentsDataSource = data.response;      
    }); 
   }  
    GetUserDetailsbyId(id:number)
    {
      this.modifyUserService.GetUserById(id).subscribe((res:any) => {
        debugger;
        this.userReg = res;
        let ccValue: RegModifyUser = res; //JSON.parse(ccValueStr) ?? null;
        this.editCCValue = ccValue;
        if (ccValue) {
          this.modifyUserForm.patchValue(ccValue);
        }
      }, er => console.log(er));    
    }
    BuildUserForm(){
    this.modifyUserForm = this.fb.group({
      userId: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', Validators.required]    
    });    
    this.modifyUserForm.get('role').valueChanges.subscribe(value => {
      console.log('Selected role:', value);
      this.selectRoleOption = value;
      this.cdr.detectChanges();
    });

    this.modifyUserForm.get('department').valueChanges.subscribe(value => {
      console.log('Selected department:', value);
      debugger;
      this.selecteddepart = value;
      this.cdr.detectChanges();
    });


  }
  selectRole(event: Event): void {
    debugger
    console.log(this.modifyUserForm.value.role);
    const selectElement = event.target as HTMLSelectElement;
    console.log('Selected role (from event):', selectElement.value);
    this.selectRoleOption = selectElement.value;
    this.cdr.detectChanges();
    // Note: This method is not necessary if you're using the reactive form approach
  }
  selectDepartment(event: Event): void {
    debugger
    console.log(this.modifyUserForm.value.department);
    const selectElement = event.target as HTMLSelectElement;
    console.log('Selected department (from event):', selectElement.value);
    this.selecteddepart = selectElement.value;
    this.cdr.detectChanges();
    // Note: This method is not necessary if you're using the reactive form approach
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
      const RegModifyUserInfo: RegModifyUser = {
        userId: this.modifyUserForm.value.userId,
        role: this.modifyUserForm.value.role,
        department: this.modifyUserForm.value.department,
        employeeId: this.modifyUserForm.value.employeeId,
        email: this.modifyUserForm.value.email
      };   
      this.saveControlChange(RegModifyUserInfo);     
    }
  }

  GetRoleDetails()
  {
    debugger;
    this.roleService.getnewRoleData().subscribe((data: any) => {
      this.roleDetails = data.response;    
  });
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
     navigateToEditUser(id:number){    
      this.router.navigateByUrl('/edit-user-registration?Id='+id);
    }
    Openvisiblesidebar(id:number)
    {    
      this.visibleSidebar = true;
      this.BuildUserForm();
      if(id!=0)
        {
          this.editMode=true;
         this.GetUserDetailsbyId(id);       
        }        
    }
}
