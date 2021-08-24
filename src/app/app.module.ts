import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { ManagePlansComponent } from './manage-plans/manage-plans.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddDeviceComponent } from './add-device/add-device.component';
import { NewNumberComponent } from './new-number/new-number.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { EstimatedPriceComponent } from './estimated-price/estimated-price.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent, DeviceComponent, ManagePlansComponent, AddDeviceComponent, NewNumberComponent, DeleteDeviceComponent, EstimatedPriceComponent, LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
