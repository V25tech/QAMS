import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QMactivitesRoutingModule } from './qmactivites-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    QMactivitesRoutingModule
  ]
})
export class QMactivitesModule { }
