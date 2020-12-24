import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManageVegComponent } from './manage-veg/manage-veg.component';
import { HumidityDetailsComponent } from './humidity-details/humidity-details.component';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    ManageVegComponent,
    HumidityDetailsComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
