import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GridAllModule} from "@syncfusion/ej2-angular-grids";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GridAllModule,
      HttpClientModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
