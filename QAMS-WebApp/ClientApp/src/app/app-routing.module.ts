import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { QMactivitesModule } from './modules/qmactivites/qmactivites.module';
import { ChangeControlsModule } from './modules/change-controls/change-controls.module';
import { DeviationsModule } from './modules/deviations/deviations.module';
import { SystemManagerModule } from './modules/system-manager/system-manager.module';
import { CapaModule } from './modules/capa/capa.module';
import { MarketComplaintsModule } from './modules/market-complaints/market-complaints.module';

const routes: Routes = [
  { path: '', component: AuthenticationModule },
  { path: 'QM', component: QMactivitesModule },
  { path: 'CC', component: ChangeControlsModule },
  { path: 'D', component: DeviationsModule },
  { path: 'SystemManager', component: SystemManagerModule },
  {path:'Capa',component: CapaModule },
  {path: 'MC', component: MarketComplaintsModule} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
