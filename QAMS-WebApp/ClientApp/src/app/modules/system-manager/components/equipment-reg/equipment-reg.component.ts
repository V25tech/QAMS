import { ChangeDetectorRef, Component } from '@angular/core';
import { EquipmentRegistrationService } from '../../services/equipment-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EquipmentRegistration } from 'src/app/models/equipmentRegistration.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';


@Component({
  selector: 'app-equipment-reg',
  templateUrl: './equipment-reg.component.html',
  styleUrls: ['./equipment-reg.component.scss'],
  providers: [MessageService]
})
export class EquipmentRegComponent {
  equipmentRegForm!: FormGroup;
  id:number=0;
  editMode: boolean = false;
  equipmentReg: EquipmentRegistration;
  editCCValue: EquipmentRegistration;
  selecteddepart:any="";
  departmentsDataSource: any;
  //mainForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService,private route: ActivatedRoute,
    
    private equipmentRegService: EquipmentRegistrationService, private DepartmentsService : DepartmentsService,  private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
     
     this.BuildEquipForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {
        this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        debugger;        
        this.GetEquipmentDetailsbyId(this.id);
        this.GetDepartments();
      })

      this.equipmentRegForm.get('department').valueChanges.subscribe(value => {
        console.log('Selected department:', value);
        debugger;
        this.selecteddepart = value;
        this.cdr.detectChanges();
      }); 
      
    }
    selectDepartment(event: Event): void {
      debugger
      console.log(this.equipmentRegForm.value.department);
      const selectElement = event.target as HTMLSelectElement;
      console.log('Selected department (from event):', selectElement.value);
      this.selecteddepart = selectElement.value;
      this.cdr.detectChanges();
      // Note: This method is not necessary if you're using the reactive form approach
    }
    GetDepartments()
    {
      this.DepartmentsService.getDepartmentsData().subscribe((data: any) => {
        debugger
        this.departmentsDataSource = data.response;      
      }); 
     }  
  cancelClick(){
    this.router.navigateByUrl('/equipments');
  }
  saveControlChange(ccValue: EquipmentRegistration) {
    debugger;
    this.equipmentRegService.insertCustomerDetails(ccValue).subscribe((data: any) => {
      console.log('Form submitted!', ccValue);
      this.messageService.add({ severity: 'success', summary: 'Equipment Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToEquip();
      }, 1000);
    });    
  }
  updateControlChange(ccValue: EquipmentRegistration) {
    console.log(JSON.stringify(ccValue))
    this.equipmentRegService.updateEquipmentDetails(this.editCCValue).subscribe(res => {
      console.log(res);
      this.backToEquip();
    }, er => console.log(er));
  }
  backToEquip(){
    this.router.navigateByUrl('/equipments');
  }
  GetEquipmentDetailsbyId(id:number)
  {
    this.equipmentRegService.GetEquipmentById(id).subscribe((res:any) => {
      debugger;
      this.equipmentReg = res;
      let ccValue: EquipmentRegistration = res; //JSON.parse(ccValueStr) ?? null;
      this.editCCValue = ccValue;
      if (ccValue) {
        this.equipmentRegForm.patchValue(ccValue);
      }
    }, er => console.log(er));    
  }
  BuildEquipForm()
  {
    this.equipmentRegForm = this.fb.group({
      equipmentName: ['', Validators.required],
      equipmentId: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
      installedLocation: ['', Validators.required],
      department: ['', Validators.required],
      installedOn: ['', Validators.required],
      warranty: ['', Validators.required],
      suppliedBy: ['', Validators.required],
      software: ['']
    });

  
    
  }
  registerEquipment(){
    if (this.equipmentRegForm.valid) {
      console.log(this.equipmentRegForm.value);
      let ccEquipValue: EquipmentRegistration = this.equipmentRegForm.value;
      if (this.editMode) {
        this.updateControlChange(ccEquipValue);
      }    
    else {
      this.saveControlChange(ccEquipValue);
    }
  }
}
}
