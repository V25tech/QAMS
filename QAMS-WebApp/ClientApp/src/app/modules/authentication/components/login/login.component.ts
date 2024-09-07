import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ModifyUserService } from 'src/app/modules/system-manager/services/modify-user.service';
import { RegModifyUser } from 'src/app/models/modifyUser.model';
import { MessageService } from 'primeng/api';
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

  userReg: RegModifyUser={};
  constructor(private router: Router, private loginService: LoginService,
    private modifyUserService: ModifyUserService,private commonServ:CommonService) {
    console.log('login component');    
  }
  ngOnInit() :void {       
    
        //this.GetUserDetailsbyId(this.id);         
    
  }
 
  GetUserDetailsbyId(id:number)
  {
   this.modifyUserService.GetUserById(id).subscribe((res:any) => {      
      this.userReg = res;
      debugger
      let userValue: RegModifyUser = res; //JSON.parse(ccValueStr) ?? null;
      
     // this.editUserValue = userValue;
     
    }, er => console.log(er));    
  }
  login() {   
    this.modifyUserService.GetUserByuserName(this.username).subscribe((res:any) => {   
      debugger 
      if(res==null || res==undefined){
       alert('invalid user name')
      }  
      this.userReg = res;
      if(this.userReg.password==this.password){
       
      if (this.loginService.login(true,this.userReg)) {
        this.loginSuccess.emit();
        this.router.navigate(['/home']);
        
      }
    }
      else{
        alert('invalid password')
      }
    }, er => console.log(er));        
    
   
  }
}
