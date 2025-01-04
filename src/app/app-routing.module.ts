import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'countries/:country', loadComponent: () => import('./countries/countries.page').then(m => m.CountriesPage) },
  { path: 'settings', loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage) },
  { path: 'news/:country', loadComponent: () => import('./news/news.page').then(m => m.NewsPage) },
  { path: 'weather/:lat/:lon', loadComponent: () => import('./weather/weather.page').then(m => m.WeatherPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
