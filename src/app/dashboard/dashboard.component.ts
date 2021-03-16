import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router, private http: HttpClient) { }
  intrusionDataArray:Array<any> = [];

  ngOnInit(): void {
    this.checkSession();
    this.liveHumidityData();
    this.liveSensorNodeData();
    this.intrusionData();
  }

//Logout is triggered - Start//
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
//Logout is triggered - End//

//Check user session - Start//
  checkSession() {
    let sessionId = sessionStorage.getItem("id"); 
    console.log(sessionId);
    console.log("helo");
    if ((sessionId == "") || (sessionId == null)){
      this.router.navigate(['login']);
    }else{
      this.helloWorld();
    }
  }
//Check user session - End//

//Get latest humidity data from API - Start//
  getHumidityData() :Observable<any>{
    return this.http.get("http://127.0.0.1:8000/tempAndHumidity/")
  }

  liveHumidityData() {
    this.getHumidityData().subscribe(
      (response)=>{
          var data = [];     
          for (let i = response.length - 1; i >= 1; i--) {
              let obj = response[i];
              data.push(obj);
          }
          (document.getElementById('humidityData') as HTMLHeadingElement).textContent = data[0].humidity;
          (document.getElementById('tempData') as HTMLHeadingElement).textContent = data[0].temperature+"";
      },
    );
  }
//Get latest humidity data from API - End//

//Get latest sensor data from API - Start//
getSensorNodeData() :Observable<any>{
  return this.http.get("http://127.0.0.1:8000/sensorNode/")
}

liveSensorNodeData() {
  this.getSensorNodeData().subscribe(
    (response)=>{
        var data = [];     
        for (let i = response.length - 1; i >= 1; i--) {
            let obj = response[i];
            data.push(obj);
        }
        console.log(data);
        (document.getElementById('nData') as HTMLHeadingElement).textContent = "2";
        (document.getElementById('pData') as HTMLHeadingElement).textContent = data[0].P;
        (document.getElementById('kData') as HTMLHeadingElement).textContent = data[0].K;
        (document.getElementById('sunlightData') as HTMLHeadingElement).textContent = data[0].light;
    },
  );
}

//Check intrusion - Start//
getIntrusionData() :Observable<any>{
  return this.http.get("http://127.0.0.1:8000/intrusion/")
}

getNotifyBySms() :Observable<any>{
  return this.http.get("http://127.0.0.1:8000/notify/")
}

getNotifyByEmail() :Observable<any>{
  return this.http.get("http://127.0.0.1:8000/sendEmail/")
}

intrusionData() {
  let count = 0
  this.getIntrusionData().subscribe(
    (response)=>{   
        for (let i = response.length - 1; i >= 1; i--) {
            let obj = response[i];
            //console.log(obj.activation)
            if(obj.activation == "true") {
              count = count + 1;
            }
        }
        // this.intrusionDataArray.push(count);
        //let intruParam = 1;
        // let intruParam = this.intrusionDataArray[0].userId;
        (document.getElementById('intruData') as HTMLHeadingElement).textContent = count.toString();

        // if (intruParam == 1) {

        //   this.getNotifyByEmail().subscribe(
        //     (response)=>{console.log(response)},
        //   ); 
          
        // }
    },
  ); 
}
//Check intrusion - End//
//Get latest sensor data from API - End//
  helloWorld() {
    let data  = '';
    let API = "IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR";
    let location_key = "1122648";
    let countryCode = "mu";
    let city = "Phoenix"
    var loc_key:number[]=[];


    fetch("http://dataservice.accuweather.com/locations/v1/cities/"+countryCode+"/search?apikey="+API+"&q="+city+"&details=true")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

      data=myJson
  //  console.log(data)
      let x = myJson;


      var shortPhrase:string[]=[];
      for (var data of x) {
        // console.log(data.Key);
        loc_key.push(data.Key);
        }

        // console.log(loc_key[0]);

fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+loc_key[0]+"?apikey="+API+"&details=true")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    data=myJson
//  console.log(data)
    let x = myJson["DailyForecasts"];

    var nums:number[]=[];
    var nums2:number[]=[];
    var shortPhrase:string[]=[];
    for (var data of x) {
      console.log(data.Temperature);
      nums.push(data.Temperature.Minimum.Value);
      nums2.push(data.Temperature.Maximum.Value)
      shortPhrase.push(data.Day.ShortPhrase)
      }

      console.log(nums[0]);
      console.log(shortPhrase[0]);

      nums[0] = ((nums[0] - 32) *5/9);
      nums2[0] = ((nums2[0] - 32) *5/9);
      nums[0] = (nums[0] + nums2[0])/2;
      console.log(nums[0]);

    // let body = document.getElementsByName('zx')[0];
    // body.classList.remove("fas fa-sun fa-4x");   //remove the class
    // body.classList.add("fas fa-cloud fa-4x");   //add the class


    //(document.getElementById('actualTemperature') as HTMLImageElement).textContent = nums[0];

    (document.getElementById('actualTemperature') as HTMLHeadingElement).textContent = nums[0].toFixed(0)+"";

    if (shortPhrase[0].indexOf("t-storm") != -1){
      (document.getElementById('weatherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
    }
    else if((shortPhrase[0].indexOf("shower") != -1) || (shortPhrase[0].indexOf("rain") != -1)){
      (document.getElementById('weatherPic') as HTMLImageElement).src = '../../assets/rainny.png';
    }
    else if((shortPhrase[0].indexOf("sunny") != -1) || (shortPhrase[0].indexOf("sun") != -1)){
      (document.getElementById('weatherPic') as HTMLImageElement).src = '../../assets/sun.png';
    }
    else if(shortPhrase[0].indexOf("clouds and sun") != -1){
      (document.getElementById('weatherPic') as HTMLImageElement).src = '../../assets/partlysunny.png';
    }

    // if (shortPhrase[0]==="A morning t-storm in the area"){
    //   (document.getElementById('weatherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
    // }


    // (document.getElementById('zxs') as HTMLImageElement).src = '../../assets/npk.png';

    // let testzx = "../../assets/alien.png";

    //Object.entries(x).forEach(([key, value]) => console.log(`${value}`['date']));
    //var phaseValueArr = obj.phaseExecutions.PRE.map(x => x.phaseValue);


    //var phaseValueArr = x.phaseExecutions.Temperature.map(z => z.phaseValue);

  //   myJson["DailyForecasts"].forEach(obj => {
  //     Object.entries(obj).forEach(([key, value]) => {
  //         console.log(`${key} ${value}`);
  //     });
  //     console.log('-------------------');
  // });
  });
  }

    );}}










