import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PlantListService } from '../../services/plant-list.service';
import { PlantList } from 'src/app/models/plantList.model';
import { RegPlant } from 'src/app/models/plantList.model';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
  providers: [MessageService]
})
export class PlantListComponent {
  regPlantForm!: FormGroup;
  plantDatasource: PlantList[]=[];
  selectRoleOption: any = "Administrator";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private PlantListService: PlantListService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {
    this.regPlantForm = this.fb.group({
      plantCode: ['', Validators.required],
      plantName: ['', Validators.required],
      address: ['', Validators.required],
      comments: ['', Validators.required]
      
    
    });
    this.PlantListService.getplantData().subscribe((data: any) => {
      this.plantDatasource = data.response;
      // this.plantDatasource.forEach(dataSource=>dataSource.createdDate = new Date(dataSource.createdDate))
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
 


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  visibleSidebar: any;
  closeNavBar() {
    this.visibleSidebar = false;
  }
  regPlant() {
    if (this.regPlantForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const regPlant: RegPlant = {
        code: this.regPlantForm.value.plantCode,
        plantName: this.regPlantForm.value.plantName,
        address: this.regPlantForm.value.address,
        comment: this.regPlantForm.value.comments
      };
      debugger;
      this.PlantListService.insertPlantDetails(regPlant).subscribe((data: any) => {
      //  console.log('Form submitted!', customerRegistration);
        this.messageService.add({ severity: 'success', summary: 'Customer Registration Saved Successfull', detail: 'Message Content' });
      });
      
     // console.log('Form submitted!',RegPlant);
      //this.messageService.add({ severity: 'success', summary: ' Plant Registered Successfully', detail: 'Message Content' });
    }
  }




}
