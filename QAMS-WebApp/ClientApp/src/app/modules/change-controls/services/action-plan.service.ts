import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActionPlanModel } from 'src/app/models/action-plan.model';

@Injectable({
    providedIn: 'root'
})
export class ActionPlanService {

    private apiUrl = 'QAMS_API';

    constructor(private http: HttpClient) { }

    getActionPlansbyChangeControlId(id: number): Observable<any> {
        //const url = `${this.apiUrl}/${id}`;
        return this.http.get('assets/json/actionPlans.json');
    }

    saveChangeControlActionPlans(actionPlan: ActionPlanModel) {
        return this.http.post(this.apiUrl + '/changecontolactionplan/savechangecontolactionplan', JSON.stringify(actionPlan));
    }

    updateChangeControlActionPlans(actionPlan: ActionPlanModel) {
        return this.http.post(this.apiUrl + '/changecontolactionplan/?', JSON.stringify(actionPlan));
    }

    getChangeControlById(actionPlanId: number) {
        return this.http.get(this.apiUrl + '/changecontolactionplan/' + actionPlanId);
    }

}