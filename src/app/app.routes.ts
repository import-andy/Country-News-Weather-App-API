import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then(m => m.SettingsPage)
  },
  {
    path: 'countries',
    loadComponent: () => import('./pages/countries/countries.page').then(m => m.CountriesPage)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.page').then(m => m.NewsPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./pages/weather/weather.page').then(m => m.WeatherPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
