import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
    newsArticles: any[] = [];

    constructor(private route: ActivatedRoute, private apiService: ApiService) {}

    ngOnInit() {
        const countryCode = this.route.snapshot.paramMap.get('country');
        this.apiService.getNews(countryCode || '').subscribe((data: any) => {
            this.newsArticles = data.results;
        });
    }
}
