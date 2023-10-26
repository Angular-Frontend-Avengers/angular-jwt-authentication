import { Component } from '@angular/core';

import { UserRegistrationData } from './register.model';
import RegisterEventHandler from './register.event_handler';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // binded with user registration form in 'register.component.html'
  protected registerUserData: UserRegistrationData;

  constructor(private authService: AuthService) {
    this.registerUserData = { email: '', password: '' };
  }

  // event handler: register button click in registration form
  protected onRegisterButtonClick = (): void =>
    RegisterEventHandler.onRegisterButtonClick(
      this.registerUserData,
      this.authService
    );
}
