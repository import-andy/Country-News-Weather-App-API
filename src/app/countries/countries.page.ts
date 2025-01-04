import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
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
        this.apiService.getCountries(countryName || '').subscribe((data: any) => {
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
