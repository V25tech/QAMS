import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { ChangeControlsService } from '../../services/change-controls.service';

@Component({
  selector: 'app-register-cc',
  templateUrl: './register-cc.component.html',
  styleUrls: ['./register-cc.component.scss'],
  providers: [MessageService]
})
export class RegisterCCComponent implements OnInit {
  labelText: string = "Request Details";

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
  editMode: boolean = false;
  editCCValue: CC_Model;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private fb: FormBuilder,
    private changeControlsService: ChangeControlsService,
    private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.buildMainForm();
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editMode = true;
      let changeControlId: number = Number.parseInt(id);
      this.getChangeControlById(changeControlId);
    }

    // let ccValueStr = localStorage.getItem(id);
    // let ccValue: CC_Model = JSON.parse(ccValueStr) ?? null;
    // if (ccValue) {
    //   this.mainForm.patchValue(ccValue);
    // }
  }

  backToCCClick() {
    this.router.navigateByUrl('/change-controls');
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Change Control Login Initiated Successfully' });
  }

  saveChanges() {
    //this.displayBasic = false;
    this.cdr.detectChanges();
  }

  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log(this.mainForm.value);
      let ccValue: CC_Model = this.mainForm.value;
      if (this.editMode) {
        this.updateControlChange(ccValue);
      }
      else {
        this.saveControlChange(ccValue);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  saveControlChange(ccValue: CC_Model) {
    ccValue.changeControlId = 0;
    ccValue.catId = 0;
    ccValue.registeredby = 1234;
    ccValue.changeControlUniqueCode = this.editCCValue.changeControlUniqueCode + 'E';
    ccValue.status = '';
    ccValue.createdBy = 'Creator';
    ccValue.modifiedBy = 'Modifier';
    ccValue.createdDate = new Date();
    ccValue.plantId = 3;

    localStorage.setItem('PROV-CC-PL01-24-0021', JSON.stringify(ccValue));

    console.log(JSON.stringify(ccValue))
    this.changeControlsService.saveChangeControlRegistration(ccValue).subscribe(res => {
      //console.log(res);
      this.show();
      this.backToCCClick();
    }, er => console.log(er));
  }

  updateControlChange(ccValue: CC_Model) {

    this.editCCValue.changeDetails = ccValue.changeDetails;
    this.editCCValue.requestDetails = ccValue.requestDetails;
    this.editCCValue.impactAssessmentDetails = ccValue.impactAssessmentDetails;
    this.editCCValue.modifiedBy = 'Modifier';

    console.log(JSON.stringify(ccValue))
    this.changeControlsService.updateChangeControlRegistration(this.editCCValue).subscribe(res => {
      //console.log(res);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Change Control Login Updated Successfully' });
      this.backToCCClick();
    }, er => console.log(er));
  }



  getChangeControlById(changeControlId: number) {
    this.changeControlsService.getChangeControlById(changeControlId).subscribe(res => {
      //let ccValueStr = localStorage.getItem(id);
      let ccValue: CC_Model = res; //JSON.parse(ccValueStr) ?? null;
      this.editCCValue = ccValue;
      if (ccValue) {
        this.mainForm.patchValue(ccValue);
      }
    }, er => console.log(er));
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
        equipment: [this.equipmentDetails[0].code],
        document: [''],
        facilityUtility: [''],
        validation: [''],
        packing: [''],
        software: [''],
        testing: [''],
        supplierServiceProvider: [''],
        others: [''],
        products: [''],
        impurityAssesment: ['yes'],
        impurityReason: [{ value: '', disabled: true }],
        nitrosamineAssesment: ['yes'],
        nitrosamineReason: [{ value: '', disabled: true }],
        genotoxicAssesment: ['yes'],
        genatoxicReason: [{ value: '', disabled: true }],
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

    this.onChangeRefFunctions();
  }

  onChangeRefFunctions() {

    this.mainForm.get('requestDetails.reference').valueChanges.subscribe(value => {
      this.onReferenceChange(value);
    });

    this.mainForm.get('requestDetails.typeOfChange').valueChanges.subscribe(value => {
      this.onTypeOfChange(value);
    });

    this.mainForm.get('changeDetails.changesRelatedTo').valueChanges.subscribe(value => {
      this.onChangesRelatedTo(value);
    });

    this.mainForm.get('changeDetails.impurityAssesment').valueChanges.subscribe(value => {
      this.onControlValueChange(value, 'impurityReason');
    });

    this.mainForm.get('changeDetails.nitrosamineAssesment').valueChanges.subscribe(value => {
      this.onControlValueChange(value, 'nitrosamineReason');
    });

    this.mainForm.get('changeDetails.genotoxicAssesment').valueChanges.subscribe(value => {
      this.onControlValueChange(value, 'genatoxicReason');
    });

    this.mainForm.get('impactAssessmentDetails.isChangeImpactProductMaterial').valueChanges.subscribe(value => {
      this.onIsChangeImpactProductMaterialChange(value);
    });

    this.mainForm.get('impactAssessmentDetails.isAnyProceduresImpacted').valueChanges.subscribe(value => {
      this.onIsAnyProceduresImpactedChange(value);
    });
  }

  onReferenceChange(value: string): void {
    const subForm = this.mainForm.get('requestDetails') as FormGroup;
    if (value === 'External') {
      subForm.get('externalReference').enable();
      subForm.get('qualityEvents').disable();
      subForm.get('qualityEvents').reset();
    } else if (value === 'Internal') {
      subForm.get('qualityEvents').setValue(this.internalDetails[0].code);
      subForm.get('qualityEvents').enable();
      subForm.get('externalReference').disable();
      subForm.get('externalReference').reset();
    }
  }

  onTypeOfChange(value: string): void {
    const subForm = this.mainForm.get('requestDetails') as FormGroup;
    if (value === 'Permanent') {
      subForm.get('batchNoLotNo').disable();
      subForm.get('batchNoLotDetails').disable();
    } else if (value === 'Temporary') {
      subForm.get('batchNoLotNo').enable();
      subForm.get('batchNoLotDetails').enable();
      subForm.get('batchNoLotNo').setValue(this.batchDetails[0].code);
    }
  }

  onChangesRelatedTo(value: string): void {
    const subForm = this.mainForm.get('changeDetails') as FormGroup;
    if (value === 'Equipment') {
      subForm.get('equipment').enable();
      subForm.get('equipment').setValue(this.equipmentDetails[0].code);
    } else if (value === 'Document') {
      subForm.get('document').enable();
      subForm.get('document').reset();
    } else if (value === 'Facility/Utility') {
      subForm.get('facilityUtility').enable();
      subForm.get('facilityUtility').reset();
    } else if (value === 'Validation') {
      subForm.get('validation').enable();
      subForm.get('validation').reset();
    } else if (value === 'Packing') {
      subForm.get('packing').enable();
      subForm.get('packing').reset();
    } else if (value === 'Software') {
      subForm.get('software').enable();
      subForm.get('software').reset();
    } else if (value === 'Testing') {
      subForm.get('testing').enable();
      subForm.get('testing').reset();
    } else if (value === 'Supplier/Service Provider') {
      subForm.get('supplierServiceProvider').enable();
      subForm.get('supplierServiceProvider').reset();
    } else if (value === 'Others') {
      subForm.get('others').enable();
      subForm.get('others').reset();
    }
  }

  onControlValueChange(value: string, controlName: string): void {
    const subForm = this.mainForm.get('changeDetails') as FormGroup;
    if (value == 'no') {
      subForm.get(controlName).enable();
      subForm.get(controlName).reset();
    }
    else
      subForm.get(controlName).disable();
  }

  onIsChangeImpactProductMaterialChange(value: string): void {
    const subForm = this.mainForm.get('impactAssessmentDetails') as FormGroup;
    if (value === 'Yes') {
      subForm.get('impactProductOrMaterials').enable();
      subForm.get('impactProductOrMaterials').setValue(this.impactDetails[0].code);
    } else {
      subForm.get('impactProductOrMaterials').disable();
    }
  }

  onIsAnyProceduresImpactedChange(value: string): void {
    const subForm = this.mainForm.get('impactAssessmentDetails') as FormGroup;
    if (value === 'Yes') {
      subForm.get('impactedProcedures').enable();
      subForm.get('impactedProcedures').reset();
    } else {
      subForm.get('impactedProcedures').disable();
    }
  }

}
