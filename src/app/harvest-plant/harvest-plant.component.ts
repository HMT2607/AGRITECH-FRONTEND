import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harvest-plant',
  templateUrl: './harvest-plant.component.html',
  styleUrls: ['./harvest-plant.component.css']
})
export class HarvestPlantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  post(name:string, date:string, kg:string){

    var date1 = new Date(date);
    date = date1.toLocaleDateString()
    alert(date1.toLocaleDateString());



  fetch('http://127.0.0.1:8000/harvestPlant/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({plant: name, date: date, weight: kg, is_active: 1})
}).then(res=>res.json())
  .then(res => console.log(res));


  }

}

