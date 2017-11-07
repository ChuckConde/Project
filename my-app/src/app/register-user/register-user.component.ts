import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  person: any;
  
    constructor(private personService: PersonService) { }
  
    ngOnInit() {
      this.personService.getPerson().subscribe(data => {
        this.person = data;
      });
    }
  
  }