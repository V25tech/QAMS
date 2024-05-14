import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-customer-notification',
  templateUrl: './customer-notification.component.html',
  styleUrls: ['./customer-notification.component.scss']
})
export class CustomerNotificationComponent {
  
  plabtTypeDetails: any[] | undefined;
  selectPlantTypeOption: any = "Capa";
  selectedDate: string = "10/11/2024";
  userGroupDetails: any[] | undefined;
  selectUserGroupDetails: any = "Quality Control";
  defaultRadioBtn = 0;
  id: any;
  constructor(private primeConfig: PrimeNGConfig, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.plabtTypeDetails = [
      { name: 'Capa', code: 'Capa' },
      { name: 'Deviations ', code: 'Deviations' }
    ]
    this.userGroupDetails = [
      { name: 'Quality Control', code: 'Quality Control' }
    ]
    this.primeConfig.ripple = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }


  visibleSidebar2: any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  selectPlantType(event:any){
    this.selectPlantTypeOption = event.value.code;
    this.cdr.detectChanges();
  }
}

