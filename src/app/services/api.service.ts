import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  flags: { 
    png: string;
    svg: string;
  };
  name: { 
    official: string;
    common: string;
  };
  cca2: string;
  capitalInfo: { 
    latlng: number[] 
  };
}

export interface NewsResponse {
  results: Array<{
    title: string;
    description: string;
    image_url?: string;
  }>;
}

export interface WeatherResponse {
  weather: Array<{ description: string; icon: string }>;
  main: { temp: number };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly NEWS_API_KEY = 'pub_64387a6b4a6a4541a4878d4e012382158b750';
  private readonly WEATHER_API_KEY = 'b6c07c72d5a9de4183ec0c52cd33c12c';

  constructor(private http: HttpClient) {}

  searchCountries(searchText: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${searchText}`);
  }

  getNews(countryCode: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      `https://newsdata.io/api/1/latest?apikey=${this.NEWS_API_KEY}&country=${countryCode}`
    );
  }

  getWeather(lat: number, lon: number, units: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.WEATHER_API_KEY}`
    );
  }
}
