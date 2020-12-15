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

 fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+location_key+"?apikey="+API+"&details=true")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    data=myJson
//  console.log(data)
    let x = myJson["DailyForecasts"];

    var nums:number[]=[];
    var shortPhrase:string[]=[];
    for (var data of x) {
      console.log(data.Temperature);
      nums.push(data.Temperature.Minimum.Value);
      shortPhrase.push(data.Day.ShortPhrase)
      }

      console.log(nums[0]);
      console.log(shortPhrase[0]);

    // let body = document.getElementsByName('zx')[0];
    // body.classList.remove("fas fa-sun fa-4x");   //remove the class
    // body.classList.add("fas fa-cloud fa-4x");   //add the class


    //(document.getElementById('actualTemperature') as HTMLImageElement).textContent = nums[0];

    if (shortPhrase[0]==="A morning t-storm in the area"){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
    }


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

}
