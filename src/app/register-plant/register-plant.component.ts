import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-plant',
  templateUrl: './register-plant.component.html',
  styleUrls: ['./register-plant.component.css']
})
export class RegisterPlantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  post(name:string, date:string){

    var name1 = name;
    var date1 = new Date(date);
    date = date1.toLocaleDateString()
    alert(date1.toLocaleDateString());



  fetch('http://127.0.0.1:8000/registerPlant/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({plant: name, date: date, is_active: 1})
}).then(res=>res.json())
  .then(res => console.log(res));


  }

}
