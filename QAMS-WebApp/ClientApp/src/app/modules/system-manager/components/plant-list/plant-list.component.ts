import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  id:number=0;
  editMode: boolean = false;
  plantReg: RegPlant;
  editPlantValue: RegPlant; 

  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,private route: ActivatedRoute,
    private PlantListService: PlantListService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {

    this.BuildPlantForm();
    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;
      debugger;        
      this.GetPlantDetailsbyId(this.id);
    })
    this.PlantListService.getplantData().subscribe((data: any) => {
     debugger
     this.plantDatasource = data.response;
     this.plantDatasource.forEach(dataSource => (dataSource.createdDate = new Date(dataSource.createdDate)));
   }); 
  }
cancelClick(){
  this.router.navigateByUrl('/plants');
}
saveControlChange(ccValue: RegPlant) {
  this.PlantListService.insertPlantDetails(ccValue).subscribe((data: any) => {
    console.log('Form submitted!', ccValue);
    this.messageService.add({ severity: 'success', summary: 'Plan Saved Successfull', detail: 'Message Content' });
    setTimeout(() => {
      this.backToPlant();
    }, 1000);
  });    
}
updateControlChange(ccValue: RegPlant) {
  console.log(JSON.stringify(ccValue))
  this.PlantListService.UpdatePlantDetails(this.editPlantValue).subscribe(res => {
    console.log(res);
    this.backToPlant();
  }, er => console.log(er));
}
backToPlant(){
  this.router.navigateByUrl('/plants');
}
GetPlantDetailsbyId(id:number)
{
  this.PlantListService.GetPlantById(id).subscribe((result:any) => {   
    this.plantReg = result;
    let plantValue: RegPlant = result; //JSON.parse(ccValueStr) ?? null;
    this.editPlantValue = plantValue;
    if (plantValue) {
      this.regPlantForm.patchValue(plantValue);
    }
  }, er => console.log(er));    
}
BuildPlantForm(){
  this.regPlantForm = this.fb.group({
    plantCode: ['', Validators.required],
    plantName: ['', Validators.required],
    address: ['', Validators.required],
    comments: ['', Validators.required]
    
  
  });
}
regDepartments(){
 if (this.regPlantForm.valid) {
   console.log(this.regPlantForm.value);
   let plantValue: RegPlant = this.regPlantForm.value;
   if (this.editMode) {
     this.updateControlChange(plantValue);
   }    
   else {
     this.saveControlChange(plantValue);
   }
   this.PlantListService.getplantData().subscribe((data: any) => {
    this.plantDatasource = data.response;    
  });
 }
}

    //update code ends here
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
        this.messageService.add({ severity: 'success', summary: 'Plant Saved Successfull', detail: 'Message Content' });

        setTimeout(() => {
        this.closeNavBar();
      }, 1000);
    });
    }
  }

  navigateToEditPlant(id:number){    
    this.router.navigateByUrl('/plants?Id='+id);
  }
  Openvisiblesidebar(id:number)
  {       
    this.visibleSidebar = true;
    this.BuildPlantForm();
    if(id!=0)
      {
        this.editMode=true;
       this.GetPlantDetailsbyId(id);       
      }
      
  }

}
