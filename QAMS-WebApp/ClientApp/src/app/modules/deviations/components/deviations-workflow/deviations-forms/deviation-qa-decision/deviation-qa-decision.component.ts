import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-deviation-qa-decision',
  templateUrl: './deviation-qa-decision.component.html',
  styleUrls: ['./deviation-qa-decision.component.scss']
})
export class DeviationQaDecisionComponent {
  
  selectPreventivePlantTypeOption: any = "";
  selectOtherPlantTypeOption: any = "";
  selectClassificationOption ="";
  selectExtPlantTypeOption: any = "";
  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup:any="User Group";
  selectedDate: string = "10/11/2024";
  displayInputsFlag:boolean=false;
  defaultRadioBtn = 0;
  id: any;
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  plantTypeDetails = [
    { name: 'Corrective Action 1', code: 'Corrective Action 1' },
    { name: 'Corrective Action 2 ', code: 'Corrective Action 2' }
  ]
  
 inChargeDepartmentDetails=[
  { name: 'Quality Control', code: 'Quality Control' },
  { name: 'Quality Assurance ', code: 'Quality Assurance' }
 ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  classificationDetails=[
    { name: 'Mandatory', code: 'Mandatory' },
    { name: 'Not Mandatory ', code: 'Not Mandatory' }
  
   ]
  
  preventivePlantTypeDetails = [
    { name: 'Preventive Action 1', code: 'Preventive Action 1' },
    { name: 'Preventive Action  2 ', code: 'Preventive Action  2' }
  ]
  otherPlantTypeDetails = [
    { name: 'Other Action 1', code: 'Other Action 1' },
    { name: 'Other Action 2 ', code: 'Other Action 2' }
  ]
  extPlantTypeDetails = [
    { name: 'Extended Action 1', code: 'Extended  Action 1' },
    { name: 'Extended  Action 2 ', code: 'Extended  Action 2' }
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
    this.displayInputsFlag = value ==='notSatisfactory'?true:false;
    
   }
   selectClassification(event:any){
    this.selectClassificationOption = event.target.value;
    this.cdr.detectChanges();
   }
 
  selectPreventivePlantType(event: any) {
    this.selectPreventivePlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectExtPlantType(event: any) {
    this.selectExtPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectOtherPlantType(event: any) {
    this.selectOtherPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectPlantType(event: any) {
    this.selectPlantTypeOption = event.target.value;
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
}
