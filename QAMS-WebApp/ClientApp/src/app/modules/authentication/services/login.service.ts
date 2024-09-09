import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { CommonService } from '../../shared-services/common.service';
import { RegModifyUser } from 'src/app/models/modifyUser.model';

const AUTH_STORAGE_KEY = 'isLoggedIn';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

    private loginStatusChanged = new Subject<boolean>();
    
  loginStatusChanged$ = this.loginStatusChanged.asObservable();

  private loggedIn = false;

  isLoggedIn(): boolean {  
    
    console.log('log servcice');
    const dd:RegModifyUser=this.commonServ.getloginuser();
    if(dd && Object.keys(dd).length > 0){
      return true;
    }
    else{
      return false;
    }
    //return localStorage.getItem('loginuser')!=null && undefined;;
  }

  updateLoginStatus(status: boolean) {
    this.loggedIn = status;
    this.loginStatusChanged.next(this.loggedIn);
  }

  
  constructor(private http: HttpClient,private commonServ:CommonService) {}

  login(isvalid:boolean,reguser:RegModifyUser) {
    if (isvalid) {
      localStorage.setItem('loginuser', JSON.stringify(reguser));
      this.updateLoginStatus(true);
    }else {
      this.updateLoginStatus(false);
    }

    return isvalid;
  }

  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.updateLoginStatus(false);
  }
}
