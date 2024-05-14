import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapaComponent } from './components/capa/capa.component';
import { RegisterCapaComponent } from './components/register-capa/register-capa.component';
import { CapaWorkflowComponent } from './components/capa-workflow/capa-workflow.component';
import { CapaDocumentsComponent } from './components/capa-workflow/capa-tabs/capa-documents/capa-documents.component';
import { CapaActivitiesComponent } from './components/capa-workflow/capa-tabs/capa-activities/capa-activities.component';
import { CapaRoutingModule } from './capa-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { CapaWorkTransferRequestComponent } from './components/capa-work-transfer-request/capa-work-transfer-request.component';
import { CapaDosseierPrintRequestComponent } from './components/capa-dosseier-print-request/capa-dosseier-print-request.component';
import { CapaAuditTrailsComponent } from './components/capa-audit-trails/capa-audit-trails.component';
import { CapaHodReviewComponent } from './components/capa-workflow/forms/capa-hod-review/capa-hod-review.component';
import { CapaQaReviewComponent } from './components/capa-workflow/forms/capa-qa-review/capa-qa-review.component';
import { CapaQaDecisionComponent } from './components/capa-workflow/forms/capa-qa-decision/capa-qa-decision.component';
import { CapaCftReviewComponent } from './components/capa-workflow/forms/capa-cft-review/capa-cft-review.component';
import { CapaActionPlanComponent } from './components/capa-workflow/forms/capa-action-plan/capa-action-plan.component';
import { CapaClosureComponent } from './components/capa-workflow/forms/capa-closure/capa-closure.component';
import { CapaExtendDateComponent } from './components/capa-extend-date/capa-extend-date.component';



@NgModule({
  declarations: [
    CapaComponent,
    RegisterCapaComponent,
    CapaWorkflowComponent,
    CapaDocumentsComponent,
    CapaActivitiesComponent,
    CapaWorkTransferRequestComponent,
    CapaDosseierPrintRequestComponent,
    CapaAuditTrailsComponent,
    CapaHodReviewComponent,
    CapaQaReviewComponent,
    CapaQaDecisionComponent,
    CapaCftReviewComponent,
    CapaActionPlanComponent,
    CapaClosureComponent,
    CapaExtendDateComponent,
  ],
  imports: [
    CommonModule,
    CapaRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    PanelMenuModule,
    PanelModule,
    SidebarModule,
    ProgressBarModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    MultiSelectModule,
    ConfirmDialogModule,
    ToastModule,
    PaginatorModule,
    DialogModule,
    TagModule,
    BsDropdownModule.forRoot()
  ]
})
export class CapaModule { }
