import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private restCountriesUrl = 'https://restcountries.com/v3.1/name/';
    private newsApiUrl = 'https://newsdata.io/api/1/latest';
    private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    private newsApiKey = 'pub_64387a6b4a6a4541a4878d4e012382158b750';
    private weatherApiKey = 'b6c07c72d5a9de4183ec0c52cd33c12c';

    constructor(private http: HttpClient) {}

    getCountries(name: string): Observable<any> {
        return this.http.get(`${this.restCountriesUrl}${name}`);
    }

    getNews(countryCode: string): Observable<any> {
        return this.http.get(`${this.newsApiUrl}?apikey=${this.newsApiKey}&country=${countryCode}`);
    }

    getWeather(lat: string, lon: string, unit: string = 'metric'): Observable<any> {
        return this.http.get(`${this.weatherApiUrl}?lat=${lat}&lon=${lon}&units=${unit}&appid=${this.weatherApiKey}`);
    }
}
