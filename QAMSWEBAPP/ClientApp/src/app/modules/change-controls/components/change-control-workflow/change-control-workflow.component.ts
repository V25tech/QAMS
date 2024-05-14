import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DocumentsComponent } from './tabs/documents/documents.component';

@Component({
  selector: 'app-change-control-workflow',
  templateUrl: './change-control-workflow.component.html',
  styleUrls: ['./change-control-workflow.component.scss']
})
export class ChangeControlWorkflowComponent  implements OnInit{
  plabtTypeDetails: any[] | undefined;
  selectPlantTypeOption:any="Capa";
  selectedDate:string="10/11/2024";
  userGroupDetails:any[] | undefined;
  selectUserGroupDetails:any="Quality Control";
  defaultRadioBtn=0;
  selectedReviewOptions:string="hodReview";
  id:any;
  constructor(private primeConfig:PrimeNGConfig,private cdr: ChangeDetectorRef,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.plabtTypeDetails =[
      { name: 'Capa', code: 'Capa' },
      { name: 'Deviations ', code: 'Deviations' }
    ]
    this.userGroupDetails =[
      { name: 'Quality Control', code: 'Quality Control' }
    ]
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
  }
  selectProgressBar(text:any){
   this.selectedReviewOptions = text;
  }

  navToChangeControls(){
    this.router.navigateByUrl('change-controls');
  }

 
}
