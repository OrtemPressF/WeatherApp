import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  public tabHeaderText: Object[] = [
    {text : 'Weather'},
    {text : 'Graph'},
    {text : 'Heat-index'}
  ]
  public tabContent: string[]=[
    "Weather",
    "Index",
    "Calc"
  ]
}
