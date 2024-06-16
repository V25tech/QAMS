import { ChangeDetectorRef, Component } from '@angular/core';
import { EquipmentRegistrationService } from '../../services/equipment-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EquipmentRegistration } from 'src/app/models/equipmentRegistration.model';
import { ActivatedRoute, Router } from '@angular/router';


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
  //mainForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, private route: ActivatedRoute,
    
    private equipmentRegService: EquipmentRegistrationService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
     
     this.BuildEquipForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {
        this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        debugger;        
        this.GetEquipmentDetailsbyId(this.id);
      })
      
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

  //   this.equipmentRegForm = this.fb.group({
  //  // const equipmentRegistration: EquipmentRegistration = {
  //     id: this.equipmentRegForm.value.id,
  //     equipmentName: this. equipmentRegForm.value.equipmentName,
  //     equipmentId: this. equipmentRegForm.value.equipmentId,
  //     make: this. equipmentRegForm.value.make,
  //     model: this. equipmentRegForm.value.model,
  //     serialNumber: this. equipmentRegForm.value.serialNumber,
  //     installedLocation: this. equipmentRegForm.value.installedLocation,
  //     department: this. equipmentRegForm.value.department,
  //     installedOn: this. equipmentRegForm.value.installedOn,
  //     warranty: this. equipmentRegForm.value.warranty,
  //     suppliedBy: this. equipmentRegForm.value.suppliedBy,
  //     software: this. equipmentRegForm.value.software
  //   });
    
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
