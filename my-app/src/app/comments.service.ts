import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Comment } from './comments';


@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  getComments(id: number): Observable<Comment[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments' )
      .map(data => data.json());
  }
}
