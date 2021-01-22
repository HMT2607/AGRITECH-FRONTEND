import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-humidity-details',
  templateUrl: './humidity-details.component.html',
  styleUrls: ['./humidity-details.component.css']
})
export class HumidityDetailsComponent implements OnInit {

  constructor(private httpCLient: HttpClient) { }

  ngOnInit(): void {
  }


  pump(){

    this.httpCLient.get<any>('http://127.0.0.1:8000/pump/').subscribe(
    response =>{
      //console.log(response);
      let x = response;

    var state:number[]=[];
    for (var data of x) {
      //console.log(data.Temperature);
      state.push(data.activation);
      }

      //console.log(state[state.length-1]);

      let act = state[state.length-1].toString();

      //console.log(act)

      if (act == "activated"){
        const url = "http://127.0.0.1:8000/pumpDesact/";
        this.httpCLient.post(url,
        {
            "device_eid": '24E124116A152543',
            "activation": 'desactivated',
            'user_id': 1
        })
        .subscribe(
            (val) => {
                console.log(val);

            },
            response => {
                console.log("POST call in error");
            },
            () => {
                console.log("Request completed.");
            });
      }
//========================================================================
      else if (act == "desactivated"){
        const url = "http://127.0.0.1:8000/pump/";
        this.httpCLient.post(url,
        {
            "device_eid": '24E124116A152543',
            "activation": 'activated',
            'user_id': 1
        })
        .subscribe(
            (val) => {
                console.log(val);

            },
            response => {
                console.log("POST call in error");
            },
            () => {
                console.log("Request completed.");
            });
      }




    }
  );







  }
}
