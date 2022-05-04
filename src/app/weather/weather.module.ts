import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {WeatherComponent} from './weather.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxLoadingModule} from "ngx-loading";
import {ChartsModule} from "angular-bootstrap-md";
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    NgxLoadingModule,
    ChartsModule,
    NgChartsModule

  ]
})
export class WeatherModule {
}
