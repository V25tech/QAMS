import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { CustomerRegistration } from 'src/app/models/customerRegistration.model';
import { CustomerRegistrationService } from '../../services/customer-registration.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
  providers: [MessageService]
})
export class CustomerRegistrationComponent {
  customerRegistrationForm!: FormGroup;
  id:number=0;
  editMode: boolean = false;
  customerReg: CustomerRegistration;
  editCustValue: CustomerRegistration;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, private route: ActivatedRoute, private customerService:CustomerRegistrationService,
    private batchLotService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
      this.BuildCustomerForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {   this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        //debugger;
        this.GetCustomerById(this.id);
      })
      
    }
  cancelClick(){
    this.router.navigateByUrl('/customers');
  }
  saveControlChange(ccValue: CustomerRegistration) {
    this.customerService.insertCustomerDetails(ccValue).subscribe((data: any) => {
      console.log('Form submitted!', ccValue);
      this.messageService.add({ severity: 'success', summary: 'Customer Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToCustomers();
      }, 1000);
    });    
  }
  updateControlChange(custValue: CustomerRegistration) {
    console.log(JSON.stringify(custValue))
    this.customerService.updateCustomerDetails(this.editCustValue).subscribe((res: any) => {
      console.log(res);
      this.backToCustomers();
    }, (er: any) => console.log(er));
  }
  backToCustomers(){
    this.router.navigateByUrl('/customers');
  }
  GetCustomerById(id:number)
  {
    this.customerService.GetCustomerById(id).subscribe((res:any) => {
      //debugger;
      this.customerReg = res;
      let custValue: CustomerRegistration = res;
      this.editCustValue = custValue;
      if (custValue) {
        this.customerRegistrationForm.patchValue(custValue);
      }
    }, (er: any) => console.log(er));    
  }
  BuildCustomerForm()
  {      
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
     // debugger: any;
      customerRegistration(){
        if (this.customerRegistrationForm.valid) {
          console.log(this.customerRegistrationForm.value);
          let CustomerValue: CustomerRegistration = this.customerRegistrationForm.value;
          if (this.editMode) {
            this.updateControlChange(CustomerValue);
          }    
        else {
          this.saveControlChange(CustomerValue);
        }
      }
    }   
}
