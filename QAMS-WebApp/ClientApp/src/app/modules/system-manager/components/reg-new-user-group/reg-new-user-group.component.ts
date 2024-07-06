import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { UserGroupService } from '../../services/user-group.service';
import { RegUserGroup, UserGroup } from 'src/app/models/userGroup.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ModifyUserService } from '../../services/modify-user.service';
import { ModifyUser } from 'src/app/models/modifyUser.model';

@Component({
  selector: 'app-reg-new-user-group',
  templateUrl: './reg-new-user-group.component.html',
  styleUrls: ['./reg-new-user-group.component.scss'],
  providers: [MessageService]
})
export class RegNewUserGroupComponent {
  userGroupForm!: FormGroup;
  id:number=0;
  modifyUserDatasource: ModifyUser[]=[]; 
  tmodifyUserDatasource: ModifyUser[]=[];    
  editMode: boolean = false;
  usergroupReg: RegUserGroup;
  editUserValue: RegUserGroup;
  //sourceProducts!: Product[];
  //targetProducts!: Product[];
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService, private route: ActivatedRoute,
    private UserGroupService: UserGroupService,private modifyUserService: ModifyUserService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void {
    this.GetUserDetails();
    this.BuildUsergroupForm();
    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id; 
      if(this.id)
        {     
      this.GetUsergroupDetailsbyId(this.id);   
        } 
    })    
  }
  GetUserDetails()
  {
    this.modifyUserService.getUserData().subscribe((data: any) => {
      debugger;
      this.modifyUserDatasource = data.response;
      this.modifyUserDatasource.forEach(dataSource => (dataSource.createdDate = new Date(dataSource.createdDate)));      
    }); 
  }
cancelClick(){
  this.router.navigateByUrl('/user-groups');
}
saveControlChange(userValue: RegUserGroup) {
  debugger;
  //userValue.selectedUsers=this.GetUserDetails();
  this.UserGroupService.insertCustomerDetails(userValue).subscribe((data: any) => {    
    this.messageService.add({ severity: 'success', summary: 'Usergroup Registration Saved Successfull', detail: 'Message Content' });
    setTimeout(() => {
      this.backToUsers();
    }, 1000);
  });    
}
updateControlChange(userValue: RegUserGroup) {
  debugger;
  console.log(JSON.stringify(userValue))
  this.UserGroupService.UpdateUserGroupDetails(this.editUserValue).subscribe(res => {
    console.log(res);
    this.backToUsers();
  }, er => console.log(er));
}
backToUsers(){
  this.router.navigateByUrl('/user-groups');
}
GetUsergroupDetailsbyId(id:number)
{
  debugger;
  this.UserGroupService.GetUserGroupById(id).subscribe((res:any) => {    
    this.usergroupReg = res;
    let userValue: RegUserGroup = res; 
    this.editUserValue = userValue;
    if (userValue) {
      this.userGroupForm.patchValue(userValue);
    }
    this.SetUserIds(res.selectedUsers);
  }, er => console.log(er));    
}
SetUserIds(users:string)
{
  debugger;
  // Step 1: Split the comma-separated string into an array of IDs
  const userIds = users.split(',').map(id => id.trim());
  //this.tmodifyUserDatasource=this.modifyUserDatasource.filter(map=>map.id==users);
  // Step 2 & 3: Filter modifyUserDatasource based on userIds and update tmodifyUserDatasource
  this.tmodifyUserDatasource = this.modifyUserDatasource.filter(map => userIds.includes(map.id.toString()));
  this.userGroupForm.patchValue(this.tmodifyUserDatasource);
}
BuildUsergroupForm()
{
  this.userGroupForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    remarks: ['', Validators.required]
   
    //tmodifyUserDatasource:['',Validators.required] 
  });
}
getUserIds(): string {
  // Extract IDs using map and join them with comma
  return this.tmodifyUserDatasource.map(user => user.id).join(',');
}  
  regUserGroup(){
    debugger;
    if (this.userGroupForm.valid) {
      console.log(this.userGroupForm.value);
      let usergroupValue: RegUserGroup = this.userGroupForm.value;
      usergroupValue.selectedUsers=this.getUserIds();
      if (this.editMode) {
        this.updateControlChange(usergroupValue);
      }    
      else {
        this.saveControlChange(usergroupValue);
      }
    }
  }  
}
  
