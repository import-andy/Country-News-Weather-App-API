import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CountriesPage {
    countries: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private navCtrl: NavController
    ) {}

    ngOnInit() {
        const countryName = this.route.snapshot.paramMap.get('country');
        this.apiService.getCountries(countryName || '').subscribe(data => {
            this.countries = data;
        });
    }

    viewNews(countryCode: string) {
        this.navCtrl.navigateForward(`/news/${countryCode}`);
    }

    viewWeather(lat: string, lon: string) {
        this.navCtrl.navigateForward(`/weather/${lat}/${lon}`);
    }
}
