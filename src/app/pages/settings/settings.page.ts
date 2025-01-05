import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SettingsPage {
    unit: string = 'metric';

    constructor(private navCtrl: NavController) {}

    saveSettings() {
        localStorage.setItem('unit', this.unit);
        this.navCtrl.navigateBack('/');
    }
}
