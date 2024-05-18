import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { BatchLotParticularsComponent } from './components/batch-lot-particulars/batch-lot-particulars.component';
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

const routes: Routes = [
  { path: 'system-manager', redirectTo: 'security-settings', pathMatch: 'full' },
  { path: 'security-settings', component: SecuritySettingsComponent, canActivate: [AuthGuard] },
  {path:'batch-lot-particulars',component: BatchLotParticularsComponent, canActivate: [AuthGuard]},
  {path:'equipment-registration',component:EquipmentRegComponent, canActivate: [AuthGuard]},
  {path:'market-registration',component:MarketRegistrationComponent,canActivate: [AuthGuard]},
  {path:'customer-registration',component:CustomerRegistrationComponent,canActivate: [AuthGuard]},
  {path:'new-role',component:NewRoleComponent,canActivate: [AuthGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard] },
  {path:'users',component:ModifyUserComponent,canActivate: [AuthGuard]},
  {path:'user-groups',component:UserGroupsComponent,canActivate: [AuthGuard]},
  {path:'reg-new-user-group',component:RegNewUserGroupComponent,canActivate: [AuthGuard]},
  {path:'plant-assignment-users',component:PlantAssignmentUsersComponent ,canActivate: [AuthGuard]},
  {path:'reg-plant-assignment-user',component:RegPlantAssignmentUserComponent,canActivate: [AuthGuard]},
  {path:'departments',component:DeparmentsComponent,canActivate: [AuthGuard]},
  {path:'plants',component:PlantListComponent,canActivate: [AuthGuard]},
  {path:'reset-pwd',component:ResetLoginPasswordComponent,canActivate: [AuthGuard]},
  {path:'products-materials',component:ProductMaterialsComponent,canActivate: [AuthGuard]}  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagerRoutingModule { }
