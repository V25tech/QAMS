import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CustomerNotificationReview } from 'src/app/models/customernotification-review.model';
import { CustomerNotificationReviewService } from 'src/app/modules/change-controls/services/customernotification-review.service';

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
  changeControlId: number = 0;
  cnReview: CustomerNotificationReview = {};

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private cnReviewService: CustomerNotificationReviewService,
    private route: ActivatedRoute) { }

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
      let splitItesms = this.id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.loadCusterNotificationReview();
    })

  }


  loadCusterNotificationReview() {
    this.cnReviewService.getCustomerNotificationReviewByintid(this.changeControlId).subscribe((data: any) => {
      this.cnReview = data;
    }, er => console.log(er));
  }

  saveCusterNotificationReview() {
    this.cnReview.isSave = false;
    this.cnReview.initiativeId = this.changeControlId;
    this.cnReview.initiativeName = "ChangeControl";
    this.cnReview.plant = 3;
    this.cnReview.createdBy = 1234;
    this.cnReview.updatedBy = 1234;
    this.cnReviewService.saveCustomerNotificationReview(this.cnReview).subscribe((data: any) => {
      console.log(data);
    }, er => console.log(er));
  }

  submit() {
    this.cnReview.isSave=true;
    this.cnReviewService.updateCustomerNotificationReview(this.cnReview).subscribe((data: any) => {
      console.log(data);
    }, er => console.log(er));
  }

  visibleSidebar2: any;
  closeNavBar() {
    this.visibleSidebar2 = false;
  }
  selectPlantType(event: any) {
    this.selectPlantTypeOption = event.value.code;
    this.cdr.detectChanges();
  }
}

