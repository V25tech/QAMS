import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-capa',
  templateUrl: './register-capa.component.html',
  styleUrls: ['./register-capa.component.scss'],
  providers: [ MessageService]
})
export class RegisterCapaComponent {

  externalFlag:boolean=true;
  internalFlag:boolean=false;
  usergroupFlag:boolean=true;
  userFlag:boolean=false;
  correctiveNoFlag:boolean=false;
  correctiveYesFlag:boolean=true;
  preventiveNoFlag:boolean=false;
  preventiveYesFlag:boolean=true;
  otherNoFlag:boolean=false;
  otherYesFlag:boolean=true;
  selectedEventValue:any;
  selectedProductValue:any;
  selectedMaterial:any;
  selectedMarketValue:any;
  selectedCustomerValue:any;
  displayBasic: boolean = true;
  selectCorrectivePlantTypeOption: any = "";
  selectPreventivePlantTypeOption: any = "";
  selectOtherPlantTypeOption: any = "";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectUserDetails:any="John Doe"
  selectedDate: string = "10/11/2024";
  selectGroup:any="User Group";
  
  constructor(private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) {

  }
  eventDetails = [
    { name: 'PROV-CC-PL01-24-0021', code: 'PROV-CC-PL01-24-0021' },
    { name: 'PROV-DEV-PL01-24-0021 ', code: 'PROV-DEV-PL01-24-0021' }
  ];
  ProductDetails=[
    {name:'Mebeverine Hcl Capsules 200mg',code:'Mebeverine Hcl Capsules 200mg'},
    {name:'Mebeverine Hcl Capsules 200mg',code:'Mebeverine Hcl Capsules 200mg'}
  ];
  materialDetails =[
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
  correctivePlantTypeDetails = [
    { name: 'Corrective Action 1', code: 'Corrective Action 1' },
    { name: 'Corrective Action 2 ', code: 'Corrective Action 2' }
  ]
  preventivePlantTypeDetails = [
    { name: 'Preventive Action 1', code: 'Preventive Action 1' },
    { name: 'Preventive Action  2 ', code: 'Preventive Action  2' }
  ]
  otherPlantTypeDetails = [
    { name: 'Other Action 1', code: 'Other Action 1' },
    { name: 'Other Action 2 ', code: 'Other Action 2' }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  inChargeDepartmentDetails=[
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
   ]
   userDetails=[
    { name: 'John Doe', code: 'John Doe' },
    { name: 'Jane Smith', code: 'Jane Smith' }
   ]

  
  selectEvents(event: any) {
    // This is for to populate Market dropdown selection 
    this.selectedEventValue = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectProducts(event:any){
    this.selectedProductValue = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }
  selectMaterial(event:any){
    this.selectedMaterial = event.target.value;
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
  visibleSidebar2: any;
  visibleSidebar3:any;
  visibleSidebar4 :any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  closeAdditionalNavBar(){
    this.visibleSidebar3 = false;
  }
  closeNavBar1(){
    this.visibleSidebar4 = false;
  }
  selectCorrectivePlantType(event: any) {
    this.selectCorrectivePlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectPreventivePlantType(event: any) {
    this.selectPreventivePlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectOtherPlantType(event: any) {
    this.selectOtherPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectIncharge(event:any){
    this.selectInChargeOption = event.target.value;
    this.cdr.detectChanges();
   }
   selectUserGroup(event:any){
    this.selectUserGroupDetails = event.target.value;
    this.cdr.detectChanges();
   }
   selectUser(event:any){
    this.selectUserDetails = event.target.value;
    this.cdr.detectChanges();
   }
   selectAssignTo(event:any){
    if(event.target.value ==='0'){
      this.usergroupFlag = true;
      this.userFlag =false;
   }else{
    this.userFlag =true;
    this.usergroupFlag = false;
   }
  
    }

  backToCapaClick(){
    this.router.navigateByUrl('/capa');
  
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
   selectCorrectiveRadioBtn(event:any){
    if(event.target.value ==='Yes'){
       this.correctiveYesFlag = true;
       this.correctiveNoFlag =false;
    }else{
     this.correctiveNoFlag =true;
     this.correctiveYesFlag = false;
    }
    this.cdr.detectChanges();
   }
   selectPreventiveRadioBtn(event:any){
    if(event.target.value ==='Yes'){
       this.preventiveYesFlag = true;
       this.preventiveNoFlag =false;
    }else{
     this.preventiveNoFlag =true;
     this.preventiveYesFlag = false;
    }
    this.cdr.detectChanges();
   }
   selectOtherRadioBtn(event:any){
    if(event.target.value ==='Yes'){
       this.otherYesFlag = true;
       this.otherNoFlag =false;
    }else{
     this.otherNoFlag =true;
     this.otherYesFlag = false;
    }
    this.cdr.detectChanges();
   }
   show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CAPA Login Initiated Successfully' });
  }
}
