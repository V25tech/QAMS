import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { CustomerRegistration } from 'src/app/models/customerRegistration.model';
import { CustomerRegistrationService } from '../../services/customer-registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
  providers: [MessageService]
})
export class CustomerRegistrationComponent {

  customerRegistrationForm!: FormGroup;
  // CustomerRegistrationService: any;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, private customerService:CustomerRegistrationService,
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
      debugger;

      this.customerService.insertCustomerDetails(customerRegistration).subscribe((data: any) => {
        console.log('Form submitted!', customerRegistration);
        this.messageService.add({ severity: 'success', summary: 'Customer Registration Saved Successfull', detail: 'Message Content' });
        
        setTimeout(() => {
          this.backToCustomers();
        }, 1000);
      });  
  }
}
backToCustomers(){
  this.router.navigateByUrl('/customers');
}
}
