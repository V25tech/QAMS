import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviationsRoutingModule } from './deviations-routing.module';
import { DeviationsComponent } from './components/deviations/deviations.component';
import { DeviationsWorkflowComponent } from './components/deviations-workflow/deviations-workflow.component';
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
import { ChangeControlsRoutingModule } from '../change-controls/change-controls-routing.module';
import { DeviationActionPlansComponent } from './components/deviations-workflow/deviations-forms/deviation-action-plans/deviation-action-plans.component';
import { DeviationActionPlansReviewComponent } from './components/deviations-workflow/deviations-forms/deviation-action-plans-review/deviation-action-plans-review.component';
import { DeviationCftReviewComponent } from './components/deviations-workflow/deviations-forms/deviation-cft-review/deviation-cft-review.component';
import { DeviationExtendDateComponent } from './components/deviations-workflow/deviations-forms/deviation-extend-date/deviation-extend-date.component';
import { DeviationHodReviewComponent } from './components/deviations-workflow/deviations-forms/deviation-hod-review/deviation-hod-review.component';
import { DeviationQaDecisionComponent } from './components/deviations-workflow/deviations-forms/deviation-qa-decision/deviation-qa-decision.component';
import { DeviationQaReviewComponent } from './components/deviations-workflow/deviations-forms/deviation-qa-review/deviation-qa-review.component';
import { DeviationCustomerNotificationComponent } from './components/deviations-workflow/deviations-forms/deviation-customer-notification/deviation-customer-notification.component';
import { DeviationClosureComponent } from './components/deviations-workflow/deviations-forms/deviation-closure/deviation-closure.component';
import { DeviationActivitiesComponent } from './components/deviations-workflow/deviations-tabs/deviation-activities/deviation-activities.component';
import { DeviationsDocumentComponent } from './components/deviations-workflow/deviations-tabs/deviations-document/deviations-document.component';
import { RegisterDeviationsComponent } from './components/register-deviations/register-deviations.component';
import { DevitionDossierPrintRequestComponent } from './components/devition-dossier-print-request/devition-dossier-print-request.component';
import { DeviationsWorkTransferRequestComponent } from './components/deviations-work-transfer-request/deviations-work-transfer-request.component';
import { DeviationsAuditTrailsComponent } from './components/deviations-audit-trails/deviations-audit-trails.component';
import { QaManagerComponent } from './components/deviations-workflow/deviations-forms/qa-manager/qa-manager.component';
import { DeviationInvestigationsComponent } from './components/deviations-workflow/deviations-forms/deviation-investigations/deviation-investigations.component';


@NgModule({
  declarations: [
    DeviationsComponent,
    DeviationsWorkflowComponent,
    DeviationActionPlansComponent,
    DeviationActionPlansReviewComponent,
    DeviationCftReviewComponent,
    DeviationExtendDateComponent,
    DeviationHodReviewComponent,
    DeviationQaDecisionComponent,
    DeviationQaReviewComponent,
    DeviationCustomerNotificationComponent,
    DeviationClosureComponent,
    DeviationActivitiesComponent,
    DeviationsDocumentComponent,
    RegisterDeviationsComponent,
    DevitionDossierPrintRequestComponent,
    DeviationsWorkTransferRequestComponent,
    DeviationsAuditTrailsComponent,
    QaManagerComponent,
    DeviationInvestigationsComponent
  ],
  imports: [
    CommonModule,
    DeviationsRoutingModule,
    CommonModule,
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
    ChangeControlsRoutingModule,
    PaginatorModule,
    DialogModule,
    TagModule,
    BsDropdownModule.forRoot()
  ]
})
export class DeviationsModule { }
