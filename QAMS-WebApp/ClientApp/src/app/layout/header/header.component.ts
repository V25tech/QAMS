import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/authentication/services/login.service';
import { CommonService } from 'src/app/modules/shared-services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdownOpen = false;
  loginuser:string='';
  constructor(private loginservice: LoginService, private router: Router,private cmnservice:CommonService){    
  }

  logout(){
    
    this.loginservice.logout();
    this.loginservice.updateLoginStatus(false);
    localStorage.removeItem('loginuser');
    this.router.navigate(['/login']);
  }

 
  ngOnInit(): void {
    this.loginuser=this.cmnservice.getloginuser().userId;
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
