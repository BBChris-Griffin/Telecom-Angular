import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeviceComponent } from './device/device.component';

import { ManagePlansComponent } from './manage-plans/manage-plans.component';


@NgModule({
  declarations: [
    AppComponent,

    DeviceComponent

    ManagePlansComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
