import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { NewRole } from 'src/app/models/newRole.model';
import { UserGroup } from 'src/app/models/userGroup.model';
import { UserGroupService } from '../../services/user-group.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  providers: [MessageService]
})
export class UserGroupsComponent {
 
  userGroupDatasource: UserGroup[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private UserGroupService: UserGroupService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {
   
    this.UserGroupService.getUserData().subscribe((data: any) => {
      this.userGroupDatasource = data.response;
      //this.userGroupDatasource.forEach(dataSource=> dataSource.date = new Date(dataSource.date))
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
  goToNewUser(){
    this.router.navigateByUrl('/reg-new-user-group');
  }
  
 
  

}
