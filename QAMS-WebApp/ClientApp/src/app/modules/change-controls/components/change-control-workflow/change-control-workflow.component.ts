import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DocumentsComponent } from '../../../shared-components/documents/documents.component';
import { ChangeControlsService } from '../../services/change-controls.service';
import { CC_Model } from 'src/app/models/changecontrol.model';
import { Hod_ReviewService } from '../../services/hod-review.service';

@Component({
  selector: 'app-change-control-workflow',
  templateUrl: './change-control-workflow.component.html',
  styleUrls: ['./change-control-workflow.component.scss']
})
export class ChangeControlWorkflowComponent implements OnInit {
  plabtTypeDetails: any[] | undefined;
  selectPlantTypeOption: any = "Capa";
  selectedDate: string = "10/11/2024";
  userGroupDetails: any[] | undefined;
  selectUserGroupDetails: any = "Quality Control";
  defaultRadioBtn = 0;
  selectedReviewOptions: string = "hodReview";
  id: any;
  changeControl: CC_Model; hodstatus="PENDING";

  constructor(private primeConfig: PrimeNGConfig,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private changeControlsService: ChangeControlsService,
    private hodservice:Hod_ReviewService
  ) { }

  ngOnInit(): void {
    this.plabtTypeDetails = [
      { name: 'Capa', code: 'Capa' },
      { name: 'Deviations ', code: 'Deviations' }
    ]
    this.userGroupDetails = [
      { name: 'Quality Control', code: 'Quality Control' }
    ]
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      let splitItesms = this.id.split('-');
      let changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.getChangeControlById(changeControlId);
      this.gethodreviewstatus(changeControlId);
    })
  }
  selectProgressBar(text: any) {
    this.selectedReviewOptions = text;
  }

  navToChangeControls() {
    this.router.navigateByUrl('change-controls');
  }

  getChangeControlById(changeControlId: number) {
    this.changeControlsService.getChangeControlById(changeControlId).subscribe(res => {
      this.changeControl = res;
      
      console.log(this.changeControl);
    }, er => console.log(er));
  }
  gethodreviewstatus(changeControlId: number){
    this.hodservice.gethodreviewbyintid(changeControlId).subscribe((data:any)=>{
      if(data!=null || undefined){
        this.hodstatus=data.status;
      }
    })
  }

}
