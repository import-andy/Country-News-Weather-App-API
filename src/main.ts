import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomePage } from './app/home/home.page';
import { SettingsPage } from './app/settings/settings.page';
import { CountriesPage } from './app/countries/countries.page';
import { environment } from './environments/environment';  // Importing environment for production check
import { defineCustomElements } from '@ionic/pwa-elements/loader';  // Importing PWA elements

if (environment.production) {
  enableProdMode();  // Enabling production mode if it’s a production environment
}

// Defining application routes
const appRoutes: Routes = [
  { path: '', component: HomePage },
  { path: 'settings', component: SettingsPage },
  { path: 'countries', component: CountriesPage },
];

bootstrapApplication(HomePage, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(RouterModule),
  ],
});

defineCustomElements(window);  // Initializing the PWA elements

