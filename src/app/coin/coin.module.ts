import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinComponent } from './coin.component';
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    CoinComponent
  ],
    imports: [
        CommonModule,
        CoinRoutingModule,
        NgxLoadingModule
    ]
})
export class CoinModule { }
