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
  activityEvents: ActivityDate[] = [];

  constructor(private actionPlanService: ActionPlanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      let splitItesms = id.split('-');
      this.changeControlId = Number.parseInt(splitItesms[splitItesms.length - 1]);
      this.actionPlanService.getActivitiesByInitId(this.changeControlId).subscribe((data: any) => {
        if (data) {
          //console.log(data);
          let activities = this.convertToAcivityEvents(data);
          this.activityEvents = this.processReviewEvents(activities);
          console.log(this.activityEvents);
        }
      }, er => console.log(er));
    })
  }

  processReviewEvents(reviewEvents: ActivityEvent[]): ActivityDate[] {
    // Group events by date, ignoring time
    const groupedEvents: ActivityDate[] = [];
    reviewEvents.forEach((event) => {
      const dateKey = event.date.toISOString().split('T')[0];
      let existObj = groupedEvents.filter((obj) => obj.dateKey === dateKey);
      if (existObj && existObj.length > 0) {
        existObj[0].activites.push(event);
      }
      else {
        groupedEvents.push({ dateKey: dateKey, activites: [event] })
      }
    });
    return groupedEvents;
  }

  formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours < 12 ? "AM" : "PM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    // Pad minutes with leading zero if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  }


  convertToAcivityEvents(data: string[]): ActivityEvent[] {
    return data.map((eventString) => {
      let data = eventString.split(' at ');
      const eventStr = data[0].trim();
      const date = new Date(data[1].trim());
      const time = this.formatTime(date);

      return {
        eventStr,
        date,
        time,
      };
    });
  }

}

interface ActivityDate {
  dateKey: string,
  activites: ActivityEvent[]
}

interface ActivityEvent {
  eventStr: string;
  date: Date;
  time: string;
}