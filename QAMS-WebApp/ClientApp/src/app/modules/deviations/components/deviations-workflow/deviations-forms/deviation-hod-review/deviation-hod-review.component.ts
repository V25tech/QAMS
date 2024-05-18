import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-deviation-hod-review',
  templateUrl: './deviation-hod-review.component.html',
  styleUrls: ['./deviation-hod-review.component.scss']
})
export class DeviationHodReviewComponent implements OnInit{
  selectCorrectivePlantTypeOption: any = "";
  selectPreventivePlantTypeOption: any = "";
  selectOtherPlantTypeOption: any = "";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectedDate: string = "10/11/2024";
  selectGroup:any="User Group";
  defaultRadioBtn = 0;
  id: any;
  displayInputsFlag:boolean=false;
  departmentInchargeFlag:any;
  departmentIndex:any;
  selectInchargeVal:any;
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
 inChargeDepartmentDetails=[
  { name: 'Quality Control', code: 'Quality Control' },
  { name: 'Quality Assurance ', code: 'Quality Assurance' }
 ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  departmentUserGroupDetails = [
    { name: 'Select User Group', code: 'Select User Group' },
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  departmentUserDetails = [
    { name: 'Select User', code: 'Select User' },
    { name: 'John Doe', code: 'John Doe' },
    { name: 'Jane Smith', code: 'Jane Smith' }
  ]
  departmentPlantCode =[
    { name:'Quality Control'},
    { name:'Quality Assurance'},
    { name:'QA Manager'},
    { name:'QA Decision and Manager'},
    { name:'Investigation Team'}
  ]
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  ngOnInit(): void {
   
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
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
  toggle(value:any){
    this.displayInputsFlag = value ==='yes'?true:false;
    
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
   selectDepartmentUserGroup(event:any,index:any){
    this.departmentIndex = index;
    if(event.target.value === '0'){
     this.departmentInchargeFlag =true;
    }else{
      this.departmentInchargeFlag = false;
    }
    this.cdr.detectChanges();
   }
   selectInchargeDropdown(event:any){
    this.selectInchargeVal = event.target.value;
    this.cdr.detectChanges();
   }
}
