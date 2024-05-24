import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-register-cc',
  templateUrl: './register-cc.component.html',
  styleUrls: ['./register-cc.component.scss'],
  providers: [MessageService]
})
export class RegisterCCComponent implements OnInit {
  labelText: string = "Request Details";
  selectInternalOption: any;
  selectedMarketValue: any;
  selectedCustomerValue: any;
  selectedChangeDetails: any;
  selectedProducts: any;
  selectedMaterials: any;
  selectedEquipments: any;

  constructor(private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef) {

  }
  displayModal: boolean = false;

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayMaximizable: boolean = false;

  displayPosition: boolean = true;
  position: any;
  saveFlag: boolean = false;
  tab = 1;
  externalFlag: boolean = true;
  internalFlag: boolean = false;
  tempRadioBtnFlag: boolean = false;
  impurityReason: boolean = false;
  nitrosamineReason: boolean = false;
  genatoxicReason: boolean = false;
  changeImpactProductdetails: boolean = true;
  changeImpactProcedure: boolean = true;

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
  changeDetails = [
    { name: 'Material', code: 'Material' },
    { name: 'Equipment ', code: 'Equipment' },
    { name: 'Document ', code: 'Document' },
    { name: 'Facility/Utility', code: 'Facility/Utility' },
    { name: 'Validation', code: 'Validation' },
    { name: 'Packing ', code: 'Packing' },
    { name: 'Software ', code: 'Software' },
    { name: 'Testing  ', code: 'Testing' },
    { name: 'Supplier/Service Provider', code: 'Supplier/Service Provider' },
    { name: 'Others  ', code: 'Others' },
    { name: 'New Product & Existing Product ', code: 'New Product & Existing Product' }

  ];
  batchDetails = [
    { name: 'MEPJ240001', code: 'MEPJ240001' },
    { name: 'MEPJ240002 ', code: 'MEPJ240002' },
    { name: 'MEPJ240003 ', code: 'MEPJ240003' }
  ]

  productDetails = [
    { name: 'Mebeverine HCL Capsules 200 mg', code: 'Mebeverine HCL Capsules 200 mg' },
    { name: 'Meberine HCl Tablets 135 mg ', code: 'Meberine HCl Tablets 135 mg' }
  ]
  materialDetails = [
    { name: 'Mebeverine HCL Capsules 200 mg', code: 'Mebeverine HCL Capsules 200 mg' },
    { name: 'Meberine HCl Tablets 135 mg ', code: 'Meberine HCl Tablets 135 mg' }
  ]
  equipmentDetails = [
    { name: 'High Performance Liquid Chromatography', code: 'High Performance Liquid Chromatography' },
    { name: 'High Performance Liquid instrument ', code: 'High Performance Liquid instrument' }
  ]

