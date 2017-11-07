import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    p = 1;
    articles: Article[] = [];
    constructor(private articleService: ArticleService) { }

    ngOnInit() {
      this.articleService.getArticles().subscribe(articles => {
        this.articles = articles;
      });
    }

}
