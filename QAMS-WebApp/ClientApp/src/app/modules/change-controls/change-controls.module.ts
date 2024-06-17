import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { ChangeControlsRoutingModule } from './change-controls-routing.module';
import { ChangecontrolsComponent } from './components/changecontrols/changecontrols.component';
import { RegisterCCComponent } from './components/register-cc/register-cc.component';
import { ChangeControlWorkflowComponent } from './components/change-control-workflow/change-control-workflow.component';
import { DocumentsComponent } from './components/change-control-workflow/tabs/documents/documents.component';
import { ActivitiesComponent } from './components/change-control-workflow/tabs/activities/activities.component';
import { HODReviewComponent } from './components/change-control-workflow/forms/hod-review/hod-review.component';
import { QAReviewComponent } from './components/change-control-workflow/forms/qa-review/qa-review.component';
import { WorkItemsWorkflowComponent } from './components/work-items-workflow/work-items-workflow.component';
import { WorkItemsComponent } from './components/work-items/work-items.component';
import { CftReviewComponent } from './components/change-control-workflow/forms/cft-review/cft-review.component';
import { CustomerNotificationComponent } from './components/change-control-workflow/forms/customer-notification/customer-notification.component';
import { QaDecisionComponent } from './components/change-control-workflow/forms/qa-decision/qa-decision.component';
import { ActionPlansReviewComponent } from './components/change-control-workflow/forms/action-plans-review/action-plans-review.component';
import { WorkTransfersComponent } from './components/work-transfers/work-transfers.component';
import { WorkTransferRequestComponent } from './components/work-transfer-request/work-transfer-request.component';
import { ExtendDateComponent } from './components/extend-date/extend-date.component';
import { DossierPrintRequestComponent } from './components/dossier-print-request/dossier-print-request.component';
import { CcAuditTrailsComponent } from './components/cc-audit-trails/cc-audit-trails.component';
import { TagModule } from 'primeng/tag';
import { ClosureCCComponent } from './components/change-control-workflow/forms/closure-cc/closure-cc.component';
import { ActionPlanComponent } from '../shared-components/action-plan.component/action-plan.component';

@NgModule({
  declarations: [
    ChangecontrolsComponent,
    RegisterCCComponent,
    ChangeControlWorkflowComponent,
    DocumentsComponent,
    ActivitiesComponent,
    HODReviewComponent,
    ActionPlanComponent,
    QAReviewComponent,
    WorkItemsWorkflowComponent,
    WorkItemsComponent,
    CftReviewComponent,
    CustomerNotificationComponent,
    QaDecisionComponent,
    ActionPlansReviewComponent,
    WorkTransfersComponent,
    WorkTransferRequestComponent,
    ExtendDateComponent,
    DossierPrintRequestComponent,
    CcAuditTrailsComponent,
    ClosureCCComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    ChangeControlsRoutingModule,
    PaginatorModule,
    DialogModule,
    TagModule,
    BsDropdownModule.forRoot()
  ]
})
export class ChangeControlsModule { }
