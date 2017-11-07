import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Article } from './article';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles(): Observable<Article[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map(function (data) {
        return data.json();
      });
  }

  getArticle(id: number): Observable<Article> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .map(data => data.json());
  }
}
