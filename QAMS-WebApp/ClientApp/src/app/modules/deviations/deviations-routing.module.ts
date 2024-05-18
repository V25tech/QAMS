import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { DeviationsComponent } from './components/deviations/deviations.component';
import { DeviationsWorkflowComponent } from './components/deviations-workflow/deviations-workflow.component';
import { RegisterDeviationsComponent } from './components/register-deviations/register-deviations.component';
import { DevitionDossierPrintRequestComponent } from './components/devition-dossier-print-request/devition-dossier-print-request.component';
import { DeviationsWorkTransferRequestComponent } from './components/deviations-work-transfer-request/deviations-work-transfer-request.component';
import { DeviationsAuditTrailsComponent } from './components/deviations-audit-trails/deviations-audit-trails.component';
import { DeviationExtendDateComponent } from './components/deviations-workflow/deviations-forms/deviation-extend-date/deviation-extend-date.component';

const routes: Routes = [
  {path:'deviations',component:DeviationsComponent,canActivate:[AuthGuard]},
  { path: 'deviation-workflow', component: DeviationsWorkflowComponent, canActivate: [AuthGuard] },
  { path: 'deviations-register', component: RegisterDeviationsComponent, canActivate: [AuthGuard] },
  { path: 'deviations-work-Transfer-request',component: DeviationsWorkTransferRequestComponent,canActivate: [AuthGuard] },
  {path:'deviations-dossier-print-request',component:DevitionDossierPrintRequestComponent,canActivate:[AuthGuard]},
  {path:'deviations-auditTrails',component:DeviationsAuditTrailsComponent,canActivate:[AuthGuard]},
  {path:'deviations-extend-date',component:DeviationExtendDateComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviationsRoutingModule { }
