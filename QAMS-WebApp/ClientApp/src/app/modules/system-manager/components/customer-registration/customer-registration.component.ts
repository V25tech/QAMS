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
  id:number=0;
  editMode: boolean = false;
  customerReg: CustomerRegistration;
  editCCValue: CustomerRegistration;
  route: any;
  // CustomerRegistrationService: any;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, private customerService:CustomerRegistrationService,
    private batchLotService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
      this.BuildCustomerForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
        this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        debugger;        
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
  updateControlChange(ccValue: CustomerRegistration) {
    console.log(JSON.stringify(ccValue))
    this.customerService.updateCustomerDetails(this.editCCValue).subscribe((res: any) => {
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
      debugger;
      this.customerReg = res;
      let ccValue: CustomerRegistration = res; //JSON.parse(ccValueStr) ?? null;
      this.editCCValue = ccValue;
      if (ccValue) {
        this.customerRegistrationForm.patchValue(ccValue);
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
  
  


      // const customerRegistration: CustomerRegistration = {
      //   name: this. customerRegistrationForm.value.name,
      //   uniqueCode: this. customerRegistrationForm.value.uniqueCode,
      //   contactName: this. customerRegistrationForm.value.contactName,
      //   address: this. customerRegistrationForm.value.address,
      //   city: this. customerRegistrationForm.value.city,
      //   state: this. customerRegistrationForm.value.state,
      //   country: this. customerRegistrationForm.value.country,
      //   zipCode: this. customerRegistrationForm.value.zipCode,
      //   fax: this. customerRegistrationForm.value.fax,
      //   email: this. customerRegistrationForm.value.email,
      //   remarks: this. customerRegistrationForm.value.remarks
      // };
      debugger: any;
      customerRegistration(){
        if (this.customerRegistrationForm.valid) {
          console.log(this.customerRegistrationForm.value);
          let ccCustomerValue: CustomerRegistration = this.customerRegistrationForm.value;
          if (this.editMode) {
            this.updateControlChange(ccCustomerValue);
          }    
        else {
          this.saveControlChange(ccCustomerValue);
        }
      }
    }
   
}
