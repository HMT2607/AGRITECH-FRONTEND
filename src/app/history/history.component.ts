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
  historyDataIntrusion:Array<any> = [];

  constructor( 
  private _http:HttpClient
    ) {}
  ngOnInit(): void {

    let url = window.location.href;
    let check_url = new URL(url);
    let getUrlParamValue = check_url.searchParams.get("param");
    console.log(getUrlParamValue);
    
    // let param  = searchParams.has('HumTemp')
    // console.log("param : " + param )
    
    (document.getElementById('labelPump') as HTMLHeadingElement).classList.remove('labelPumpClass');
    (document.getElementById('labelPump') as HTMLHeadingElement).classList.add('addLabelPumpClass');
    (document.getElementById('tablePump') as HTMLHeadingElement).classList.remove('tablePumpClass');
    (document.getElementById('tablePump') as HTMLHeadingElement).classList.add('addTablePumpClass');


    this.liveHumidityData(getUrlParamValue)
    this.livePumpData()
    this.liveSensorData(getUrlParamValue)
    this.liveIntrusionData(getUrlParamValue)
  } 

  // HUMIDITY AND TEMPERATURE: START
  getHumidityData() :Observable<any>{
    return this._http.get("http://127.0.0.1:8000/tempAndHumidity/")
  }
  
  liveHumidityData(paramValue:any) {
    console.log(paramValue)
    this.getHumidityData().subscribe(
      (response)=>{

        var dateToday = new Date();
        var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
        var dateFrom = new Date();
        // (document.getElementById('humidityData') as HTMLHeadingElement).textContent = data[0].humidity;


        if (paramValue=="humTemp") {
          dateFrom.setTime(dateFrom.getTime());

          (document.getElementById('labelPump') as HTMLHeadingElement).classList.add('labelPumpClass');
          (document.getElementById('tablePump') as HTMLHeadingElement).classList.add('tablePumpClass');
          (document.getElementById('labelPump') as HTMLHeadingElement).classList.remove('addLabelPumpClass');
          (document.getElementById('tablePump') as HTMLHeadingElement).classList.remove('addTablePumpClass');
          // (document.getElementById('label') as HTMLHeadingElement).classList.remove('addLabelPumpClass');


  
          (document.getElementById('labelSensor') as HTMLHeadingElement).classList.add('labelSensorClass');
          (document.getElementById('tableSensor') as HTMLHeadingElement).classList.add('tableSensorClass');

          (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.add('labelIntrusionClass');
          (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.remove('addLabelIntusionClass');
          (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.add('tableIntrusionClass');
          (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.remove('addTableIntrusionClass');

          // (document.getElementById('tableSensor') as HTMLHeadingElement).classList.add('tableSensorClass');


          

        } else {
          dateFrom.setTime(dateFrom.getTime() - dateOffset);
        }
            
        // loop for last 5 days including today
        for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
          // loop for each record of response
          for (let i = response.length - 1; i >= 0; i--) {
            // console.log("Day:" + day.toISOString().split('T')[0])       
            let obj = response[i].date.toString()
            var date = obj.substring(0, 10);
            // console.log("Date:" + date)
            var time = obj.substring(11, 19);
            // console.log("Time:" + time)
            // console.log("Response: "+response[i].date)
            response[i].date = date + " " + time
            var same = day.toISOString().split('T')[0] .localeCompare(date)
            
            if (same == 0) {
              this.historyDataHumidity.push(response[i]);
            }
          }
        }
        // console.log(this.historyDataHumidity);
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
              // console.log("Day:" + day.toISOString().split('T')[0])   
              // console.log("Response: "+response)    
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
          // console.log(this.historyDataPump);
        },
      );
    }
      // PUMP: END


      // SENSOR NODE: START
      getSensorData() :Observable<any>{
        return this._http.get("http://127.0.0.1:8000/sensorNode/")
      }
      
      liveSensorData(paramValue:any) {
        this.getSensorData().subscribe(
          (response)=>{

            var dateToday = new Date();
            var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
            var dateFrom = new Date();

            if (paramValue=="npk") {
              dateFrom.setTime(dateFrom.getTime());

              (document.getElementById('labelPump') as HTMLHeadingElement).classList.add('labelPumpClass');
              (document.getElementById('tablePump') as HTMLHeadingElement).classList.add('tablePumpClass');
              (document.getElementById('labelPump') as HTMLHeadingElement).classList.remove('addLabelPumpClass');
              (document.getElementById('tablePump') as HTMLHeadingElement).classList.remove('addTablePumpClass');
      
              (document.getElementById('labelHT') as HTMLHeadingElement).classList.add('labelSensorClass');
              (document.getElementById('tableHT') as HTMLHeadingElement).classList.add('tableSensorClass');

              (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.add('labelIntrusionClass');
              (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.add('tableIntrusionClass');
              
            } else {
              dateFrom.setTime(dateFrom.getTime() - dateOffset);
            }

                
            // loop for last 5 days including today
            for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
              // loop for each record of response
              for (let i = response.length - 1; i >= 0; i--) {
                // console.log("Day:" + day.toISOString().split('T')[0])       
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

        // PUMP: START
    getIntrusionData() :Observable<any>{
      return this._http.get("http://127.0.0.1:8000/intrusion/")
    }
    
    liveIntrusionData(paramValue:any) {
      this.getIntrusionData().subscribe(
        (response)=>{

          var dateToday = new Date();
          var dateOffset = (24*60*60*1000) * 4; //time for past 4 days
          var dateFrom = new Date();

          if (paramValue=="ICount") {
            dateFrom.setTime(dateFrom.getTime());

            (document.getElementById('labelPump') as HTMLHeadingElement).classList.add('labelPumpClass');
            (document.getElementById('tablePump') as HTMLHeadingElement).classList.add('tablePumpClass');
            (document.getElementById('labelPump') as HTMLHeadingElement).classList.remove('addLabelPumpClass');
            (document.getElementById('tablePump') as HTMLHeadingElement).classList.remove('addTablePumpClass');

            // (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.add('labelIntrusionClass');
            // (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.add('tableIntrusionClass');
            (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.remove('addLabelIntrusionClass');
            (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.remove('addTableIntrusionClass');
            // (document.getElementById('labelIntrusion') as HTMLHeadingElement).classList.remove('addLabelIntrusionClass');
            // (document.getElementById('tableIntrusion') as HTMLHeadingElement).classList.remove('addTableIntrusionClass');


            (document.getElementById('labelHT') as HTMLHeadingElement).classList.add('labelSensorClass');
            (document.getElementById('tableHT') as HTMLHeadingElement).classList.add('tableSensorClass');

            
            (document.getElementById('labelSensor') as HTMLHeadingElement).classList.add('labelSensorClass');
            (document.getElementById('tableSensor') as HTMLHeadingElement).classList.add('tableSensorClass');
            // (document.getElementById('labelSensor') as HTMLHeadingElement).classList.remove('addLabelSensorClass');
            // (document.getElementById('tableSensor') as HTMLHeadingElement).classList.remove('addTableSensorClass');
            
          } else {
            dateFrom.setTime(dateFrom.getTime() - dateOffset);
          }
              
          // loop for last 5 days including today
          for (var day = dateFrom; dateToday >= day; day.setDate(day.getDate() + 1)) {
            // loop for each record of response
            for (let i = response.length - 1; i >= 0; i--) {
              // console.log("Day:" + day.toISOString().split('T')[0])   
              // console.log("Response: "+response)    
              let obj = response[i].date.toString()
              var date = obj.substring(0, 10);
              var time = obj.substring(11, 19);
              response[i].date = date + " " + time
              var same = day.toISOString().split('T')[0] .localeCompare(date)
              
              if (same == 0) {
                this.historyDataIntrusion.push(response[i]);
              }
            }
          }
           console.log(this.historyDataIntrusion);
        },
      );
    }
      // PUMP: END

}