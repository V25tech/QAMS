import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { ChangecontrolsComponent } from './components/changecontrols/changecontrols.component';
import { RegisterCCComponent } from './components/register-cc/register-cc.component';
import { ChangeControlWorkflowComponent } from './components/change-control-workflow/change-control-workflow.component';
import { WorkItemsComponent } from './components/work-items/work-items.component';
import { WorkItemsWorkflowComponent } from './components/work-items-workflow/work-items-workflow.component';
import { WorkTransfersComponent } from './components/work-transfers/work-transfers.component';
import { WorkTransferRequestComponent } from './components/work-transfer-request/work-transfer-request.component';
import { DossierPrintRequestComponent } from './components/dossier-print-request/dossier-print-request.component';
import { CcAuditTrailsComponent } from './components/cc-audit-trails/cc-audit-trails.component';
import { ExtendDateComponent } from './components/extend-date/extend-date.component';


const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'change-controls', component: ChangecontrolsComponent, canActivate: [AuthGuard] },
  { path: 'register-change-control', component: RegisterCCComponent, canActivate: [AuthGuard] },
  { path: 'cc-workflow', component: ChangeControlWorkflowComponent, canActivate: [AuthGuard] },
  { path: 'workItems', component: WorkItemsComponent, canActivate: [AuthGuard] },
  { path: 'workItems-workFlow',component: WorkItemsWorkflowComponent,canActivate: [AuthGuard] },
  { path: 'work-Transfer',component: WorkTransferRequestComponent,canActivate: [AuthGuard] },
  {path:'dossier-print-request',component:DossierPrintRequestComponent,canActivate:[AuthGuard]},
  {path:'cc-audit-trails',component:CcAuditTrailsComponent,canActivate:[AuthGuard]},
  {path:'extend-target-date',component:ExtendDateComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeControlsRoutingModule { }
