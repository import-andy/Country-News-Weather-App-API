import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, NewsResponse } from '../services/api.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBackButton,
    IonButtons,
    IonImg
  ]
})
export class NewsPage implements OnInit {
  news: NewsResponse['results'] = [];
  countryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const countryCode = params['countryCode'];
      this.countryName = params['countryName'];
      if (countryCode) {
        this.loadNews(countryCode);
      }
    });
  }

  loadNews(countryCode: string) {
    this.apiService.getNews(countryCode).subscribe({
      next: (response: NewsResponse) => {
        this.news = response.results;
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    });
  }
} 