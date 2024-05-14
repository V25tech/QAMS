import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-capa-qa-review',
  templateUrl: './capa-qa-review.component.html',
  styleUrls: ['./capa-qa-review.component.scss']
})
export class CapaQaReviewComponent {
  departmentInchargeFlag:any;
  departmentIndex:any;
  defaultRadioBtn = 0;
  id: any;
  selectInchargeVal:any;
  inChargeDepartmentDetails=[
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
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
