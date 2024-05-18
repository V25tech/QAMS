import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-deviations',
  templateUrl: './register-deviations.component.html',
  styleUrls: ['./register-deviations.component.scss'],
  providers: [ MessageService]
})
export class RegisterDeviationsComponent implements OnInit{
  labelText: string = "Request Details";
  selectInternalOption: any;
  selectedChangeDetails: string="Product";
  selectedMarketValue:any;
  selectedCustomerValue:any;
  selectedProducts:any;
  selectedMaterial:any;
  selectedBatchDetails:any;
  selectedLotDetails:any;
  selectedEquipmentDetails:any;
  constructor(private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) {

  }
  displayModal: boolean = false;

  displayBasic: boolean = true;

  displayBasic2: boolean = false;

  displayMaximizable: boolean = false;

  displayPosition: boolean = true;
  position: any;
  saveFlag: boolean = false;
  tab = 1;
  externalFlag:boolean=true;
  internalFlag:boolean=false;
  tempRadioBtnFlag:boolean=false;
  impurityReason:boolean=false;
  nitrosamineReason:boolean=false;
  genatoxicReason:boolean=false;
  changeImpactProductdetails: boolean=true;
  changeImpactProcedure:boolean=true;

  internalDetails = [
    { name: 'Capa', code: 'Capa' },
    { name: 'Deviations ', code: 'Deviations' }
  ];
  impactDetails = [
    { name: 'Mebeverine HCL Capsules 200 mg', code: 'Mebeverine HCL Capsules 200 mg' },
    { name: 'Meberine HCl Tablets 135 mg ', code: 'Meberine HCl Tablets 135 mg' }
  ];
  marketDetails = [
    { name: 'Unitied States', code: 'MK001' },
    { name: 'Unitied Kingdom ', code: 'MK002' }
  ];
  customerDetails = [
    { name: 'Shimadzu Private Limited', code: 'Shimadzu Private Limited' },
    { name: 'Google Private Limited ', code: 'Google Private Limited ' }
  ];
  equipmentDetails = [
    { name: 'High Performance Liquid Chromatography', code: 'High Performance Liquid Chromatography' },
    { name: 'High Performance Liquid Chromatography', code: 'High Performance Liquid Chromatography' }
  ];
  changeDetails = [
    { name: 'Product', code: 'Product' },
    { name: 'Batch No.(s)', code: 'Batch No.(s)' },
    { name: 'Material', code: 'Material' },
    { name: 'Lot No.(s)', code: 'Lot No.(s)' },
    { name: 'System', code: 'System' },
    { name: 'Equipment ', code: 'Equipment' },
    { name: 'Document ', code: 'Document' },
    { name: 'Facility/Utility', code: 'Facility/Utility' },
    { name: 'Validation', code: 'Validation' },
    { name: 'Components', code: 'Components' },
    { name: 'Software ', code: 'Software' },
    { name: 'Process ', code: 'Process' },
    { name: 'Others  ', code: 'Others' }

  ];
  batchDetails=[
    { name: 'MEPJ240001', code: 'MEPJ240001' },
    { name: 'MEPJ240002 ', code: 'MEPJ240002' },
    { name: 'MEPJ240003 ', code: 'MEPJ240003' }
  ]
  lotDetails=[
    { name: 'MEPJ240001', code: 'MEPJ240001' },
    { name: 'MEPJ240002 ', code: 'MEPJ240002' },
    { name: 'MEPJ240003 ', code: 'MEPJ240003' }
  ]

  productDetails =[
    { name: 'Mebeverine HCL Capsules 200 mg', code: 'Mebeverine HCL Capsules 200 mg' },
    { name: 'Meberine HCl Tablets 135 mg ', code: 'Meberine HCl Tablets 135 mg' }
  ]
  materialDetails =[
    { name: 'Mebeverine HCL Capsules 200 mg', code: 'Mebeverine HCL Capsules 200 mg' },
    { name: 'Meberine HCl Tablets 135 mg ', code: 'Meberine HCl Tablets 135 mg' }
  ]

  ngOnInit(): void {
    this.primengConfig.ripple = true;
   
   
  }
  selectionDetails(event: any) {
    
      this.selectedChangeDetails = event.target.value;
      this.displayBasic = true;
      this.cdr.detectChanges();
    
    
  
   // this.cdr.detectChanges();

  }
  selectProducts(event:any){
    this.selectedProducts = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectMaterial(event:any){
    this.selectedMaterial = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectBatch(event:any){
    this.selectedBatchDetails = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectLot(event:any){
    this.selectedLotDetails = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectEquipment(event:any){
    this.selectedEquipmentDetails = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectImpurity(event:any){
    if(event.target.value ==='no'){
     this.impurityReason = true;
    }else{
      this.impurityReason =false
    }
  }
  selectNitrosamine(event:any){
    if(event.target.value ==='no'){
     this.nitrosamineReason = true;
    }else{
      this.nitrosamineReason =false
    }
  }
  selectChangeImpact(event:any){
    if(event.target.value ==='No'){
     this.changeImpactProductdetails =false;
    }else if(event.target.value ==='Not Applicable'){
      this.changeImpactProductdetails =false;
    }
    else{
      this.changeImpactProductdetails=true;
    }
  }
  selectImpactProcedures(event:any){
    if(event.target.value ==='No'){
     this.changeImpactProcedure =false;
    }else if(event.target.value ==='Not Applicable'){
      this.changeImpactProcedure =false;
    }
    else{
      this.changeImpactProcedure=true;
    }
  }
  selectGenotoxic(event:any){
    if(event.target.value ==='no'){
     this.genatoxicReason = true;
    }else{
      this.genatoxicReason =false
    }
  }
  backToCCClick() {
    this.router.navigateByUrl('/deviations');
  }
  getInitiativeDetails(event: any, text: any, tabValue: any) {
    this.labelText = text;
    this.tab = tabValue;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
  saveChanges() {
    this.displayBasic = false;
    this.selectedChangeDetails = "";
    this.cdr.detectChanges();
  }

  selectInternalDetails(event: any) {
     
      this.selectInternalOption = event.target.value;
       this.displayBasic = true;
       this.cdr.detectChanges();
  }

  selectMarket(event: any) {
    // This is for to populate Market dropdown selection 
    this.selectedMarketValue = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectCustomer(event: any) {
    // This is for to populate customer dropdown selection 
    this.selectedCustomerValue = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CAPA Login Initiated Successfully' });
  }
  selectRef(event:any){
   if(event.target.value ==='External'){
      this.externalFlag = true;
      this.internalFlag =false;
   }else{
    this.internalFlag =true;
    this.externalFlag = false;
   }
  }
  selectTypeOfChange(event:any){
   if(event.target.value ==='Temporary'){
    this.tempRadioBtnFlag = true;
   }else{
    this.tempRadioBtnFlag =false;
   }
  }
}
