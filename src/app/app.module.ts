import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  TuiRootModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiDataListModule,
} from '@taiga-ui/core';

import {
  TuiActionModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiComboBoxModule,
  TuiDropdownSelectionModule,
} from '@taiga-ui/kit';

import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

import { TuiPortalHostModule } from '@taiga-ui/cdk';

import { ChartistModule } from 'ng-chartist';

import { ListItemComponent } from './list-item/list-item.component';
import { HeaderComponent } from './header/header.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    HeaderComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiRootModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiMoneyModule,
    TuiActionModule,
    TuiSelectModule,
    TuiPortalHostModule,
    TuiComboBoxModule,
    TuiDropdownSelectionModule,
    ChartistModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
