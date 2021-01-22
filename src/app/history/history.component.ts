import { Component, OnInit } from '@angular/core';
//import { HistoryService } from '../history.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyDataHumidity:Array<any> = [];
  historyDataPump:Array<any> = [];
  historyDataSensor:Array<any> = [];

  constructor( 
  private _http:HttpClient
    ) {}
  ngOnInit(): void {
    this.liveHumidityData()
    this.livePumpData()
    this.liveSensorData()
  } 

  // HUMIDITY AND TEMPERATURE: START
  getHumidityData() :Observable<any>{
    return this._http.get("http://127.0.0.1:8000/tempAndHumidity/")
  }
  
  liveHumidityData() {
    this.getHumidityData().subscribe(
      (response)=>{

        var dateToday = new Date();
        var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
        var dateFrom = new Date();
        dateFrom.setTime(dateFrom.getTime() - dateOffset);
            
        // loop for last 5 days including today
        for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
          // loop for each record of response
          for (let i = response.length - 1; i >= 0; i--) {
            console.log("Day:" + day.toISOString().split('T')[0])       
            let obj = response[i].date.toString()
            var date = obj.substring(0, 10);
            // console.log("Date:" + date)
            var time = obj.substring(11, 19);
            // console.log("Time:" + time)
            response[i].date = date + " " + time
            var same = day.toISOString().split('T')[0] .localeCompare(date)
            
            if (same == 0) {
              this.historyDataHumidity.push(response[i]);
            }
          }
        }
        console.log(this.historyDataHumidity);
      },
    );
  }

  // HUMIDITY AND TEMPERATURE: END

  // PUMP: START
    getPumpData() :Observable<any>{
      return this._http.get("http://127.0.0.1:8000/pump/")
    }
    
    livePumpData() {
      this.getPumpData().subscribe(
        (response)=>{

          var dateToday = new Date();
          var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
          var dateFrom = new Date();
          dateFrom.setTime(dateFrom.getTime() - dateOffset);
              
          // loop for last 5 days including today
          for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
            // loop for each record of response
            for (let i = response.length - 1; i >= 0; i--) {
              console.log("Day:" + day.toISOString().split('T')[0])       
              let obj = response[i].date.toString()
              var date = obj.substring(0, 10);
              var time = obj.substring(11, 19);
              response[i].date = date + " " + time
              var same = day.toISOString().split('T')[0] .localeCompare(date)
              
              if (same == 0) {
                this.historyDataPump.push(response[i]);
              }
            }
          }
          console.log(this.historyDataPump);
        },
      );
    }
      // PUMP: END


      // SENSOR NODE: START
      getSensorData() :Observable<any>{
        return this._http.get("http://127.0.0.1:8000/sensor/")
      }
      
      liveSensorData() {
        this.getSensorData().subscribe(
          (response)=>{

            var dateToday = new Date();
            var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
            var dateFrom = new Date();
            dateFrom.setTime(dateFrom.getTime() - dateOffset);
                
            // loop for last 5 days including today
            for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
              // loop for each record of response
              for (let i = response.length - 1; i >= 0; i--) {
                console.log("Day:" + day.toISOString().split('T')[0])       
                let obj = response[i].date.toString()
                var date = obj.substring(0, 10);
                var time = obj.substring(11, 19);
                response[i].date = date + " " + time
                var same = day.toISOString().split('T')[0] .localeCompare(date)
                
                if (same == 0) {
                  this.historyDataSensor.push(response[i]);
                }
              }
            }
            console.log(this.historyDataSensor);
          },
        );
      }
      
      // SENSOR NODE: END

}