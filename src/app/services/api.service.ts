import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private restCountriesUrl = 'https://restcountries.com/v3.1/name/';
    private newsApiUrl = 'https://newsdata.io/api/1/latest';
    private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    private newsApiKey = 'YOUR_NEWSDATA_API_KEY';
    private weatherApiKey = 'YOUR_OPENWEATHER_API_KEY';

    constructor(private http: HttpClient) {}

    getCountries(name: string) {
        return this.http.get(`${this.restCountriesUrl}${name}`);
    }

    getNews(countryCode: string) {
        return this.http.get(`${this.newsApiUrl}?apikey=${this.newsApiKey}&country=${countryCode}`);
    }

    getWeather(lat: string, lon: string, unit: string = 'metric') {
        return this.http.get(`${this.weatherApiUrl}?lat=${lat}&lon=${lon}&units=${unit}&appid=${this.weatherApiKey}`);
    }
}
