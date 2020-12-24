import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HumidityDetailsComponent } from './humidity-details/humidity-details.component';
import { LoginComponent } from './login/login.component';
import { ManageVegComponent } from './manage-veg/manage-veg.component';



const routes: Routes = [{
  path : '',
  component : DashboardComponent,
  },{
    path : 'addDevices',
    component : AddDevicesComponent
  },{
    path : 'login',
    component : LoginComponent
  },{
    path : 'manageVeg',
    component : ManageVegComponent
  },{
    path : 'humidityDetails',
    component : HumidityDetailsComponent
  },{
    path : 'forecast',
    component : ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, AddDevicesComponent, LoginComponent, ManageVegComponent, HumidityDetailsComponent, ForecastComponent]
