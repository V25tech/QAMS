import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Departments, RegNewdepartment } from 'src/app/models/departments.model';
import { DepartmentsService } from '../../services/departments.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-deparments',
  templateUrl: './deparments.component.html',
  styleUrls: ['./deparments.component.scss'],
  providers: [MessageService]
})
export class DeparmentsComponent {
  regDepartmentsForm!: FormGroup;
  departmentsDataSource: Departments[] = [];
  //update code starts here
  id:number=0;
  editMode: boolean = false;
  equipmentReg: RegNewdepartment;
  editCCValue: RegNewdepartment;
  //mainForm: FormGroup;

  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    protected messageService: MessageService,
    private DepartmentsService: DepartmentsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
   debugger;
    this.BuildDepartmentForm();
     this.cdr.detectChanges();
     this.route.queryParams.subscribe(params => {
       this.id = Number.parseInt(params['Id']);
       let splitItesms = this.id;
       debugger;        
       this.GetDepartmentDetailsbyId(this.id);
     })
     this.DepartmentsService.getDepartmentsData().subscribe((data: any) => {
      debugger
      this.departmentsDataSource = data.response;
      this.departmentsDataSource.forEach(dataSource => (dataSource.date = new Date(dataSource.date)));
    }); 
   }
 cancelClick(){
   this.router.navigateByUrl('/departments');
 }
 saveControlChange(ccValue: RegNewdepartment) {
   this.DepartmentsService.insertDepartmentDetails(ccValue).subscribe((data: any) => {
     console.log('Form submitted!', ccValue);
     this.messageService.add({ severity: 'success', summary: 'Equipment Registration Saved Successfull', detail: 'Message Content' });
     setTimeout(() => {
       this.backToEquip();
     }, 1000);
   });    
 }
 updateControlChange(ccValue: RegNewdepartment) {
   console.log(JSON.stringify(ccValue))
   this.DepartmentsService.updateDepartmentDetails(this.editCCValue).subscribe(res => {
     console.log(res);
     this.backToEquip();
   }, er => console.log(er));
 }
 backToEquip(){
   this.router.navigateByUrl('/departments');
 }
 GetDepartmentDetailsbyId(id:number)
 {
   this.DepartmentsService.GetDepartmentById(id).subscribe((res:any) => {
     debugger;
     this.equipmentReg = res;
     let ccValue: RegNewdepartment = res; //JSON.parse(ccValueStr) ?? null;
     this.editCCValue = ccValue;
     if (ccValue) {
       this.regDepartmentsForm.patchValue(ccValue);
     }
   }, er => console.log(er));    
 }
 BuildDepartmentForm(){
  this.regDepartmentsForm = this.fb.group({
    departmentName: ['', Validators.required],
    departmentCode: ['', Validators.required]
  });
 }
 regDepartments(){
  if (this.regDepartmentsForm.valid) {
    console.log(this.regDepartmentsForm.value);
    let ccEquipValue: RegNewdepartment = this.regDepartmentsForm.value;
    if (this.editMode) {
      this.updateControlChange(ccEquipValue);
    }    
    else {
      this.saveControlChange(ccEquipValue);
    }
  }  
    if (this.regDepartmentsForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {
      const RegNewdepartment: RegNewdepartment = {
        departmentName: this.regDepartmentsForm.value.departmentName,
        departmentCode: this.regDepartmentsForm.value.departmentCode
      };

      this.DepartmentsService.insertDepartmentDetails(RegNewdepartment).subscribe((data: any) => {
        console.log('Form submitted!', RegNewdepartment);
        this.messageService.add({ severity: 'success', summary: 'New department Registered Successfully', detail: 'Message Content' });
        //this.router.navigate(['/departments']);  // Navigate to the grid page
        setTimeout(() => {
          this.closeNavBar();
        }, 1000);
    
       
      });
    }
  }
//update code edns here
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
    // Your implementation
  }
  navigateToEditDepartment(id:number){    
    this.router.navigateByUrl('/department?Id='+id);
  }
  Openvisiblesidebar(id:number)
  {    
    this.visibleSidebar = true;
    this.BuildDepartmentForm();
    if(id!=0)
      {
        this.editMode=true;
       this.GetDepartmentDetailsbyId(id);       
      }
      
  }
}
