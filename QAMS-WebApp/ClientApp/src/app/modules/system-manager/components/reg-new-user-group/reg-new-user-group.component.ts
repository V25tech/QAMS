import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { UserGroupService } from '../../services/user-group.service';
import { RegUserGroup, UserGroup } from 'src/app/models/userGroup.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reg-new-user-group',
  templateUrl: './reg-new-user-group.component.html',
  styleUrls: ['./reg-new-user-group.component.scss'],
  providers: [MessageService]
})
export class RegNewUserGroupComponent {
  userGroupForm!: FormGroup;
  id:number=0;
  editMode: boolean = false;
  usergroupReg: RegUserGroup;
  editCCValue: RegUserGroup;
  sourceProducts!: Product[];
  targetProducts!: Product[];
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService, private route: ActivatedRoute,
    private UserGroupService: UserGroupService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void {
    this.BuildUsergroupForm();
    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;
      debugger;        
      this.GetUsergroupDetailsbyId(this.id);
    })
    
  }
cancelClick(){
  this.router.navigateByUrl('/user-groups');
}
saveControlChange(ccValue: RegUserGroup) {
  this.UserGroupService.insertCustomerDetails(ccValue).subscribe((data: any) => {
    console.log('Form submitted!', ccValue);
    this.messageService.add({ severity: 'success', summary: 'Usergroup Registration Saved Successfull', detail: 'Message Content' });
    setTimeout(() => {
      this.backToUsers();
    }, 1000);
  });    
}
updateControlChange(ccValue: RegUserGroup) {
  console.log(JSON.stringify(ccValue))
  this.UserGroupService.UpdateUserGroupDetails(this.editCCValue).subscribe(res => {
    console.log(res);
    this.backToUsers();
  }, er => console.log(er));
}
backToUsers(){
  this.router.navigateByUrl('/user-groups');
}
GetUsergroupDetailsbyId(id:number)
{
  this.UserGroupService.GetUserGroupById(id).subscribe((res:any) => {
    debugger;
    this.usergroupReg = res;
    let ccValue: RegUserGroup = res; //JSON.parse(ccValueStr) ?? null;
    this.editCCValue = ccValue;
    if (ccValue) {
      this.userGroupForm.patchValue(ccValue);
    }
  }, er => console.log(er));    
}
BuildUsergroupForm()
{
  this.userGroupForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    remarks: ['', Validators.required],
   
  
  });
}

  
  regUserGroup(){
    if (this.userGroupForm.valid) {
      console.log(this.userGroupForm.value);
      let ccusergroupValue: RegUserGroup = this.userGroupForm.value;
      if (this.editMode) {
        this.updateControlChange(ccusergroupValue);
      }    
      else {
        this.saveControlChange(ccusergroupValue);
      }
    }
  }  
}
  
