import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FetchDataApiService {

  constructor(private http: HttpClient) { }

  getWeatherInfo(){

    // return this.http.get.(api.openweathermap.org/data/2.5/weather?q={cityname}&appid={apiKey});
  }





  searchCity(cityname: string): Observable<any>
  {
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityname
      + '&appid=b9feb11dd0284ae1a415f94d50777169');
    //   .pipe(map((response: Response) => 

    //  {response.json()})
    //    // console.log(response)
    //     //response.text())
    //   );
        
      
  }

  forecast(cityname: String): Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ cityname
    + '&appid=b9feb11dd0284ae1a415f94d50777169');
  }

  
}





// api:

// http://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={apiKey}
