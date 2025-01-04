import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
    studentNumber = 'G00438837';
    countryName = '';

    constructor(private apiService: ApiService, private navCtrl: NavController) {}

    searchCountries() {
        this.navCtrl.navigateForward(`/countries/${this.countryName}`);
    }
}
