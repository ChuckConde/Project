import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
    static MatchPasswordValues(password: string, confirmPassword: string) {
        if (password === confirmPassword) {
            return null;
        }

        return {
            matchPassword: true
        };
    }

    static MatchPassword(controls: AbstractControl) {
        const password = controls.get('password').value;
        const confirmPassword = controls.get('confirmPassword').value;

        if (password === confirmPassword) {
            return null;
        } else {
            return {
                matchPassword: true
            };
        }
    }
}
