import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private http: HttpClient, private loginService: LoginService) { }

    LogginedUserame: string;
    LogginedUserId: number;

    buildLoginUserInfo() {
        let userInfo = this.loginService.getLoginUserInfo();
        this.LogginedUserId = userInfo.userId;
        this.LogginedUserame = userInfo.userName;
    }

}