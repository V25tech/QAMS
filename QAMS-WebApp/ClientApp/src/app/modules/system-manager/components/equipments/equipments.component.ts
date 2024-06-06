import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Equipments } from 'src/app/models/equipmentRegistration.model';
import { EquipmentRegistrationService } from '../../services/equipment-registration.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent {
  equipmentDatasource: Equipments[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  
  constructor(private router: Router,
    private equipmentRegistrationService: EquipmentRegistrationService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.equipmentRegistrationService.getEquipData().subscribe((data: any) => {
      this.equipmentDatasource = data.response;
      this.equipmentDatasource.forEach(dataSource=>dataSource.createdDate = new Date(dataSource.createdDate))
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

  goToEquipments(){
    this.router.navigateByUrl('/equipments')
  }

  goToRegPage(){
    this.router.navigateByUrl('/equipment-registration');
  }
}
