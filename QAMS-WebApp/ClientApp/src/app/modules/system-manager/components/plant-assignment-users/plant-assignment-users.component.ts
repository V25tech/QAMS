import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PlantAssignmentUsers } from 'src/app/models/plantAssignmentUsers.model';
import { PlantAssignmentUsersService } from '../../services/plant-assignment-users.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-plant-assignment-users',
  templateUrl: './plant-assignment-users.component.html',
  styleUrls: ['./plant-assignment-users.component.scss'],
  providers: [MessageService]
})
export class PlantAssignmentUsersComponent {
  planAssignmentUsersDatasource: PlantAssignmentUsers[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private plantAssignmentUsersService: PlantAssignmentUsersService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {
   
    this.plantAssignmentUsersService.getPlantAssignmentUserData().subscribe((data: any) => {
      this.planAssignmentUsersDatasource = data;
      this.planAssignmentUsersDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
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
  goToNewPlanUser(){
    this.router.navigateByUrl('/reg-plant-assignment-user');
  }
  
 }

