import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { PlantAssignmentUsersService } from '../../services/plant-assignment-users.service';
import { ModifyUserService } from '../../services/modify-user.service';
import { RegModifyUser } from 'src/app/models/modifyUser.model';
import { PlantListService } from '../../services/plant-list.service';
import { PlantAssignmentUsers } from 'src/app/models/plantAssignmentUsers.model';

@Component({
  selector: 'app-reg-plant-assignment-user',
  templateUrl: './reg-plant-assignment-user.component.html',
  styleUrls: ['./reg-plant-assignment-user.component.scss'],
  providers: [MessageService]
})
export class RegPlantAssignmentUserComponent {
  
  plantUserForm!: FormGroup;
  sourceProducts!: Product[];
  targetProducts!: Product[];
  editUserValue: RegModifyUser; 
  userReg: RegModifyUser;
  id: number;
  plantIds:string;
  editCCValue: PlantAssignmentUsers;  

  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private PlantAssignmentUsersService: PlantAssignmentUsersService,private PlantListService: PlantListService,private route: ActivatedRoute, private modifyUserService: ModifyUserService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void {
    this.BuildplantForm();
      this.cdr.detectChanges();
      this.route.queryParams.subscribe(params => {
        this.id = Number.parseInt(params['Id']);
        let splitItesms = this.id;
        debugger;        
        this.GetUserDetailsbyId(this.id);
      })

    
    debugger;

  this.PlantListService.getplantData().subscribe((data: any) => {
    debugger
    this.sourceProducts = data.response;
    this.cdr.markForCheck();
  }); 
  this.targetProducts = [];
    // this.plantUserForm = this.fb.group({
    //   targetProducts: ['', Validators.required],
    // });

    this.cdr.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.id = Number.parseInt(params['Id']);
      let splitItesms = this.id;           
      this.GetUserDetailsbyId(this.id);    
    })
    this.PlantAssignmentUsersService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
  });  
}

cancelClick(){
  this.router.navigateByUrl('/users');
}



updateControlChange(userValue: RegModifyUser) {
  console.log(JSON.stringify(userValue))
  this.modifyUserService.updateUserDetails(this.editUserValue).subscribe(res => {
    console.log(res);
    
  }, er => console.log(er));
}

backToPlantUsers(){
  this.router.navigateByUrl('/plant-assignment-users');
}

GetUserDetailsbyId(id:number)
    {
      this.modifyUserService.GetUserById(id).subscribe((res:any) => {
        debugger;
        this.userReg = res;
        let userValue: RegModifyUser = res; //JSON.parse(ccValueStr) ?? null;
        this.editUserValue = userValue;
        if (userValue) {
          //this.sourceProducts.patchValue(userValue);
        }
      }, er => console.log(er));    
    }

    BuildplantForm(){
        this.plantUserForm = this.fb.group({
          userid:['',Validators.required],
          username:['',Validators.required]
         // plantid:['', Validators.required]         
      });
    }
    getProductIds(): string {
      // Extract IDs using map and join them with comma
      return this.targetProducts.map(product => product.id).join(',');
    }
     
regPlantUser() 
{  
  debugger;
  if (this.plantUserForm.invalid) {
    this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
    return; // Prevent form submission
  } else {
    const RegModifyUserInfo: RegModifyUser = {
      userId: this.plantUserForm.value.userId,
      username:this.plantUserForm.value.username,
      plantid:this.getProductIds()
    
    };   
    this.updateControlChange(RegModifyUserInfo);     
  }
}
   

}
