import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { UserGroupService } from '../../services/user-group.service';
import { RegUserGroup, UserGroup } from 'src/app/models/userGroup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-new-user-group',
  templateUrl: './reg-new-user-group.component.html',
  styleUrls: ['./reg-new-user-group.component.scss'],
  providers: [MessageService]
})
export class RegNewUserGroupComponent {
  userGroupForm!: FormGroup;
  sourceProducts!: Product[];
  targetProducts!: Product[];
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private UserGroupService: UserGroupService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void {
    this.userGroupForm = this.fb.group({
      remarks: ['', Validators.required],
     
    
    });
   
    // this.sourceProducts="abcd";
    this.UserGroupService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
  });
  this.targetProducts = [];
}
  regUserGroup() {
    if (this.userGroupForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const RegUserGroup: RegUserGroup = {
       remarks: this.userGroupForm.value.remarks
        
      };

      
      console.log('Form submitted!', RegUserGroup);
      this.messageService.add({ severity: 'success', summary: ' User Group Added Successfully', detail: 'Message Content' });
    }
  }
  backToUsers(){
    this.router.navigateByUrl('/user-groups');
  }

}
