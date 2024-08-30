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
  editEQValue: EquipmentRegistration;
  selecteddepart:any="";
  departmentsDataSource: any;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService,private route: ActivatedRoute,
    
    private equipmentRegService: EquipmentRegistrationService, private DepartmentsService : DepartmentsService,  private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {     
     this.BuildEquipForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {
        this.id = Number.parseInt(params['Id']);
        if(this.id)
          {
            
            this.editMode=true;                 
          }      
        let splitItesms = this.id;            
        this.GetEquipmentDetailsbyId(this.id);
        this.GetDepartments();
      })
      this.equipmentRegForm.get('department').valueChanges.subscribe(value => {
        console.log('Selected department:', value);
        this.selecteddepart = value;
        this.cdr.detectChanges();
      });       
    }
    selectDepartment(event: Event): void {
      
      console.log(this.equipmentRegForm.value.department);
      const selectElement = event.target as HTMLSelectElement;
      console.log('Selected department (from event):', selectElement.value);
      this.selecteddepart = selectElement.value;
      this.cdr.detectChanges();      
    }
    GetDepartments()
    {
      this.DepartmentsService.getDepartmentsData().subscribe((data: any) => { 
               
        this.departmentsDataSource = data.response;      
      }); 
     }  
  cancelClick(){
    this.router.navigateByUrl('/equipments');
  }
  saveControlChange(ccValue: EquipmentRegistration) {    
    
    this.equipmentRegService.insertCustomerDetails(ccValue).subscribe((data: any) => {
      console.log('Form submitted!', ccValue);
      this.messageService.add({ severity: 'success', summary: 'Equipment Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToEquip();
      }, 1000);
    });    
  }
  updateControlChange(eqValue: EquipmentRegistration) {
    console.log(JSON.stringify(eqValue))
    this.equipmentRegService.updateEquipmentDetails(this.editEQValue).subscribe(res => {
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
      
      this.equipmentReg = res;
      let eqValue: EquipmentRegistration = res; 
      this.editEQValue = eqValue;
      if (eqValue) {
        this.equipmentRegForm.patchValue(eqValue);
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
      let equipValue: EquipmentRegistration = this.equipmentRegForm.value;
      if (this.editMode) {
        this.updateControlChange(equipValue);
      }    
    else {
      this.saveControlChange(equipValue);
    }
  }
}
}
