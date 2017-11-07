import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

    getUserlist(): Observable<User[]> {
      return this.http
        .get('https://jsonplaceholder.typicode.com/users' )
        .map(data => data.json());
    }
    getUsersummary(id: number): Observable<User> {
      return this.http
        .get('https://jsonplaceholder.typicode.com/users/' + id)
        .map(data => data.json());
    }
}
