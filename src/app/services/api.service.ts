import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  name: {
    official: string;
  };
  cca2: string;
  capitalInfo: {
    latlng?: [number, number];
  };
}

export interface NewsResponse {
  results: Array<{
    title: string;
    description: string;
    image_url?: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly NEWS_API_KEY = 'pub_64387a6b4a6a4541a4878d4e012382158b750';

  constructor(private http: HttpClient) {}

  searchCountries(searchText: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${searchText}`);
  }

  getNews(countryCode: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      `https://newsdata.io/api/1/latest?apikey=${this.NEWS_API_KEY}&country=${countryCode}`
    );
  }
}
