import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserRegistrationData } from 'src/app/component/register/register.model';

import RouteConstants from '../routes';
import { Observable } from 'rxjs';
import { RegisterResponse } from 'src/app/api_response/register/RegisterResponse';
import { UserLoginData } from 'src/app/component/login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(userRegistrationData: UserRegistrationData): Observable<Object> {
    return this.httpClient.post<UserRegistrationData>(
      `${RouteConstants.BACKEND_HOST}${RouteConstants.API_ROUTE}${RouteConstants.USER_REGISTRATION}`,
      userRegistrationData
    );
  }

  loginUser(userLoginData: UserLoginData): Observable<Object> {
    return this.httpClient.post<UserLoginData>(
      `${RouteConstants.BACKEND_HOST}${RouteConstants.API_ROUTE}${RouteConstants.USER_LOGIN}`,
      userLoginData
    );
  }
}
