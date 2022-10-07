import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HourlyUnits, WeatherData } from '../models/weather.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData(cityName: string): Observable <WeatherData>{
 return this.http.get<WeatherData>(environment.WeatherApiBaseUrl,{
params: new HttpParams()
.set('q', cityName)
.set('units', 'metric')
.set('mode', 'json')
});
  }
}
