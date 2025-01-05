import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, NewsResponse } from '../../services/api.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonImg, IonThumbnail } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

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
    IonImg,
    IonThumbnail
  ]
})
export class NewsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  news: NewsResponse['results'] = [];
  countryName: string = '';

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
