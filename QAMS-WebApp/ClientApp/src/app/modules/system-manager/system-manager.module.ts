import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { SystemManagerRoutingModule } from './system-manager-routing.module';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BatchLotParticularsComponent } from './components/batch-lot-reg/batch-lot-reg.component';
import { CalendarModule } from 'primeng/calendar';
import { EquipmentRegComponent } from './components/equipment-reg/equipment-reg.component';
import { MarketRegistrationComponent } from './components/market-registration/market-registration.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { DropdownModule } from 'primeng/dropdown';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { TooltipModule } from 'primeng/tooltip';
import { RegNewUserGroupComponent } from './components/reg-new-user-group/reg-new-user-group.component';
import { PlantAssignmentUsersComponent } from './components/plant-assignment-users/plant-assignment-users.component';
import { RegPlantAssignmentUserComponent } from './components/reg-plant-assignment-user/reg-plant-assignment-user.component';
import { DeparmentsComponent } from './components/deparments/deparments.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { ProductMaterialsComponent } from './components/product-materials/product-materials.component';
import { ResetLoginPasswordComponent } from './components/reset-login-password/reset-login-password.component';
import { RolesComponent } from './components/roles/roles.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { BatchLotParticularsComponent } from './components/batch-lot-particulars/batch-lot-particulars.component';
import { MarketsComponent } from './components/markets/markets.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BatchLotRegComponent } from './components/batch-lot-reg/batch-lot-reg.component';

@NgModule({
  declarations: [
    SecuritySettingsComponent,
    BatchLotParticularsComponent,
    EquipmentRegComponent,
    MarketRegistrationComponent,
    CustomerRegistrationComponent,
    NewRoleComponent,
    ModifyUserComponent,
    UserGroupsComponent,
    RegNewUserGroupComponent,
    PlantAssignmentUsersComponent,
    RegPlantAssignmentUserComponent,
    DeparmentsComponent,
    PlantListComponent,
    ProductMaterialsComponent,
    ResetLoginPasswordComponent,
    RolesComponent,
    EquipmentsComponent,
    MarketsComponent,
    CustomersComponent,
    BatchLotRegComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SystemManagerRoutingModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    PickListModule ,
    DragDropModule, 
    TooltipModule
  ]
})
export class SystemManagerModule { }
