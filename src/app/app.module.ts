import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TuiRootModule } from '@taiga-ui/core';

import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    TuiButtonModule,
    TuiSvgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
