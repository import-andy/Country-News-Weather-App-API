import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
    weatherData: any;
    unit = 'metric';

    constructor(private route: ActivatedRoute, private apiService: ApiService) {}

    ngOnInit() {
        const lat = this.route.snapshot.paramMap.get('lat');
        const lon = this.route.snapshot.paramMap.get('lon');
        this.apiService.getWeather(lat || '', lon || '', this.unit).subscribe((data: any) => {
            this.weatherData = data;
        });
    }
}
