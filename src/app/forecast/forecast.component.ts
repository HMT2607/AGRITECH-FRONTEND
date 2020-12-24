import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.helloWorld();
    this.h3Forecast();
    this.table();
  }

  // userdata:any=[
  //   {name:"name1", addr:"addr1"},
  //   {name:"name2", addr:"addr2"},
  //   {name:"name3", addr:"addr3"},
  //   {name:"name4", addr:"addr4"},
  //   {name:"name5", addr:"addr5"}
  // ]




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


table(){
  let userdata;
  var nums:number[]=[];
    var nums2:number[]=[];
    var shortPhrase:string[]=[];
    var date:string[]=[];

  let data  = '';
    let API = "IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR";
    let location_key = "1122648";
    let countryCode = "mu";
    let city = "Phoenix"
    var loc_key:number[]=[];



    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/1122648?apikey="+API+"&details=true")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    data=myJson
//  console.log(data)
    let x = myJson["DailyForecasts"];

    // var nums:number[]=[];
    // var nums2:number[]=[];
    // var shortPhrase:string[]=[];
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

      userdata=[
        {date:"2020-12-23", weather:"Winds gradually subsiding", Temp:"24.4°"},
        {date:"2020-12-24", weather:"Cloudy and breezy", Temp:"25.6°"},
        {date:"2020-12-25", weather:"Humid; a morning shower", Temp:"25.6°"},
        {date:"2020-12-26", weather:"A little morning rain", Temp:"25.0°"},
        {date:"2020-12-27", weather:"Partly sunny, a shower; humid", Temp:"25.0°"}
      ]


  });
  console.log(nums[0]+" test");
  // return userdata=[
  //   {date:"2020-12-23", weather:"Winds gradually subsiding", Temp:"24.4°"},
  //   {date:"2020-12-24", weather:"Cloudy and breezy", Temp:"25.6°"},
  //   {date:"2020-12-25", weather:"Humid; a morning shower", Temp:"25.6°"},
  //   {date:"2020-12-26", weather:"A little morning rain", Temp:"25.0°"},
  //   {date:"2020-12-27", weather:"Partly sunny, a shower; humid", Temp:"25.0°"}
  // ]

}




// table(){
//   let userdata;
//   var nums:number[]=[];
//     var nums2:number[]=[];
//     var shortPhrase:string[]=[];
//     var date:string[]=[];

//   let zx  = '';
//     let API = "IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR";
//     let location_key = "1122648";
//     let countryCode = "mu";
//     let city = "Phoenix"
//     var loc_key:number[]=[];



//     fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/1122648?apikey="+API+"&details=true")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {

//     zx=myJson
// //  console.log(data)



//   });
//   console.log(nums[0]+" test");
//   let x = zx["DailyForecasts"];

//     // var nums:number[]=[];
//     // var nums2:number[]=[];
//     // var shortPhrase:string[]=[];
//     for (var data of x) {
//       //console.log(data.Temperature);
//       nums.push(data.Temperature.Minimum.Value);
//       nums2.push(data.Temperature.Maximum.Value)
//       shortPhrase.push(data.Day.ShortPhrase)
//       }

//       //console.log(nums[0]);
//       //console.log(shortPhrase[0]);

//       nums[0] = ((nums[0] - 32) *5/9);
//       nums2[0] = ((nums2[0] - 32) *5/9);
//       nums[0] = (nums[0] + nums2[0])/2;
//       //console.log(nums[0]);

//       userdata=[
//         {date:"2020-12-23", weather:"Winds gradually subsiding", Temp:"24.4°"},
//         {date:"2020-12-24", weather:"Cloudy and breezy", Temp:"25.6°"},
//         {date:"2020-12-25", weather:"Humid; a morning shower", Temp:"25.6°"},
//         {date:"2020-12-26", weather:"A little morning rain", Temp:"25.0°"},
//         {date:"2020-12-27", weather:"Partly sunny, a shower; humid", Temp:"25.0°"}
//       ]
//   // return userdata=[
//   //   {date:"2020-12-23", weather:"Winds gradually subsiding", Temp:"24.4°"},
//   //   {date:"2020-12-24", weather:"Cloudy and breezy", Temp:"25.6°"},
//   //   {date:"2020-12-25", weather:"Humid; a morning shower", Temp:"25.6°"},
//   //   {date:"2020-12-26", weather:"A little morning rain", Temp:"25.0°"},
//   //   {date:"2020-12-27", weather:"Partly sunny, a shower; humid", Temp:"25.0°"}
//   // ]

// }

}

