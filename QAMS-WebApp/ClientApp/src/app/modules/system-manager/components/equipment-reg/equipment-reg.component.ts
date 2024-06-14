import { ChangeDetectorRef, Component } from '@angular/core';
import { EquipmentRegistrationService } from '../../services/equipment-registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EquipmentRegistration } from 'src/app/models/equipmentRegistration.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipment-reg',
  templateUrl: './equipment-reg.component.html',
  styleUrls: ['./equipment-reg.component.scss'],
  providers: [MessageService]
})
export class EquipmentRegComponent {
  equipmentRegForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, 
    private equipmentRegService: EquipmentRegistrationService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
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
     
      this.cdr.detectChanges();
    }
  cancelClick(){
    
  }
  registerEquipment(){
    if (this. equipmentRegForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const equipmentRegistration: EquipmentRegistration = {
        equipmentName: this. equipmentRegForm.value.equipmentName,
        equipmentId: this. equipmentRegForm.value.equipmentId,
        make: this. equipmentRegForm.value.make,
        model: this. equipmentRegForm.value.model,
        serialNumber: this. equipmentRegForm.value.serialNumber,
        installedLocation: this. equipmentRegForm.value.installedLocation,
        department: this. equipmentRegForm.value.department,
        installedOn: this. equipmentRegForm.value.installedOn,
        warranty: this. equipmentRegForm.value.warranty,
        suppliedBy: this. equipmentRegForm.value.suppliedBy,
        software: this. equipmentRegForm.value.software
      };

      // Submit the  Equipment Registration object to your service or backend
      debugger;

      this.equipmentRegService.insertCustomerDetails(equipmentRegistration).subscribe((data: any) => {
        console.log('Form submitted!', equipmentRegistration);
        this.messageService.add({ severity: 'success', summary: 'Equipment Registration Saved Successfull', detail: 'Message Content' });
        
      });
      this.router.navigateByUrl('/equipments');
  }
  
  }
  backToEquip(){
    this.router.navigateByUrl('/equipments');
  }
}
