import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Country } from '../../services/api.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonBackButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonBackButton,
    IonButtons,
    IonImg
  ]
})
export class CountriesPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);
  
  countries: Country[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchText = params['search'];
      if (searchText) {
        this.searchCountries(searchText);
      }
    });
  }

  searchCountries(searchText: string) {
    this.apiService.searchCountries(searchText).subscribe({
      next: (data: Country[]) => {
        this.countries = data;
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }

  onNewsClick(country: Country) {
    this.router.navigate(['/news'], {
      queryParams: { 
        countryCode: country.cca2.toLowerCase(),
        countryName: country.name.official
      }
    });
  }

  onWeatherClick(country: Country) {
    if (country.capitalInfo.latlng) {
      const [lat, lon] = country.capitalInfo.latlng;
      this.router.navigate(['/weather'], {
        queryParams: { 
          lat,
          lon,
          countryName: country.name.official
        }
      });
    }
  }
}
