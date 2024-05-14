import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-deviation-investigations',
  templateUrl: './deviation-investigations.component.html',
  styleUrls: ['./deviation-investigations.component.scss']
})
export class DeviationInvestigationsComponent {
  selectPreventivePlantTypeOption: any = "";
  selectOtherPlantTypeOption: any = "";
  selectQRMPlantTypeOption: any = "";
  selectPlantTypeOption: any = "";
  selectUserGroupDetails: any = "User Group1";
  selectInChargeOption: any = "Quality Control";
  externalFlag:boolean=true;
  internalFlag:boolean=false;
  selectGroup:any="User Group";
  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;
  displayInputsFlag:boolean=false;
  impactOnBatch:boolean=true;
  noImpactOnBatch:boolean=false;
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  inChargeDepartmentDetails=[
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
   ]
   userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  plantTypeDetails = [
    { name: 'Corrective Action 1', code: 'Corrective Action 1' },
    { name: 'Corrective Action 2 ', code: 'Corrective Action 2' }
  ]
  taskSource = [
    { label: 'Material', value: 'Material' },
    { label: 'Method', value: 'Method' },
    { label: 'Personnel', value: 'Task 3' },
    { label: 'Equipment/Instrument', value: 'Equipment/Instrument' },
    { label: ' Facility/Utility', value: ' Facility/Utility' }
  
  ];
 
  preventivePlantTypeDetails = [
    { name: 'Preventive Action 1', code: 'Preventive Action 1' },
    { name: 'Preventive Action  2 ', code: 'Preventive Action  2' }
  ]
  otherPlantTypeDetails = [
    { name: 'Other Action 1', code: 'Other Action 1' },
    { name: 'Other Action 2 ', code: 'Other Action 2' }
  ]
  qrmPlantTypeDetails = [
    { name: 'QRM 1', code: 'QRM 1' },
    { name: 'QRM 2 ', code: 'QRM 2' }
  ]
  ngOnInit(): void {
   
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }
  visibleSidebar2: any;
  visibleSidebar3:any;
  visibleSidebar4 :any;
  visibleSidebar5:any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  closeAdditionalNavBar(){
    this.visibleSidebar3 = false;
  }
  closeNavBar1(){
    this.visibleSidebar4 = false;
  }
  closeNavBar2(){
    this.visibleSidebar5 = false;
  }
  toggle(value:any){
    this.displayInputsFlag = value ==='yes'?true:false;
    
   }
 
  selectPreventivePlantType(event: any) {
    this.selectPreventivePlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectQRMPlantType(event: any) {
    this.selectQRMPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectPlantType(event: any) {
    this.selectPlantTypeOption = event.target.value;
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
   selectAssignToGroup(event:any){
     this.selectGroup = event.target.value;
     this.cdr.detectChanges();
    }
    selectRef(event:any){
      event.target.value ==='Yes'?this.externalFlag =true:this.externalFlag=false;
     }
     selectImpactBatch(event:any){
      if(event.target.value ==='No'){
       this.impactOnBatch=false;
      this.noImpactOnBatch=true;
      }else if(event.target.value ==='Not Applicable'){
        this.impactOnBatch =false;
        this.noImpactOnBatch=false;
      }
      else{
        this.impactOnBatch=true;
      }
    }
}
