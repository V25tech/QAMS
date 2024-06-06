import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductsService } from '../../services/products.service';
import { Products, RegProduct } from 'src/app/models/products.model';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-product-materials',
  templateUrl: './product-materials.component.html',
  styleUrls: ['./product-materials.component.scss'],
  providers: [MessageService]
})
export class ProductMaterialsComponent {
  regProductForm!: FormGroup;
  productsDatasource: Products[] = [];
  selectRoleOption: any = "Administrator";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  selectedStatusFlag: boolean = true;
  selectedStatusValue: any;
  selectedStatusIndex: any;
  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,
    private ProductsService: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.regProductForm = this.fb.group({
      uniqueCode: ['', Validators.required],
      name: ['', Validators.required],
      chemicalName: ['', Validators.required],

    });
    this.ProductsService.getProductsData().subscribe((data: any) => {      
      this.productsDatasource = data.response;
    });
  }




  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  toggleMenu(index: any) {
    this.selectedIndex = index;
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }
  selectRole(event: any) {
    this.selectRoleOption = event.target.value;
    this.cdr.detectChanges();
  }


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  showStatusForm: any;
  showProductsForm: any;
  closeNavBar() {
    this.showStatusForm = false;
    this.showProductsForm = false;
  }
  regProduct() {
    if (this.regProductForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const RegProduct: RegProduct = {
        code: this.regProductForm.value.uniqueCode,
        name: this.regProductForm.value.name,
        chemicalName: this.regProductForm.value.chemicalName,

      };


      console.log('Form submitted!', RegProduct);
      this.messageService.add({ severity: 'success', summary: ' Products/Materials Registered Successfully', detail: 'Message Content' });
    }
  }

  selectStatusType(event: any) {
    this.selectedStatusValue = event.target.value;
    if (event.target.value === "Active") {
      this.selectedStatusFlag = true;
    } else {
      this.selectedStatusFlag = false;
    }
  }

  status = [
    { label: 'Active', value: 'Active' },
    { label: 'In Active', value: 'In Active' }
  ];
  openFlyout(index: any) {
    this.selectedIndex = index;
    this.selectedStatusFlag = !this.selectedStatusFlag;
  }
}
