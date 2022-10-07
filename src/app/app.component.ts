import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.module';
import{WeatherService} from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private weatherService: WeatherService){

}

weatherData?: WeatherData;

  ngOnInit(): void{
    this.weatherService.getWeatherData('London')
    .subscribe({
      next:(response)=>{
        this.weatherData = response;
        const now = new Date();
        console.log(now.toJSON())
        
        // this.weatherData.hourly_units.time.indexOf()
        console.log(response)
      }
    })
  }

}
