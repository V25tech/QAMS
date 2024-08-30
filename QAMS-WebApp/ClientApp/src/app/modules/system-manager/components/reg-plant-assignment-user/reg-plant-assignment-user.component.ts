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
        this.GetUserDetailsbyId(this.id);
        this.GetPlantsInfo();
      })   
 
  this.targetProducts = [];
    // this.plantUserForm = this.fb.group({
    //   targetProducts: ['', Validators.required],
    // });

   
    this.PlantAssignmentUsersService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
  });  
}
GetPlantsInfo()
{    
  this.PlantListService.getplantData().subscribe((data: any) => {
    
    this.sourceProducts = data.response;
    //this.cdr.markForCheck();
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
        this.userReg = res;
        let userValue: RegModifyUser = res; 
        this.editUserValue = userValue;
        
        if (userValue) {
          this.plantUserForm.patchValue(userValue);
          this.SetPlantIds(userValue.plantid);
        }
      }, er => console.log(er));    
    }
    SetPlantIds(users:string)
    {
      
      // Step 1: Split the comma-separated string into an array of IDs
      const plantIds = users.split(',').map(id => id.trim());
      //this.tmodifyUserDatasource=this.modifyUserDatasource.filter(map=>map.id==users);
      // Step 2 & 3: Filter modifyUserDatasource based on userIds and update tmodifyUserDatasource
      this.targetProducts = this.sourceProducts.filter(map => plantIds.includes(map.id.toString()));
      this.plantUserForm.patchValue(this.targetProducts);
    }
    BuildplantForm(){
        this.plantUserForm = this.fb.group({
          userId:['',Validators.required],
          userName:['',Validators.required]
          //targetProducts: ['', Validators.required]       
         // plantid:['', Validators.required]         
      });
    }
    getProductIds(): string {
      // Extract IDs using map and join them with comma
      return this.targetProducts.map(product => product.id).join(',');
    }
     
regPlantUser() 
{  
  
  if (this.plantUserForm.invalid) {
    this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
    return; // Prevent form submission
  } else {
    const RegModifyUserInfo: RegModifyUser = {
      userId: this.plantUserForm.value.userId,
      userName:this.plantUserForm.value.userName,
      plantid:this.getProductIds()    
    };   
    this.updateControlChange(RegModifyUserInfo);     
  }
}
   

}
