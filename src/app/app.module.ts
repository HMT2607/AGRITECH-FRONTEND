import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumidityDetailsComponent } from './humidity-details/humidity-details.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HistoryComponent } from './history/history.component';

import { HttpClientModule } from '@angular/common/http';
import { ManagecropComponent } from './managecrop/managecrop.component';
import { DevicecontrollerComponent } from './devicecontroller/devicecontroller.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AiSystemComponent } from './ai-system/ai-system.component';
import { ChartsModule } from 'ng2-charts';
import { RegisterPlantComponent } from './register-plant/register-plant.component';
import { HarvestPlantComponent } from './harvest-plant/harvest-plant.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HumidityDetailsComponent,
    ForecastComponent,
    HistoryComponent,
    ManagecropComponent,
    DevicecontrollerComponent,
    LoginComponent,
    AiSystemComponent,
    RegisterPlantComponent,
    HarvestPlantComponent,

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
