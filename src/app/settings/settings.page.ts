import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
    unit: string = 'metric';

    constructor(private navCtrl: NavController) {}

    saveSettings() {
        localStorage.setItem('unit', this.unit);
        this.navCtrl.navigateBack('/');
    }
}
