import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionPlanService } from 'src/app/modules/shared-services/action-plan.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  changeControlId: number = 0;

  constructor(private actionPlanService: ActionPlanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      let splitItesms = id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.actionPlanService.getActivitiesByInitId(this.changeControlId).subscribe((data) => {
        if (data) {
          console.log(data);
        }
      }, er => console.log(er));
    })

  }

}
