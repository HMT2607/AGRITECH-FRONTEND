import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class D5forecast{
  constructor(
      public date:string,
      public weather:string,
      public temperature:number

  ){}
}


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  d5forecast: D5forecast[] = [];
  constructor(private httpCLient: HttpClient) {

  }

  ngOnInit(): void {
    this.helloWorld();
    this.h3Forecast();
    this.table();
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
      let x = myJson;



      var shortPhrase:string[]=[];
      for (var data of x) {
        loc_key.push(data.Key);
        }




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
      //console.log(data.Temperature);
      nums.push(data.Temperature.Minimum.Value);
      nums2.push(data.Temperature.Maximum.Value)
      shortPhrase.push(data.Day.ShortPhrase)
      }

      //console.log(nums[0]);
      //console.log(shortPhrase[0]);

      nums[0] = ((nums[0] - 32) *5/9);
      nums2[0] = ((nums2[0] - 32) *5/9);
      nums[0] = (nums[0] + nums2[0])/2;
      //console.log(nums[0]);

    // let body = document.getElementsByName('zx')[0];
    // body.classList.remove("fas fa-sun fa-4x");   //remove the class
    // body.classList.add("fas fa-cloud fa-4x");   //add the class


    //(document.getElementById('actualTemperature') as HTMLImageElement).textContent = nums[0];

    (document.getElementById('actualTemperature') as HTMLHeadingElement).textContent = nums[0].toFixed(0)+"°";

    if (shortPhrase[0].indexOf("t-storm") != -1){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/thunderStorm.png';
    }
    else if((shortPhrase[0].indexOf("shower") != -1) || (shortPhrase[0].indexOf("rain") != -1)){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/rainny.png';
    }
    else if((shortPhrase[0].indexOf("sunny") != -1) || (shortPhrase[0].indexOf("sun") != -1)){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/sun.png';
    }
    else if(shortPhrase[0].indexOf("clouds and sun") != -1){
      (document.getElementById('waetherPic') as HTMLImageElement).src = '../../assets/partlysunny.png';
    }

  });
});

  }







h3Forecast() {
  let data  = '';
  let API = "IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR";
  let location_key = "1122648";
  let countryCode = "mu";
  let city = "Phoenix"
  var loc_key:number[]=[];



  fetch("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" +location_key+ "?apikey=" +API)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {

  data=myJson
  let x = myJson;

  var nums:number[]=[];
  var shortPhrase:string[]=[];
  for (var data of x) {
    //console.log(data.Temperature);
    nums.push(data.Temperature.Value);
    shortPhrase.push(data.IconPhrase)
    }

    //console.log(nums[2]);
    //console.log(shortPhrase[2]);

    nums[2] = ((nums[2] - 32) *5/9);
    //console.log(nums[2]);



  (document.getElementById('3hTemperature') as HTMLHeadingElement).textContent = nums[2].toFixed(0)+"°";

  if (shortPhrase[2].indexOf("t-storm") != -1){
    (document.getElementById('3hforecast') as HTMLImageElement).src = '../../assets/thunderStorm.png';
  }
  else if((shortPhrase[2].indexOf("shower") != -1) || (shortPhrase[2].indexOf("rain") != -1) || (shortPhrase[2].indexOf("Rain") != -1)){
    (document.getElementById('3hforecast') as HTMLImageElement).src = '../../assets/rainny.png';
  }
  else if((shortPhrase[2].indexOf("sunny") != -1) || (shortPhrase[2].indexOf("sun") != -1)){
    (document.getElementById('3hforecast') as HTMLImageElement).src = '../../assets/sun.png';
  }
  else if((shortPhrase[2].indexOf("clouds and sun") != -1) || (shortPhrase[2].indexOf("Mostly cloudy") != -1) || (shortPhrase[2].indexOf("Intermittent clouds") != -1)){
    (document.getElementById('3hforecast') as HTMLImageElement).src = '../../assets/partlysunny.png';
  }
  else if((shortPhrase[2].indexOf("cloudy") != -1)){
    (document.getElementById('3hforecast') as HTMLImageElement).src = '../../assets/cloudy.png';
  }

});

}



//   });
//   // console.log(nums[0]+" test");
//   // console.log(userdata);
//   // return userdata=[
//   //   {date:"2020-12-23", weather:"Winds gradually subsiding", Temp:"24.4°"},
//   //   {date:"2020-12-24", weather:"Cloudy and breezy", Temp:"25.6°"},
//   //   {date:"2020-12-25", weather:"Humid; a morning shower", Temp:"25.6°"},
//   //   {date:"2020-12-26", weather:"A little morning rain", Temp:"25.0°"},
//   //   {date:"2020-12-27", weather:"Partly sunny, a shower; humid", Temp:"25.0°"}
//   // ]

// }




table(){
  let API = "IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR";
  this.httpCLient.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/5day/1122648?apikey=IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR&details=true').subscribe(
    response =>{
      console.log(response);
      let v:any;
      let x = response["DailyForecasts"];

    var nums:number[]=[];
    var nums2:number[]=[];
    var date:string[]=[];
    var shortPhrase:string[]=[];
    for (var data of x) {
      //console.log(data.Temperature);
      nums.push(data.Temperature.Minimum.Value);
      nums2.push(data.Temperature.Maximum.Value)
      shortPhrase.push(data.Day.ShortPhrase)
      date.push(data.Date)
      }

      console.log(nums[0]);
      console.log(shortPhrase[0]);
      //date[0] = formatDate(date[0],'yyyy-MM-dd', v);
      nums[0] = ((nums[0] - 32) *5/9);
      nums2[0] = ((nums2[0] - 32) *5/9);
      nums[0] = (nums[0] + nums2[0])/2;

      nums[1] = ((nums[1] - 32) *5/9);
      nums2[1] = ((nums2[1] - 32) *5/9);
      nums[1] = (nums[1] + nums2[1])/2;

      nums[2] = ((nums[2] - 32) *5/9);
      nums2[2] = ((nums2[2] - 32) *5/9);
      nums[2] = (nums[2] + nums2[2])/2;

      nums[3] = ((nums[3] - 32) *5/9);
      nums2[3] = ((nums2[3] - 32) *5/9);
      nums[3] = (nums[3] + nums2[3])/2;

      nums[4] = ((nums[4] - 32) *5/9);
      nums2[4] = ((nums2[4] - 32) *5/9);
      nums[4] = (nums[4] + nums2[4])/2;

      this.d5forecast = [{date:date[0], weather:shortPhrase[0], temperature:nums[0]},
                          {date:date[1], weather:shortPhrase[1], temperature:nums[1]},
                          {date:date[2], weather:shortPhrase[2], temperature:nums[2]},
                          {date:date[3], weather:shortPhrase[3], temperature:nums[3]},
                          {date:date[4], weather:shortPhrase[4], temperature:nums[4]}]
    }
  );
}




}
