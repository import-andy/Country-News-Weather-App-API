import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonBackButton,
    IonButtons,
    FormsModule
  ]
})
export class SettingsPage implements OnInit {
  selectedUnit = 'metric';

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.selectedUnit = await this.storageService.getUnit();
  }

  async onUnitChange(event: any) {
    await this.storageService.setUnit(event.detail.value);
  }
} 