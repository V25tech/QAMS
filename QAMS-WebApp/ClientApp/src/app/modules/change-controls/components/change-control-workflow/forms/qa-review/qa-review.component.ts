import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-qa-review',
  templateUrl: './qa-review.component.html',
  styleUrls: ['./qa-review.component.scss']
})
export class QAReviewComponent implements OnInit{
  
  selectPlantTypeOption: any = "SOP";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectGroup:any="User Group";
  selectedDate: string = "10/11/2024"; 
  defaultRadioBtn = 0;
  id: any;
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
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
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
  selectUserGroup(event:any){
   this.selectUserGroupDetails = event.target.value;
   this.cdr.detectChanges();
  }
  selectAssignToGroup(event:any){
    this.selectGroup = event.target.value;
    this.cdr.detectChanges();
   }
   selectClassification(event:any){
    this.classificationValue = event.target.value;
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
}
