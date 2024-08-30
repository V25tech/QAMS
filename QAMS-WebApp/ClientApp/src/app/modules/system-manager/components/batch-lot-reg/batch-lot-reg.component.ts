import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { BatchLotParticulars } from 'src/app/models/BatchLotParticulars.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-batch-lot-reg',
  templateUrl: './batch-lot-reg.component.html',
  styleUrls: ['./batch-lot-reg.component.scss'],
  providers: [MessageService]
})
export class BatchLotRegComponent implements OnInit{
batchLotParticularsForm!: FormGroup;  
id:number=0;
editMode: boolean = false;
batchlotparticularsReg: BatchLotParticulars;
editBatchValue: BatchLotParticulars;
materialDetails:any[]=[];
constructor(private fb: FormBuilder, private messageService: MessageService,private router: Router, private route:ActivatedRoute,
  private batchLotService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {     
    this.BuildBatchlotForm();
    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;
              
      this.GetBatchlotDetailsbyId(this.id);
    })
  }
  cancelClick(){
    this.router.navigateByUrl('/batch-lot-particulars');
  }
  saveControlChange(ccValue: BatchLotParticulars) {
    this.batchLotService.insertBatchDetails(ccValue).subscribe((data: any) => {
      console.log('Form submitted!', ccValue);
      this.messageService.add({ severity: 'success', summary: 'Batch Lot Particulars Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToBatchLot();
      }, 1000);
    });    
  }
  updateControlChange(ccValue: BatchLotParticulars) {
    console.log(JSON.stringify(ccValue))
    this.batchLotService.updateBatchLotDetails(this.editBatchValue).subscribe(res => {
      console.log(res);
      this.backToBatchLot();
    }, er => console.log(er));
  }
  backToBatchLot(){
    this.router.navigateByUrl('/batch-lot-particulars')
  }
  GetBatchlotDetailsbyId(id:number)
  {
    this.batchLotService.GetBatchDetailsById(id).subscribe((res:any) => {
     
      this.batchlotparticularsReg = res;
      let batchValue: BatchLotParticulars = res; 
      this.editBatchValue = batchValue;
      if (batchValue) {
        this.batchLotParticularsForm.patchValue(batchValue);
      }
    }, er => console.log(er));    
  }
  BuildBatchlotForm(){
    this.batchLotParticularsForm = this.fb.group({
      batchType: ['', Validators.required],
      productMaterial: ['', Validators.required],
      batchLotNo: ['', Validators.required],
      batchLotSize: ['', Validators.required],
      manufacturingDate: ['low', Validators.required],
      expiryDate: ['', Validators.required],
      arno: ['', Validators.required],
      otherDetails: ['']
    });
    this.materialDetails = [
      { name: 'Methocarbomol USP', code: 'Methocarbomol USP' },
      { name: 'Meberene Hcl ', code: 'Meberene Hcl' }
    ];
    this.cdr.detectChanges();
  }
  dates: Date[] | undefined;
  selectedMaterialValue:any;
  displayBasic: boolean = false;

  RegisterBatchLotParticulars() {
    if (this.batchLotParticularsForm.valid) {
      console.log(this.batchLotParticularsForm.value);
      let ccBatchlotValue: BatchLotParticulars = this.batchLotParticularsForm.value;
      if (this.editMode) {
        this.updateControlChange(ccBatchlotValue);
      }    
      else {
        this.saveControlChange(ccBatchlotValue);
      }
    }
}
selectMaterial(event: any) {
  this.selectedMaterialValue = event.target.value;
  this.displayBasic = true;
  this.cdr.detectChanges();
}
}


