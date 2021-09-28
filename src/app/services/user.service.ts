import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  emailExists(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(500),
      map((email) => {
        const emails = ['consult@zoaibkhan.com', 'zoaib@gmail.com'];
        return emails.includes(email);
      })
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(() => null)
      );
    };
  }
}
