import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected messageService: MessageService,
    private DepartmentsService: DepartmentsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.regDepartmentsForm = this.fb.group({
      departmentName: ['', Validators.required],
      departmentCode: ['', Validators.required]
    });

    this.DepartmentsService.getDepartmentsData().subscribe((data: any) => {
      debugger
      this.departmentsDataSource = data.response;
      this.departmentsDataSource.forEach(dataSource => (dataSource.date = new Date(dataSource.date)));
    });


  

    
  }

  regDepartments() {
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
        this.router.navigate(['/departments']);  // Navigate to the grid page
      });
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
    // Your implementation
  }
}