  mainForm: FormGroup;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.buildMainForm();
  }


  buildMainForm() {
    this.mainForm = this.fb.group({

      //Request Details Controls
      requestDetails: this.fb.group({
        reference: ['External', Validators.required],
        externalReference: [{ value: '', disabled: false }],
        qualityEvents: [{ value: '', disabled: true }],
        initiatingDepartment: ['', Validators.required],
        typeOfChange: ['Permanent', Validators.required],
        batchNoLotNo: [{ value: '', disabled: false }],
        batchNoLotDetails: [{ value: '', disabled: false }],
        dateofInitiation: ['', Validators.required],
        targetDateofClosure: ['', Validators.required],
        market: [this.marketDetails[0].code, Validators.required],
        customer: [this.customerDetails[0].code, Validators.required]
      }),

      //Change Details Controls
      changeDetails: this.fb.group({
        changesRelatedTo: [this.changeDetails[0].code, Validators.required],
        material: [{ value: this.materialDetails[0].code, disabled: false }],
        existingProcedure: [''],
        proposedChange: [''],
        justificationForProposedChange: ['']
      }),

      //Impact Assessment Details Controls
      impactAssessmentDetails: this.fb.group({
        isChangeImpactProductMaterial: ['Yes', Validators.required],
        impactProductOrMaterials: [{ value: this.impactDetails[0].code, disabled: false }],
        isAnyProceduresImpacted: ['Yes', Validators.required],
        impactedProcedures: [{ value: '', disabled: false }],
        comments: [''],
      })
    });

    this.mainForm.get('requestDetails.reference').valueChanges.subscribe(value => {
      this.onReferenceChange(value);
    });

    this.mainForm.get('requestDetails.typeOfChange').valueChanges.subscribe(value => {
      this.onTypeOfChange(value);
    });

    this.mainForm.get('impactAssessmentDetails.isChangeImpactProductMaterial').valueChanges.subscribe(value => {
      this.onIsChangeImpactProductMaterialChange(value);
    });

    this.mainForm.get('impactAssessmentDetails.isAnyProceduresImpacted').valueChanges.subscribe(value => {
      this.onIsAnyProceduresImpactedChange(value);
    });
  }

  onReferenceChange(value: string): void {
    const requestDetails = this.mainForm.get('requestDetails') as FormGroup;
    if (value === 'External') {
      requestDetails.get('externalReference').enable();
      requestDetails.get('qualityEvents').disable();
      requestDetails.get('qualityEvents').reset();
    } else if (value === 'Internal') {
      requestDetails.get('qualityEvents').setValue(this.internalDetails[0].code);
      requestDetails.get('qualityEvents').enable();
      requestDetails.get('externalReference').disable();
      requestDetails.get('externalReference').reset();
    }
  }

  onTypeOfChange(value: string): void {
    const requestDetails = this.mainForm.get('requestDetails') as FormGroup;
    if (value === 'Permanent') {
      requestDetails.get('batchNoLotNo').disable();
      requestDetails.get('batchNoLotDetails').disable();
    } else if (value === 'Temporary') {
      requestDetails.get('batchNoLotNo').enable();
      requestDetails.get('batchNoLotDetails').enable();
      requestDetails.get('batchNoLotNo').setValue(this.batchDetails[0].code);
    }
  }

  onIsChangeImpactProductMaterialChange(value: string): void {
    const impactAssessmentDetails = this.mainForm.get('impactAssessmentDetails') as FormGroup;
    if (value === 'Yes') {
      impactAssessmentDetails.get('impactProductOrMaterials').enable();
      impactAssessmentDetails.get('impactProductOrMaterials').setValue(this.impactDetails[0].code);
    } else {
      impactAssessmentDetails.get('impactProductOrMaterials').disable();
    }
  }

  onIsAnyProceduresImpactedChange(value: string): void {
    const impactAssessmentDetails = this.mainForm.get('impactAssessmentDetails') as FormGroup;
    if (value === 'Yes') {
      impactAssessmentDetails.get('impactedProcedures').enable();
      impactAssessmentDetails.get('impactedProcedures').reset();
    } else {
      impactAssessmentDetails.get('impactedProcedures').disable();
    }
  }


  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log(this.mainForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  selectProducts(event: any) {
    this.selectedProducts = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }

  selectEquipments(event: any) {
    this.selectedMaterials = event.target.value;
    this.displayBasic = true;
    this.cdr.detectChanges();
  }

  selectImpurity(event: any) {
    if (event.target.value === 'no') {
      this.impurityReason = true;
    } else {
      this.impurityReason = false
    }
  }

  selectNitrosamine(event: any) {
    if (event.target.value === 'no') {
      this.nitrosamineReason = true;
    } else {
      this.nitrosamineReason = false
    }
  }

  selectGenotoxic(event: any) {
    if (event.target.value === 'no') {
      this.genatoxicReason = true;
    } else {
      this.genatoxicReason = false
    }
  }
  backToCCClick() {
    this.router.navigateByUrl('/change-controls');
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
    this.cdr.detectChanges();
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Change Control Login Initiated Successfully' });
  }
}
