import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { MarketRegistrationService } from '../../services/market-registration.service';
import { MarketRegistration } from 'src/app/models/marketRegistration.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-market-registration',
  templateUrl: './market-registration.component.html',
  styleUrls: ['./market-registration.component.scss'],
  providers: [MessageService]
})
export class MarketRegistrationComponent {
  marketRegistrationForm!: FormGroup;
  id:number=0;
  marketReg: MarketRegistration;
  editMode: boolean = false;
  editCCValue: MarketRegistration;
  //MarketRegistrationService: any;
  // mainForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private messageService: MessageService, private route: ActivatedRoute,
    private marketRegistration: MarketRegistrationService, private cdr: ChangeDetectorRef ,private primengConfig: PrimeNGConfig,) { }
    ngOnInit(): void {
      this.BuildEquipForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {
        this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        debugger;        
        this.GetMarketDetailsbyId(this.id);
      })
      
    }
  cancelClick(){
    this.router.navigateByUrl('/markets');
  }
  saveControlChange(ccValue: MarketRegistration) {
    this.marketRegistration.insertMarketData(ccValue).subscribe((data: any) => {
      console.log('Form submitted!', ccValue);
      this.messageService.add({ severity: 'success', summary: 'Markets Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToMarkets();
      }, 1000);
    });    
  }
  updateControlChange(ccValue: MarketRegistration) {
    console.log(JSON.stringify(ccValue))
    this.marketRegistration.updateMarketDetails(this.editCCValue).subscribe((res: any) => {
      console.log(res);
      this.backToMarkets();
    }, (er: any) => console.log(er));
  }
  backToMarkets(){
    this.router.navigateByUrl('/markets');
  }
  GetMarketDetailsbyId(id:number)
  {
    debugger;
    this.marketRegistration.GetMarketById(id).subscribe((res:any) => {
      
      this.marketReg = res;
      let ccValue: MarketRegistration = res; //JSON.parse(ccValueStr) ?? null;
      this.editCCValue = ccValue;
      if (ccValue) {
        this.marketRegistrationForm.patchValue(ccValue);
      }
    }, (er: any) => console.log(er));    
  }
  BuildEquipForm(){
    this.marketRegistrationForm = this.fb.group({
      name: ['', Validators.required],
      uniqueCode: ['', Validators.required],
      remarks: ['', Validators.required],
    });
  }
  registerMarket(){
    if (this.marketRegistrationForm.valid) {
      console.log(this.marketRegistrationForm.value);
      let ccEquipValue: MarketRegistration = this.marketRegistrationForm.value;
      if (this.editMode) {
        this.updateControlChange(ccEquipValue);
      }    
    else {
      this.saveControlChange(ccEquipValue);
    }
  }
 
} 
}
