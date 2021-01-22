import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devicecontroller',
  templateUrl: './devicecontroller.component.html',
  styleUrls: ['./devicecontroller.component.css']
})
export class DevicecontrollerComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    console.log("DDF")
  }

  switchToggle() {
    console.log('APP')
  }
}
