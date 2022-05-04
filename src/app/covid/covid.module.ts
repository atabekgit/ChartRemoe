import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid.component';
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    CovidComponent
  ],
    imports: [
        CommonModule,
        CovidRoutingModule,
        NgxLoadingModule
    ]
})
export class CovidModule { }
