import { Component } from '@angular/core';

import { UserLoginData } from './login.model';

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

}
