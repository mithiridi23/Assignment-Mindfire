import { Component, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FetchDataApiService } from '../fetch-data-api.service';
import { WeatherData} from '../shared/data.model';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.css'],
  providers: [FetchDataApiService]
})
export class SearchAPIComponent implements OnInit {

  public cityName: string;
  public Temperature: number;


  weatherforecast: WeatherData[] = []
//   weatherforecast: SearchAPIComponent [];
   

  constructor(private fetchdata: FetchDataApiService) { 
    
    console.log("weather");
  }

  ngOnInit() {
  }

  OnSubmit(form: NgForm){
    console.log(form.value.cityname)
     this.fetchdata.searchCity(form.value.cityname).subscribe(
      data => {
        let name =data.name;
        let temp =data.main;
        console.log(data);
        console.log(data.name)
        
        console.log(data.weather[0].id)
        console.log(temp.temp)

        this.cityName =name;
        this.Temperature=temp.temp;

            }
     )

     this.fetchdata.forecast(form.value.cityname).subscribe(

      response =>{
        console.log("Hi");
         const val =4;
         console.log(response.list);
         console.log(response.list[4].main.temp);
         this.weatherforecast.push(response.list[4].main.temp);
         //Iteration for next 5 days 
        for(var i=3;i<=9;){
          console.log(val*i);
          //console.log(response.list[forecast]);
          var forecast= val*i;

          i=i+2;

          this.weatherforecast.push(response.list[forecast].main.temp);

        }
        console.log(this.weatherforecast);
        
      }
     )
    
  }

}
