import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { CustomerRegistration } from 'src/app/models/customerRegistration.model';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
  providers: [MessageService]
})
export class CustomerRegistrationComponent {

  customerRegistrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private messageService: MessageService, 
    private batchLotService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
      this.customerRegistrationForm = this.fb.group({
        name: ['', Validators.required],
        uniqueCode: ['', Validators.required],
        contactName: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipCode: ['', Validators.required],
        fax: ['', Validators.required],
        email: ['', Validators.required],
        remarks: ['']
      });
     
      this.cdr.detectChanges();
    }
  cancelClick(){
    
  }
  customerRegistration(){
    if (this. customerRegistrationForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const customerRegistration: CustomerRegistration = {
        name: this. customerRegistrationForm.value.name,
        uniqueCode: this. customerRegistrationForm.value.uniqueCode,
        contactName: this. customerRegistrationForm.value.contactName,
        address: this. customerRegistrationForm.value.address,
        city: this. customerRegistrationForm.value.city,
        state: this. customerRegistrationForm.value.state,
        country: this. customerRegistrationForm.value.country,
        zipCode: this. customerRegistrationForm.value.zipCode,
        fax: this. customerRegistrationForm.value.fax,
        email: this. customerRegistrationForm.value.email,
        remarks: this. customerRegistrationForm.value.remarks
      };

      // Submit the  Customer Registration object to your service or backend
      console.log('Form submitted!', customerRegistration);
      this.messageService.add({ severity: 'success', summary: 'Customer Registration Saved Successfull', detail: 'Message Content' });
  }
}
}
