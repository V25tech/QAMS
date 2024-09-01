import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ModifyUserService } from 'src/app/modules/system-manager/services/modify-user.service';
import { RegModifyUser } from 'src/app/models/modifyUser.model';
import { CommonService } from 'src/app/modules/shared-services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  username: string = '';
  password: string = '';
  id:number=0;

  userReg: RegModifyUser;
  constructor(private router: Router, private loginService: LoginService,private modifyUserService: ModifyUserService,) {
    console.log('login component');    
  }
  ngOnInit() :void {       
    
        this.GetUserDetailsbyId(this.id);         
    
  }
 
  GetUserDetailsbyId(id:number)
  {
   this.modifyUserService.GetUserById(id).subscribe((res:any) => {      
      this.userReg = res;
      let userValue: RegModifyUser = res; //JSON.parse(ccValueStr) ?? null;
      
     // this.editUserValue = userValue;
     
    }, er => console.log(er));    
  }
  login() {   

    this.userReg.userName=this.username;
    this.userReg.password=this.password;
    this.modifyUserService.GetUserByuserName(this.userReg).subscribe((res:any) => {      
      this.userReg = res;
      let userValue: RegModifyUser = res; //JSON.parse(ccValueStr) ?? null;      
     // this.editUserValue = userValue;     
    }, er => console.log(er));        
    
    if (this.loginService.login(this.username, this.password)) {
      this.loginSuccess.emit();
      this.router.navigate(['/QM']);
    }
    else{
      window.alert('Invalid Username or password');
    }
  }
}
