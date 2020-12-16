import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.helloWorld();
  }

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

    (document.getElementById('actualTemperature') as HTMLHeadingElement).textContent = nums[0].toFixed(0)+"°";

    if (shortPhrase[0].indexOf("t-storm") != -1){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
    }
    else if(shortPhrase[0].indexOf("shower") != -1){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/rainny.png';
    }
    else if(shortPhrase[0].indexOf("sunny") != -1){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/sun.png';
    }

    // if (shortPhrase[0]==="A morning t-storm in the area"){
    //   (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
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










