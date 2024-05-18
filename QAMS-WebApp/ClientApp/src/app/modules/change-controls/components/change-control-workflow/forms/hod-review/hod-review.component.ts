import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-hod-review',
  templateUrl: './hod-review.component.html',
  styleUrls: ['./hod-review.component.scss']
})
export class HODReviewComponent implements OnInit {

 
  selectPlantTypeOption: any = "Documentation";
  selectInChargeOption: any = "Quality Control";
  selectUserGroupDetails: any = "User Group1";
  selectedDate: string = "10/11/2024";
  selectGroup:any="User Group";
  defaultRadioBtn = 0;
  id: any;
  plantTypeDetails = [
    { name: 'Documentation', code: 'Documentation' },
    { name: 'Deviations ', code: 'Deviations' }
  ]
 inChargeDepartmentDetails=[
  { name: 'Quality Control', code: 'Quality Control' },
  { name: 'Quality Assurance ', code: 'Quality Assurance' }
 ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  ngOnInit(): void {
   
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }


  visibleSidebar2: any;
  closeNavBar() {
    this.visibleSidebar2 = false;
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
