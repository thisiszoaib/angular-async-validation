import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  emailControl = new FormControl('', {
    validators: [Validators.required, Validators.email],
    asyncValidators: this.userService.uniqueEmailValidator(),
    updateOn: 'blur',
  });
}
