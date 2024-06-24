import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { PlantAssignmentUsersService } from '../../services/plant-assignment-users.service';

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
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private PlantAssignmentUsersService: PlantAssignmentUsersService, private cdr: ChangeDetectorRef) { }
  ngOnInit() :void {
    this.plantUserForm = this.fb.group({
      remarks: ['', Validators.required],
    });
    this.PlantAssignmentUsersService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
  });
  this.targetProducts = [];
}
regPlantUser() {  
      this.messageService.add({ severity: 'success', summary: ' Plant Assignment is Successfully Registrated', detail: 'Message Content' });
    }
  


  backToPlantUsers(){
    this.router.navigateByUrl('/plant-assignment-users');
  }

}
