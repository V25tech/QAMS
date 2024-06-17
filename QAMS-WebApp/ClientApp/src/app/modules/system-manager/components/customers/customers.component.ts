import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Customers } from 'src/app/models/customerRegistration.model';
import { CustomerRegistrationService } from '../../services/customer-registration.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customerDatasource: Customers[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  
  constructor(private router: Router,
    private customerRegistrationService: CustomerRegistrationService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.customerRegistrationService.getCustomerData().subscribe((data: any) => {
      this.customerDatasource = data.response;
      this.customerDatasource.forEach(dataSource=>dataSource.createdDate = new Date(dataSource.createdDate))
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

  

  goToRegPage(){
    this.router.navigateByUrl('/customer-registration');
  }
  navigateToEditCustomers(id:number){
    this.router.navigateByUrl('/edit-customer-registration?Id='+id);
  }
}
