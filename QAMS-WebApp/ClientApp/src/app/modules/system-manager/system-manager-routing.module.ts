import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { EquipmentRegComponent } from './components/equipment-reg/equipment-reg.component';
import { MarketRegistrationComponent } from './components/market-registration/market-registration.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { RegNewUserGroupComponent } from './components/reg-new-user-group/reg-new-user-group.component';
import { PlantAssignmentUsersComponent } from './components/plant-assignment-users/plant-assignment-users.component';
import { RegPlantAssignmentUserComponent } from './components/reg-plant-assignment-user/reg-plant-assignment-user.component';
import { DeparmentsComponent } from './components/deparments/deparments.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { ProductMaterialsComponent } from './components/product-materials/product-materials.component';
import { ResetLoginPasswordComponent } from './components/reset-login-password/reset-login-password.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { BatchLotParticularsComponent } from './components/batch-lot-particulars/batch-lot-particulars.component';
import { MarketsComponent } from './components/markets/markets.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BatchLotRegComponent } from './components/batch-lot-reg/batch-lot-reg.component';
const routes: Routes = [
  {path: 'system-manager', redirectTo: 'security-settings', pathMatch: 'full' },
  {path: 'security-settings', component: SecuritySettingsComponent, canActivate: [AuthGuard] },
  {path:'equipment-registration',component:EquipmentRegComponent, canActivate: [AuthGuard]},
  {path:'edit-equipment-registration',component:EquipmentRegComponent, canActivate: [AuthGuard]},
  {path:'reg-batch-lot-particulars',component: BatchLotRegComponent, canActivate: [AuthGuard]},
  {path:'market-registration',component:MarketRegistrationComponent,canActivate: [AuthGuard]},
  {path:'edit-market-registration',component:MarketRegistrationComponent, canActivate: [AuthGuard]},
  {path:'markets',component:MarketsComponent,canActivate: [AuthGuard]},
  {path:'customer-registration',component:CustomerRegistrationComponent,canActivate: [AuthGuard]},
  {path:'edit-customer-registration',component:CustomerRegistrationComponent, canActivate: [AuthGuard]},
  {path:'customers',component:CustomersComponent,canActivate: [AuthGuard]},
  {path:'new-role',component:NewRoleComponent,canActivate: [AuthGuard] },
  {path: 'roles', component: RolesComponent, canActivate: [AuthGuard] },
  {path:'users',component:ModifyUserComponent,canActivate: [AuthGuard]},
  {path:'user-groups',component:UserGroupsComponent,canActivate: [AuthGuard]},
  {path:'edit-user-group-registration',component:CustomerRegistrationComponent, canActivate: [AuthGuard]},
  {path:'reg-new-user-group',component:RegNewUserGroupComponent,canActivate: [AuthGuard]},
  {path:'plant-assignment-users',component:PlantAssignmentUsersComponent ,canActivate: [AuthGuard]},
  {path:'reg-plant-assignment-user',component:RegPlantAssignmentUserComponent,canActivate: [AuthGuard]},
  {path:'departments',component:DeparmentsComponent,canActivate: [AuthGuard]},
  {path:'edit-department',component:DeparmentsComponent, canActivate: [AuthGuard]},
  {path:'plants',component:PlantListComponent,canActivate: [AuthGuard]},
  {path:'edit-plants',component:PlantListComponent, canActivate: [AuthGuard]},
  {path:'reset-pwd',component:ResetLoginPasswordComponent,canActivate: [AuthGuard]},
  {path:'products-materials',component:ProductMaterialsComponent,canActivate: [AuthGuard]},
  {path:'edit-products-materials',component:ProductMaterialsComponent, canActivate: [AuthGuard]},
  {path:'equipments',component:EquipmentsComponent, canActivate: [AuthGuard]},
  {path:'batch-lot-particulars',component:BatchLotParticularsComponent, canActivate: [AuthGuard]},
  {path:'edit-users-registration',component:ModifyUserComponent, canActivate: [AuthGuard]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagerRoutingModule { }
