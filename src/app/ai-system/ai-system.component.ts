  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'line';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

import { formatDate } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';


declare function test(): void;

@Component({
  selector: 'app-ai-system',
  templateUrl: './ai-system.component.html',
  styleUrls: ['./ai-system.component.css']
})
export class AiSystemComponent implements OnInit {
  stateArray:Array<any> = [];

  ngOnInit(): void {
    this.test()
  }

  constructor(private httpCLient: HttpClient) {

    // test();
  }

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'line';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];




  public tempOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public tempLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public tempType = 'line';
  public tempLegend = true;
  public tempData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];




  public humdOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public humdLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public humdType = 'line';
  public humdLegend = true;
  public humdData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];




  public soilhOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public soilhLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public soilhType = 'line';
  public soilhLegend = true;
  public soilhData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];




  public nOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public nType = 'line';
  public nLegend = true;
  public nData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];





  public pOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public pLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public pType = 'line';
  public pLegend = true;
  public pData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];





  public kOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public kLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public kType = 'line';
  public kLegend = true;
  public kData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];



  test(){
    //this.barChartType = "bar";

    // var nums:number[]=[];
    // var date:string[]=[];
    // var optimalValue:number[]=[];


    var tempNums:number[]=[];
    var tempDate:string[]=[];
    var tempOptimalValue:number[]=[];
    var tempOptimalValue1:number[]=[];


    var humdNums:number[]=[];
    var humdDate:string[]=[];
    var humdOptimalValue:number[]=[];
    var humdOptimalValue1:number[]=[];

    var soilhNums:number[]=[];
    var soilhDate:string[]=[];
    var soilhOptimalValue:number[]=[];
    var soilhOptimalValue1:number[]=[];


    var nNums:number[]=[];
    var nDate:string[]=[];
    var nOptimalValue:number[]=[];
    var nOptimalValue1:number[]=[];


    var pNums:number[]=[];
    var pDate:string[]=[];
    var pOptimalValue:number[]=[];
    var pOptimalValue1:number[]=[];



    var kNums:number[]=[];
    var kDate:string[]=[];
    var kOptimalValue:number[]=[];
    var kOptimalValue1:number[]=[];



    // //LIGHT GRAPH
    // fetch("http://127.0.0.1:8000/sensorNode/")//"http://192.168.85.43:8000/sensorNode/")
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {


    //   let x = myJson;



    //   for (var data of x) {

    //     nums.push(data.light);
    //     var sliced = data.time;
    //     sliced = sliced.slice(0, -17);
    //     date.push(sliced)
    //     optimalValue.push(30)
    //     }



    // });
    // this.barChartLabels = date;
    // this.barChartData = [{data:nums, label: 'Actual Values'},
    // {data: optimalValue, label: 'Optimal values'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C'}]

    let act;
    // let state:number[]=[];
    this.httpCLient.get<any>('http://127.0.0.1:8000/registerPlant/').subscribe(
    response =>{
      //console.log(response);
      let x = response;
    for (var data of x) {
      //console.log(data.Temperature);
      this.stateArray.push(data.date);
      }
      // return state[state.length-1];
      act = this.stateArray[this.stateArray.length-1]

    });


    console.log(act)


    //==========================================================================================
    //TEMPERATURE GRAPH
    fetch("http://127.0.0.1:8000/tempAndHumidity/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate = '1/28/2021';
      var tempVar = 0;
      var i = 0;
      var j = 0;


      for (var data of x) {


        var sliced = data.date;
        sliced = sliced.slice(0, -10);
        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();

        tempOptimalValue.push(21)
        tempOptimalValue1.push(26)


        if (sliced == checkDate){

          if (i == 0){
            tempDate.push(sliced)
            i +=1;
          }
          j += 1;
          tempVar =tempVar + Number(data.temperature);

        }
        else{

          tempVar = tempVar/j;

          tempNums.push(tempVar);
          tempVar = 0;
          j=1;

          var cDate = new Date(checkDate);

          cDate.setDate(cDate.getDate()+1);
          checkDate = cDate.toLocaleDateString();


          tempVar =tempVar + Number(data.temperature);
          tempDate.push(sliced)
        }

        }

        tempVar = tempVar/j;

          tempNums.push(tempVar);


    });

    this.tempLabels = tempDate;
    this.tempData = [{data:tempNums, label: 'Actual Values'},
    {data: tempOptimalValue, label: 'Lower Range'},
    {data: tempOptimalValue1, label: 'Upper Range'}]

    //===========================================================================



    //===========================================================================
    //HUMIDITY GRAPH
    fetch("http://127.0.0.1:8000/tempAndHumidity/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate1 = '1/28/2021';
      var humdVar = 0;
      var i1 = 0;
      var j1 = 0;

      for (var data of x) {




        var sliced = data.date;
        sliced = sliced.slice(0, -10);
        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();

        humdOptimalValue.push(50)
        humdOptimalValue1.push(70)


        if (sliced == checkDate1){

          if (i1 == 0){
            humdDate.push(sliced)
            i1 +=1;
          }
          j1 += 1;
          humdVar =humdVar + Number(data.humidity);

        }
        else{

          humdVar = humdVar/j1;

          humdNums.push(humdVar);
          humdVar = 0;
          j1=1;

          var cDate = new Date(checkDate1);

          cDate.setDate(cDate.getDate()+1);
          checkDate1 = cDate.toLocaleDateString();


          humdVar =humdVar + Number(data.humidity);
          humdDate.push(sliced)
        }

        }

        humdVar = humdVar/j1;

          humdNums.push(humdVar);


    });

    this.humdLabels = humdDate;
    this.humdData = [{data:humdNums, label: 'Actual Values'},
    {data: humdOptimalValue, label: 'Lower Range'},
    {data: humdOptimalValue1, label: 'Upper Range'}]

    //====================================================================





    //===========================================================================
    //SOIL HUMIDITY GRAPH
    fetch("http://127.0.0.1:8000/sensorNode/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate2 = '1/27/2021';
      var soilhVar = 0;
      var i2 = 0;
      var j2 = 0;

      for (var data of x) {




        var sliced = data.time;
        sliced = sliced.slice(0, -17);

        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();

        soilhOptimalValue.push(50)
        soilhOptimalValue1.push(70)


        if (sliced == checkDate2){

          if (i2 == 0){
            soilhDate.push(sliced)
            i2 +=1;
          }
          j2 += 1;
          soilhVar =soilhVar + Number(data.soilMoisture);

        }
        else{

          soilhVar = soilhVar/j2;

          soilhNums.push(soilhVar);
          soilhVar = 0;
          j2=1;

          var cDate = new Date(checkDate2);

          cDate.setDate(cDate.getDate()+1);
          checkDate2 = cDate.toLocaleDateString();


          soilhVar =soilhVar + Number(data.soilMoisture);
          soilhDate.push(sliced)
        }

        }

        soilhVar = soilhVar/j2;

          soilhNums.push(soilhVar);


    });

    this.soilhLabels = soilhDate;
    this.soilhData = [{data:soilhNums, label: 'Actual Values'},
    {data: soilhOptimalValue, label: 'Lower Range'},
    {data: soilhOptimalValue1, label: 'Upper Range'}]

    //====================================================================









    //===========================================================================
    //Nitrogen GRAPH
    fetch("http://127.0.0.1:8000/sensorNode/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate3 = '1/27/2021';
      var nVar = 0;
      var i3 = 0;
      var j3 = 0;

      for (var data of x) {




        var sliced = data.time;
        sliced = sliced.slice(0, -17);

        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();

        nOptimalValue.push(130);
        nOptimalValue1.push(150)


        if (sliced == checkDate3){

          if (i3 == 0){
            nDate.push(sliced)
            i3 +=1;
          }
          j3 += 1;
          nVar =nVar + Number(data.N);

        }
        else{

          nVar = nVar/j3;

          nNums.push(nVar);
          nVar = 0;
          j3=1;

          var cDate = new Date(checkDate3);

          cDate.setDate(cDate.getDate()+1);
          checkDate3 = cDate.toLocaleDateString();


          nVar =nVar + Number(data.N);
          nDate.push(sliced)
        }

        }

        nVar = nVar/j3;

          nNums.push(nVar);


    });

    this.nLabels = nDate;
    this.nData = [{data:nNums, label: 'Actual Values'},
    {data: nOptimalValue, label: 'Lower Range'},
    {data: nOptimalValue1, label: 'Upper Range'}]

    //====================================================================








    //===========================================================================
    //Phosphorus GRAPH
    fetch("http://127.0.0.1:8000/sensorNode/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate4 = '1/27/2021';
      var pVar = 0;
      var i4 = 0;
      var j4 = 0;

      for (var data of x) {




        var sliced = data.time;
        sliced = sliced.slice(0, -17);

        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();


        pOptimalValue.push(40);
        pOptimalValue1.push(50)


        if (sliced == checkDate4){

          if (i4 == 0){
            pDate.push(sliced)
            i4 +=1;
          }
          j4 += 1;
          pVar =pVar + Number(data.P);

        }
        else{

          pVar = pVar/j4;

          pNums.push(pVar);
          pVar = 0;
          j4=1;

          var cDate = new Date(checkDate4);

          cDate.setDate(cDate.getDate()+1);
          checkDate4 = cDate.toLocaleDateString();


          pVar = pVar + Number(data.P);

          pDate.push(sliced)
        }

        }

        pVar = pVar/j4;

          pNums.push(pVar);


    });

    this.pLabels = pDate;
    this.pData = [{data:pNums, label: 'Actual Values'},
    {data: pOptimalValue, label: 'Lower Range'},
    {data: pOptimalValue1, label: 'Upper Range'}]

    //====================================================================










    //===========================================================================
    //Potasium GRAPH
    fetch("http://127.0.0.1:8000/sensorNode/")//"http://192.168.85.43:8000/sensorNode/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {


      let x = myJson;


      var checkDate5 = '1/27/2021';
      var kVar = 0;
      var i5 = 0;
      var j5 = 0;

      for (var data of x) {




        var sliced = data.time;
        sliced = sliced.slice(0, -17);

        sliced = new Date(sliced);
        sliced = sliced.toLocaleDateString();

        kOptimalValue.push(200);
        kOptimalValue1.push(260)


        if (sliced == checkDate5){

          if (i5 == 0){
            kDate.push(sliced)
            i5 +=1;
          }
          j5 += 1;
          kVar =kVar + Number(data.K);

        }
        else{

          kVar = kVar/j5;

          kNums.push(kVar);
          kVar = 0;
          j5=1;

          var cDate = new Date(checkDate5);

          cDate.setDate(cDate.getDate()+1);
          checkDate5 = cDate.toLocaleDateString();


          kVar =kVar + Number(data.K);
          kDate.push(sliced)
        }

        }

        kVar = kVar/j5;

          kNums.push(kVar);


    });

    this.kLabels = kDate;
    this.kData = [{data:kNums, label: 'Actual Values'},
    {data: kOptimalValue, label: 'Lower Ranger'},
    {data: kOptimalValue1, label: 'Upper Range'}]

    //====================================================================


  }









}
