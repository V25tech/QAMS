import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-routing.module';
import { QMactivitesModule } from './modules/qmactivites/qmactivites.module';
import { QMactivitesRoutingModule } from './modules/qmactivites/qmactivites-routing.module';
import { ChangeControlsModule } from './modules/change-controls/change-controls.module';
import { ChangeControlsRoutingModule } from './modules/change-controls/change-controls-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { DeviationsModule } from './modules/deviations/deviations.module';
import { DeviationsRoutingModule } from './modules/deviations/deviations-routing.module';
import { SystemManagerModule } from './modules/system-manager/system-manager.module';
import { SystemManagerRoutingModule } from './modules/system-manager/system-manager-routing.module';
import { CapaModule } from './modules/capa/capa.module';
import { CapaRoutingModule } from './modules/capa/capa-routing.module';
import { MarketComplaintsRoutingModule } from './modules/market-complaints/market-complaints-routing.module';
import { MarketComplaintsModule } from './modules/market-complaints/market-complaints.module';
import { NetworkInterceptor } from './modules/shared-services/network-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    TableModule,
    AuthenticationRoutingModule,
    AppRoutingModule,
    QMactivitesModule,
    ChangeControlsModule,
    QMactivitesRoutingModule,
    ChangeControlsRoutingModule,
    FontAwesomeModule,
    PaginatorModule,
    DeviationsModule,
    DeviationsRoutingModule,
    SystemManagerModule,
    SystemManagerRoutingModule,
    PickListModule,
    DragDropModule,
    ScrollPanelModule,
    TooltipModule,
    CapaModule,
    CapaRoutingModule,
    MarketComplaintsRoutingModule,
    MarketComplaintsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
