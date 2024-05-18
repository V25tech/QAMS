import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-deviation-qa-review',
  templateUrl: './deviation-qa-review.component.html',
  styleUrls: ['./deviation-qa-review.component.scss']
})
export class DeviationQaReviewComponent implements OnInit{
  selectPlantTypeOption: any = "";
  selectInChargeOption: any = "Quality Control";
  selectClassificationOption ="";
  selectUserGroupDetails: any = "User Group1";
  selectGroup:any="User Group";
  selectedDate: string = "10/11/2024"; 
  defaultRadioBtn = 0;
  id: any;
  departmentInchargeFlag:any;
  departmentIndex:any;
  selectInchargeVal:any;
  classificationValue:string='';
  changeImpactProcedure:boolean=true;
  selectCommitment:boolean=true;
  selectAdditionalPlanValue:string="";
  selectedAdditionalPlanTypeVal:string='';
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  plantTypeDetails = [
    { name: 'SOP', code: 'SOP' },
    { name: 'STP ', code: 'STP' }
  ]
  additionalActionPlanType=[
    { name: 'QRM', code: 'QRM' },
    { name: 'QOM ', code: 'QOM' }
  ]
 inChargeDepartmentDetails=[
  { name: 'Quality Control', code: 'Quality Control' },
  { name: 'Quality Assurance ', code: 'Quality Assurance' }
 ]
 classificationDetails=[
  { name: 'Critical', code: 'Critical' },
  { name: 'Major ', code: 'Major' },
  { name: 'Minor ', code: 'Minor' }
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
  ngOnInit(): void {
    
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }
  visibleSidebar2: any;
  visibleSidebar3:any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  closeAdditionalNavBar(){
    this.visibleSidebar3 = false;
  }
  selectPlantType(event: any) {
    this.selectPlantTypeOption = event.target.value;
    this.cdr.detectChanges();
  }
  selectIncharge(event:any){
   this.selectInChargeOption = event.target.value;
   this.cdr.detectChanges();
  }
  selectClassification(event:any){
    this.selectClassificationOption = event.target.value;
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
  selectCustomerCommitment(event:any){
    if(event.target.value ==='No'){
      this.selectCommitment =false;
     }else if(event.target.value ==='Not Applicable'){
       this.selectCommitment =false;
     }
     else{
       this.selectCommitment=true;
     }
  }
  selectAdditionalPlan(event:any){
   this.selectAdditionalPlanValue = event.target.value;
  }
  selectAdditionalPlanType(event:any){
   this.selectedAdditionalPlanTypeVal = event.target.value;
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
