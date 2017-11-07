import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { CommentsService } from '../comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comments';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    article: Article;
    comments: Comment[];


    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.getArticle(params['id']);
      });
      this.activatedRoute.params.subscribe(params => {
        this.getComments(params['id']);
      });
    }

    private getArticle(id: number) {
      this.articleService.getArticle(id).subscribe(article => {
        this.article = article;
      });
    }
      private getComments(id: number) {
      this.commentsService.getComments(id).subscribe(comments => {
        this.comments = comments;
      });
    }
}
