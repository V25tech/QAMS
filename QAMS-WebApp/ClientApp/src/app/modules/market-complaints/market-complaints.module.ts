import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketComplaintsRoutingModule } from './market-complaints-routing.module';
import { MarketComplaintsComponent } from './components/market-complaints/market-complaints.component';
import { RegisterMarketComplaintsComponent } from './components/register-market-complaints/register-market-complaints.component';
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
import { McWorkflowComponent } from './components/mc-workflow/mc-workflow.component';
import { McDossierPrintRequestComponent } from './components/mc-dossier-print-request/mc-dossier-print-request.component';
import { McWorkTransferRequestComponent } from './components/mc-work-transfer-request/mc-work-transfer-request.component';
import { McAuditTrailsComponent } from './components/mc-audit-trails/mc-audit-trails.component';
import { McExtendDateComponent } from './components/mc-extend-date/mc-extend-date.component';
import { QaHeadReviewComponent } from './components/mc-workflow/mc-forms/qa-head-review/qa-head-review.component';
import { PreliminaryInvestigationComponent } from './components/mc-workflow/mc-forms/preliminary-investigation/preliminary-investigation.component';
import { FullInvestigationComponent } from './components/mc-workflow/mc-forms/full-investigation/full-investigation.component';
import { McQaDecisionComponent } from './components/mc-workflow/mc-forms/mc-qa-decision/mc-qa-decision.component';
import { McActionPlansComponent } from './components/mc-workflow/mc-forms/mc-action-plans/mc-action-plans.component';
import { McClosureComponent } from './components/mc-workflow/mc-forms/mc-closure/mc-closure.component';
import { McDocumentsComponent } from './components/mc-workflow/mc-tabs/mc-documents/mc-documents.component';
import { McActivityComponent } from './components/mc-workflow/mc-tabs/mc-activity/mc-activity.component';


@NgModule({
  declarations: [
    MarketComplaintsComponent,
    RegisterMarketComplaintsComponent,
    McWorkflowComponent,
    McDossierPrintRequestComponent,
    McWorkTransferRequestComponent,
    McAuditTrailsComponent,
    McExtendDateComponent,
    QaHeadReviewComponent,
    PreliminaryInvestigationComponent,
    FullInvestigationComponent,
    McQaDecisionComponent,
    McActionPlansComponent,
    McClosureComponent,
    McDocumentsComponent,
    McActivityComponent
  ],
  imports: [
    CommonModule,
    MarketComplaintsRoutingModule,
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
export class MarketComplaintsModule { }
