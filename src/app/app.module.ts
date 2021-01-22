import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumidityDetailsComponent } from './humidity-details/humidity-details.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HistoryComponent } from './history/history.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ManagecropComponent } from './managecrop/managecrop.component';
import { DevicecontrollerComponent } from './devicecontroller/devicecontroller.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AiSystemComponent } from './ai-system/ai-system.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HumidityDetailsComponent,
    ForecastComponent,
    HistoryComponent,
    HeaderComponent,
    ContentComponent,
    ManagecropComponent,
    DevicecontrollerComponent,
    LoginComponent,
    AiSystemComponent,

  ],
  imports: [
    BrowserModule,
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
