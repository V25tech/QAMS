import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BatchLotServicesService } from '../../services/batch-lot-services.service';
import { BatchLotParticulars } from 'src/app/models/BatchLotParticulars.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-batch-lot-reg',
  templateUrl: './batch-lot-reg.component.html',
  styleUrls: ['./batch-lot-reg.component.scss'],
  providers: [MessageService]
})
export class BatchLotRegComponent implements OnInit{
  batchLotParticularsForm!: FormGroup;
  materialDetails:any[]=[];
constructor(private fb: FormBuilder, private messageService: MessageService,private router: Router, 
  private batchLotService: BatchLotServicesService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
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
  registerBatchLotParticulars() {
    if (this. batchLotParticularsForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const BatchLotParticulars: BatchLotParticulars = {
        batchType: this. batchLotParticularsForm.value.batchType,
        productMaterial: this. batchLotParticularsForm.value.productMaterial,
        batchLotNo: this. batchLotParticularsForm.value.batchLotNo,
        batchLotSize: this. batchLotParticularsForm.value.batchLotSize,
        manufacturingDate: this. batchLotParticularsForm.value.manufacturingDate,
        expiryDate: this. batchLotParticularsForm.value.expiryDate,
        arno: this. batchLotParticularsForm.value.arno,
        otherDetails: this. batchLotParticularsForm.value.otherDetails
      };

      // Submit the Batch/Lot Particular object to your service or backend
      console.log('Form submitted!', BatchLotParticulars);
      this.messageService.add({ severity: 'success', summary: 'Batch/Lot Particulars Saved Successfull', detail: 'Message Content' });
    }
  }
  
  selectMaterial(event: any) {
    this.selectedMaterialValue = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }

  backToBatchLot(){
    this.router.navigateByUrl('/batch-lot-particulars')

  }
 
  }



