import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-work-items-workflow',
  templateUrl: './work-items-workflow.component.html',
  styleUrls: ['./work-items-workflow.component.scss']
})
export class WorkItemsWorkflowComponent {
  plabtTypeDetails: any[] | undefined;
  selectPlantTypeOption:any="Capa";
  selectedDate:string="10/11/2024";
  userGroupDetails:any[] | undefined;
  selectUserGroupDetails:any="Quality Control";
  defaultRadioBtn=0;
  selectedReviewOptions:string="workItems";
  id:any;
  constructor(private primeConfig:PrimeNGConfig,private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,private router:Router){}
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
  goTOWorkItems(){
    this.router.navigateByUrl('workItems');
  }
}
