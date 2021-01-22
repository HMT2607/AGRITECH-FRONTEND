import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-managecrop',
  templateUrl: './managecrop.component.html',
  styleUrls: ['./managecrop.component.css']
})
export class ManagecropComponent implements OnInit {

  availableCrop:Array<any> = [];
  cropSelectedDetails:Array<any> = [];
  cropSelectedID:any;
  cropSelectedName:any;
  cropSelectedDescription:any;
  cropSelectedNLow:any;
  cropSelectedPLow:any;
  cropSelectedKLow:any;
  cropSelectedPhLow:any;
  cropSelectedNHigh:any;
  cropSelectedPHigh:any;
  cropSelectedKHigh:any;
  cropSelectedPhHigh:any;
  cropSelectedTempHigh:any;
  cropSelectedTempLow:any;
  cropSelectedHumHigh:any;
  cropSelectedHumLow:any;
  cropSelectedEc:any;
  cropSelectedMatureDays:any;

  cropSelected:any;
  modifiedtext:any;
  
  constructor(
    private _http:HttpClient
  ) {
    // this.cropSelected = 0
   }

  ngOnInit(): void {
    this.fillCropDropdown()
    this.cropSelected=1;
  }

  // CROP LIST ENDPOINT
  getCropList() :Observable<any>{
    return this._http.get("http://127.0.0.1:8000/plants/")
  }

  // GET CROP LIST
  fillCropDropdown() {
    this.getCropList().subscribe(
      (response)=>{           

          // loop for each record of response
          for (let i = response.length - 1; i >= 0; i--) {
            this.availableCrop.push(response[i]);
            console.log(response)       
          }
      },
    );
  }

  onCropSelected(val:any)
  {
    this.customFunction(val);
  }

  customFunction(val:any)
  {
    this.modifiedtext= "The Value " + val + " was selected from the dropdown"
    this.getCropList().subscribe(
      (response)=>{  

        for (let i = response.length - 1; i >= 0; i--) {
          if (response[i].id == val) {
            // this.cropSelectedDetails.push(response[i]);
            this.cropSelectedID = response[i].id;
            this.cropSelectedName = response[i].plant_name;
            this.cropSelectedDescription = response[i].description;
            this.cropSelectedNLow = response[i].nitrogen_low;
            this.cropSelectedPLow = response[i].phosphorus_low;
            this.cropSelectedKLow = response[i].potassium_low;
            this.cropSelectedNHigh = response[i].nitrogen_high;
            this.cropSelectedPHigh = response[i].phosphorus_high;
            this.cropSelectedKHigh = response[i].potassium_high;
            this.cropSelectedPLow = response[i].phosphorus_low;
            this.cropSelectedPhLow = response[i].ph_value_low;
            this.cropSelectedPhHigh = response[i].ph_value_High;

            this.cropSelectedTempLow = response[i].temperature_degree_low;
            this.cropSelectedTempHigh = response[i].temperature_degree_high;
            this.cropSelectedHumLow = response[i].humidity_percentage_low;
            this.cropSelectedHumHigh = response[i].humidity_percentage_high;
            this.cropSelectedEc = response[i].EC_value;
            this.cropSelectedMatureDays = response[i].mature_time_days;
          }      
        }
        console.log(this.cropSelectedDetails)
      }
      );
    
    // this.cropSelectedDetails = we;

  }
}
