import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    FormsModule
  ]
})
export class HomePage {
  studentNumber = 'G00438837';
  searchText = '';

  constructor(private router: Router) {
    addIcons({ settingsOutline });
  }

  onSettings() {
    this.router.navigate(['/settings']);
  }

  onSearch() {
    if (this.searchText.trim()) {
      this.router.navigate(['/countries'], {
        queryParams: { search: this.searchText }
      });
    }
  }
} 