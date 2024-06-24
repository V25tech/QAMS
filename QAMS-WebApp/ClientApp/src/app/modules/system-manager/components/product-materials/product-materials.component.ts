import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

 //update code starts here
 id:number=0;
 editMode: boolean = false;
 equipmentReg: RegProduct;
 editProductsValue: RegProduct;
  selectRoleOption: any = "Administrator";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  selectedStatusFlag: boolean = true;
  selectedStatusValue: any;
  selectedStatusIndex: any;
  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService, private route: ActivatedRoute,
    private ProductsService: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.BuildMaterialForm();
    this.cdr.detectChanges();    
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;       
      this.GetProductsDetailsbyId(this.id);
    })

   
    this.ProductsService.getProductsData().subscribe((data: any) => {      
      this.productsDatasource = data.response;      
      this.productsDatasource.forEach(dataSource => (dataSource.createdDate = new Date(dataSource.createdDate)));
    });
  }

  cancelClick(){
    this.router.navigateByUrl('/equipments');
  }
  saveControlChange(prodValue: RegProduct) {
    this.ProductsService.insertProductDetails(prodValue).subscribe((data: any) => {
      console.log('Form submitted!', prodValue);
      this.messageService.add({ severity: 'success', summary: 'Equipment Registration Saved Successfull', detail: 'Message Content' });
      setTimeout(() => {
        this.backToEquip();
      }, 1000);
    });    
  }
  updateControlChange(prodValue: RegProduct) {
    console.log(JSON.stringify(prodValue))
    this.ProductsService.UpdateProductDetails(this.editProductsValue).subscribe(res => {
      console.log(res);
      this.backToEquip();
    }, er => console.log(er));
  }
  backToEquip(){
    this.router.navigateByUrl('/equipments');
  }
  GetProductsDetailsbyId(id:number)
  {
    this.ProductsService.GetProductById(id).subscribe((res:any) => {
      this.equipmentReg = res;
      let prodMatValue: RegProduct = res; //JSON.parse(ccValueStr) ?? null;
      this.editProductsValue = prodMatValue;
      if (prodMatValue) {
        this.regProductForm.patchValue(prodMatValue);
      }
    }, er => console.log(er));    
  }
  BuildMaterialForm(){
    this.regProductForm = this.fb.group({
      uniqueCode: ['', Validators.required],
      name: ['', Validators.required],
      chemicalName: ['', Validators.required],
    });
  }
  regProduct() {
    if (this.regProductForm.valid) {
      console.log(this.regProductForm.value);
      let productMaterial: RegProduct = this.regProductForm.value;
      if (this.editMode) {
        this.updateControlChange(productMaterial);
      }    
      else {
        this.saveControlChange(productMaterial);
      }
    }


    if (this.regProductForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {
      const regProduct: RegProduct = {
        code: this.regProductForm.value.uniqueCode,
        name: this.regProductForm.value.name,
        chemicalName: this.regProductForm.value.chemicalName,
      };

      this.ProductsService.insertProductDetails(regProduct).subscribe((data: any) => {        
        this.messageService.add({ severity: 'success', summary: 'Products Registration Saved Successfull', detail: 'Message Content' });
           
          setTimeout(() => {
            this.closeNavBar();
          }, 1000);
        });  
        }
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
  visibleSidebar: any;
  closeNavBar() {
    this.showStatusForm = false;
    this.showProductsForm = false;
    this.visibleSidebar = false;
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
  navigateToEditProduct(id:number){    
    this.router.navigateByUrl('/edit-equipment-registration?Id='+id);
  }
  Openvisiblesidebar(id:number)
  {    
    this.visibleSidebar = true;
    this.BuildMaterialForm();
    if(id!=0)
      {
        this.editMode=true;
       this.GetProductsDetailsbyId(id);       
      }      
  }
}
