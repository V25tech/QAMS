import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CapaComponent } from './components/capa/capa.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RegisterCapaComponent } from './components/register-capa/register-capa.component';
import { CapaWorkTransferRequestComponent } from './components/capa-work-transfer-request/capa-work-transfer-request.component';
import { CapaDosseierPrintRequestComponent } from './components/capa-dosseier-print-request/capa-dosseier-print-request.component';
import { CapaExtendDateComponent } from './components/capa-extend-date/capa-extend-date.component';
import { CapaAuditTrailsComponent } from './components/capa-audit-trails/capa-audit-trails.component';
import { CapaWorkflowComponent } from './components/capa-workflow/capa-workflow.component';

const routes: Routes = [
  {path:'capa',component:CapaComponent,canActivate:[AuthGuard]},
  {path:'register-capa',component:RegisterCapaComponent,canActivate:[AuthGuard]},
  {path:'capa-workflow',component:CapaWorkflowComponent,canActivate:[AuthGuard]},
  {path:'capa-work-transfer-request',component:CapaWorkTransferRequestComponent,canActivate:[AuthGuard]},
  {path:'capa-dossier-print-request',component:CapaDosseierPrintRequestComponent,canActivate:[AuthGuard]},
  {path:'capa-extend-date',component:CapaExtendDateComponent,canActivate:[AuthGuard]},
  {path:'capa-audit-trails',component:CapaAuditTrailsComponent,canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapaRoutingModule { 
  
}
