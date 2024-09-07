import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { ActionPlanInput } from 'src/app/models/action-plan.model';
import { RegModifyUser } from 'src/app/models/modifyUser.model';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    LogginedUserame: string;
    Logginedpassword: string;
    LogginedUserId: number;
    loginuser:RegModifyUser={};
    plantId:number;
    actionPlanInputSubject = new BehaviorSubject<ActionPlanInput>(null);
    actionPlanInputObservable = this.actionPlanInputSubject.asObservable();

    constructor(private http: HttpClient, private loginService: LoginService) { }

    buildLoginUserInfo() {
        let userInfo = this.loginService.getLoginUserInfo();
        this.LogginedUserId = userInfo.userId;
        this.LogginedUserame = userInfo.userName;
    }


    setActionPlanInput(actionPlanInput: ActionPlanInput) {
        this.actionPlanInputSubject.next(actionPlanInput);
    }
    getloginuser(){
       return this.loginuser = JSON.parse(localStorage.getItem('loginuser') || '{}');
    }
}