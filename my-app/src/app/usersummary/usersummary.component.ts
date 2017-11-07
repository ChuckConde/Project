import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usersummary',
  templateUrl: './usersummary.component.html',
  styleUrls: ['./usersummary.component.scss']
})
export class UsersummaryComponent implements OnInit {

  users: User;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getUsersummary(params['id']);
    });
  }

  private getUsersummary(id: number) {
    this.userService.getUsersummary(id).subscribe(users => {
      this.users = users;
    });
  }
}
