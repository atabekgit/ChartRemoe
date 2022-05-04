import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import {NgxLoadingModule} from "ngx-loading";
import {ButtonsModule, MDBBootstrapModule} from "angular-bootstrap-md";


@NgModule({
  declarations: [
    CountriesComponent,

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    NgxLoadingModule,
    ButtonsModule,
    MDBBootstrapModule
  ]
})
export class CountriesModule { }
