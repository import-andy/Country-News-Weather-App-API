import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
    studentNumber = 'G00438837';
    countryName = '';

    constructor(private navCtrl: NavController) {}

    searchCountries() {  //  Method is correctly defined here
        if (this.countryName.trim()) {
            this.navCtrl.navigateForward(`/countries/${this.countryName}`);
        } else {
            alert('Please enter a valid country name.');
        }
    }
}
