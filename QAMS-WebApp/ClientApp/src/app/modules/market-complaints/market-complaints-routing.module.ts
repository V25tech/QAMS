import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComplaintsComponent } from './components/market-complaints/market-complaints.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RegisterMarketComplaintsComponent } from './components/register-market-complaints/register-market-complaints.component';
import { McWorkTransferRequestComponent } from './components/mc-work-transfer-request/mc-work-transfer-request.component';
import { McWorkflowComponent } from './components/mc-workflow/mc-workflow.component';
import { McExtendDateComponent } from './components/mc-extend-date/mc-extend-date.component';
import { McDossierPrintRequestComponent } from './components/mc-dossier-print-request/mc-dossier-print-request.component';

const routes: Routes = [
  {path:'market-complaints',component:MarketComplaintsComponent,canActivate:[AuthGuard]},
  {path:'register-market-complaints',component:RegisterMarketComplaintsComponent,canActivate:[AuthGuard]},
  {path:'mc-work-transfer-request',component:McWorkTransferRequestComponent,canActivate:[AuthGuard]},
  {path:'mc-workflow',component:McWorkflowComponent,canActivate:[AuthGuard]},
  {path:'mc-extend-date',component:McExtendDateComponent,canActivate:[AuthGuard]},
  {path:'mc-dossier-print-request',component:McDossierPrintRequestComponent,canActivate:[AuthGuard]},
  {path:'mc-extend-date',component:McExtendDateComponent,canActivate:[AuthGuard]},
]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketComplaintsRoutingModule { }
