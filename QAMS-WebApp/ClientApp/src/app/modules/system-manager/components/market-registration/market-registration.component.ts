import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { MarketRegistrationService } from '../../services/market-registration.service';
import { MarketRegistration } from 'src/app/models/marketRegistration.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-registration',
  templateUrl: './market-registration.component.html',
  styleUrls: ['./market-registration.component.scss'],
  providers: [MessageService]
})
export class MarketRegistrationComponent {
  marketRegistrationForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, 
    private marketRegistration: MarketRegistrationService, private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
      this.marketRegistrationForm = this.fb.group({
        name: ['', Validators.required],
        uniqueCode: ['', Validators.required],
        remarks: [''],
      });
      this.cdr.detectChanges();
    }
  cancelClick(){
    
   }
   registerMarket(){
    if (this. marketRegistrationForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } 
    else {
      const mktRegistration: MarketRegistration = {
        name: this. marketRegistrationForm.value.name,
        uniqueCode: this. marketRegistrationForm.value.uniqueCode,
        remarks: this. marketRegistrationForm.value.remarks,       
      };
      this.marketRegistration.insertMarketData(mktRegistration).subscribe((data: any) => {        
      this.messageService.add({ severity: 'success', summary: 'market Registration Saved Successfull', detail: 'Message Content' });
           
        setTimeout(() => {
          this.backToMarkets();
        }, 1000);
      });  
  }
   }
   backToMarkets(){
    this.router.navigateByUrl('/markets');
  }
}
