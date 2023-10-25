import { Component } from '@angular/core';

import { UserRegistrationData } from './register.model';
import RegisterEventHandler from './register.event_handler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // binded with user registration form in 'register.component.html'
  protected registerUserData: UserRegistrationData;

  private constructor() {
    this.registerUserData = { email: '', password: '' };
  }

  // event handler: register button click in registration form
  protected onRegisterButtonClick = (): void =>
    RegisterEventHandler.onRegisterButtonClick(this.registerUserData);
}
