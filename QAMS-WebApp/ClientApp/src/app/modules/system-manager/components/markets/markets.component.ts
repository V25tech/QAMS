import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Markets } from 'src/app/models/marketRegistration.model';
import { MarketRegistrationService } from '../../services/market-registration.service';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  marketDatasource: Markets[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  
  constructor(private router: Router,
    private marketRegistrationService: MarketRegistrationService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.marketRegistrationService.getMarketData().subscribe((data: any) => {
      this.marketDatasource = data;
      this.marketDatasource.forEach(dataSource=>dataSource.createdDate = new Date(dataSource.createdDate))
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
    this.router.navigateByUrl('/market-registration');
  }
}
