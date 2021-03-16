import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devicecontroller',
  templateUrl: './devicecontroller.component.html',
  styleUrls: ['./devicecontroller.component.css']
})
export class DevicecontrollerComponent implements OnInit {
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    console.log("Hello world....")
    this.toggleOff();
    
  }

  switchWaterPump(e:any) {
    if(e.target.checked == true) {
        this.http.post<any>('http://127.0.0.1:8000/pump/', { device_eid: "24E124116A152543", activation: "on", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }else {
      this.http.post<any>('http://127.0.0.1:8000/pumpDesact/', { device_eid: "24E124116A152543", activation: "off", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }
  }

  switchFertilizerPump(e:any) {
    if(e.target.checked == true) {
        this.http.post<any>('http://127.0.0.1:8000/fertilizerpump/', { device_eid: "24e124116a157338", activation: "on", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }else {
      this.http.post<any>('http://127.0.0.1:8000/fertilizerpumpDesact/', { device_eid: "24e124116a157338", activation: "off", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }
  }

  switchAlarm(e:any) {
    if(e.target.checked == true) {
        this.http.post<any>('http://127.0.0.1:8000/intrusion/', { device_eid: "24e124116a157338", location: "ALL", type: "ALL", activation: "on", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }else {
      this.http.post<any>('http://127.0.0.1:8000/intrusionDesact/', { device_eid: "24e124116a157338", location: "ALL", type: "ALL", activation: "off", user_id: 1 }).subscribe({
          error: error => {
              console.error('There was an error!', error);
          }
      })
    }
  }

  toggleOff() {
    let waterPump = document.getElementById("chckWaterpump") as HTMLInputElement;
    let alarmPump = document.getElementById("chckAlarm") as HTMLInputElement;
    let fertilizerPump = document.getElementById("chckFertilizer") as HTMLInputElement;

    fertilizerPump.checked = false;
    waterPump.checked = false;
    alarmPump.checked = false;
  }


}
