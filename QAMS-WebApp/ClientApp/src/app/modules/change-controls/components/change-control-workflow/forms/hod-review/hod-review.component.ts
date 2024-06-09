import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-hod-review',
  templateUrl: './hod-review.component.html',
  styleUrls: ['./hod-review.component.scss']
})
export class HODReviewComponent implements OnInit {

  selectedDate: string = "10/11/2024";
  defaultRadioBtn = 0;
  id: any;
  plantTypeDetails = [
    { name: 'Documentation', code: 'Documentation' },
    { name: 'Deviations ', code: 'Deviations' }
  ]
  inChargeDepartmentDetails = [
    { name: 'Quality Control', code: 'Quality Control' },
    { name: 'Quality Assurance ', code: 'Quality Assurance' }
  ]
  userGroupDetails = [
    { name: 'User Group1', code: 'User Group1' },
    { name: 'User Group2', code: 'User Group2' }
  ]
  mainForm: FormGroup;

  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private fb: FormBuilder, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.primeConfig.ripple = true;
    this.buildMainForm();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }
  buildMainForm() {
    this.mainForm = this.fb.group({
      //Request Details Controls
      planType: [this.plantTypeDetails[0].code, Validators.required],
      description: ['', Validators.required],
      in_ChargeDepartment: [this.inChargeDepartmentDetails[0].code, Validators.required],
      assignTo: ['userGroup', Validators.required],
      userId: [{ value: '', disabled: true }],
      userGroup: [{ value: this.userGroupDetails[0].code, disabled: false }],
      targetDate: ['', Validators.required],
      reviewRemarks: ['', Validators.required]
    });

    this.mainForm.get('assignTo').valueChanges.subscribe(value => {
      if (value === 'userGroup') {
        this.mainForm.get('userGroup').enable();
        this.mainForm.get('userId').disable();
      } else if (value === 'user') {
        this.mainForm.get('userId').enable();
        this.mainForm.get('userGroup').disable();
      }
    });
  }

  onSubmit() {

  }


  visibleSidebar2: any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }

}
