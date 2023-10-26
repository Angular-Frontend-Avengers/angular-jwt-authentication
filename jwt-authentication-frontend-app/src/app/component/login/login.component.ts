import { AuthService } from 'src/app/service/auth/auth.service';
import { Component } from '@angular/core';

import { UserLoginData } from './login.model';
import LoginEventHandler from './login.event_handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  protected userLoginData: UserLoginData;

  constructor(private authService: AuthService) {
    this.userLoginData = { email: '', password: '' };
  }

  protected onLoginButtonClick(): void {
    LoginEventHandler.onLoginButtonClick(this.userLoginData, this.authService);
  }
}
