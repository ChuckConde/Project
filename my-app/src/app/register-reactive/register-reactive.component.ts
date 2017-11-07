import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './register-reactive-password-matcher.class';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.scss']
})
export class RegisterReactiveComponent implements OnInit {
  minDate = {year: 1900, month: 1, day: 1};
  form: FormGroup;
    constructor(private fb: FormBuilder, private personService: PersonService,) {
      this.createForm();
    }

    private createForm() {
      this.form = this.fb.group({
        firstname: [null, [
          Validators.required,
          Validators.minLength(3)
        ]],
        lastname: [null, [Validators.required,
          Validators.minLength(3)]],
        email: [null, [
          Validators.required,
          Validators.email
        ]],
        password: [null, [
          Validators.required,
        ]],
        confirmPassword: [null, [
          Validators.required,
        ]],
        dob: [null],
        country: [null],
        accept: [false, Validators.requiredTrue]
      }, {
        validator: PasswordValidation.MatchPassword
      });
    }
    onSubmit() {
      this.personService.savePerson(this.form.value);
    }
    ngOnInit() {
    }
  }
  