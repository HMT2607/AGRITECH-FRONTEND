import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HumidityDetailsComponent } from './humidity-details/humidity-details.component';
import { HistoryComponent } from './history/history.component';
import { ManagecropComponent } from './managecrop/managecrop.component';
import { DevicecontrollerComponent} from './devicecontroller/devicecontroller.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [{
  path : '',
  component : DashboardComponent,
  },{
    path : 'addDevices',
    component : AddDevicesComponent
  },{
    path : 'humidityDetails',
    component : HumidityDetailsComponent
  },{
    path : 'forecast',
    component : ForecastComponent
  },{
    path : 'history',
    component : HistoryComponent
  },{
    path : 'manageCrop',
    component : ManagecropComponent
  },{
    path : 'controlDevice',
    component : DevicecontrollerComponent
  },{
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, AddDevicesComponent, HumidityDetailsComponent, ForecastComponent, HistoryComponent, DevicecontrollerComponent, LoginComponent]
