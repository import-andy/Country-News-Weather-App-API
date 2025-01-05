import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, WeatherResponse } from '../../services/api.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonImg
  ]
})
export class WeatherPage implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private storageService = inject(StorageService);

  weather?: WeatherResponse;
  countryName: string = '';
  unit: string = 'metric';

  async ngOnInit() {
    this.unit = await this.storageService.getUnit();
    
    this.route.queryParams.subscribe(params => {
      const lat = Number(params['lat']);
      const lon = Number(params['lon']);
      this.countryName = params['countryName'];
      
      if (lat && lon) {
        this.loadWeather(lat, lon);
      }
    });
  }

  loadWeather(lat: number, lon: number) {
    this.apiService.getWeather(lat, lon, this.unit).subscribe({
      next: (response: WeatherResponse) => {
        this.weather = response;
      },
      error: (error) => {
        console.error('Error fetching weather:', error);
      }
    });
  }

  getWeatherIconUrl(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getTemperatureUnit(): string {
    return this.unit === 'metric' ? '°C' : '°F';
  }
}
