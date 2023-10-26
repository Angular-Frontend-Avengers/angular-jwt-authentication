import { Observer } from 'rxjs';

import { UserLoginData } from './login.model';
import { AuthService } from 'src/app/service/auth/auth.service';

export default {
  onLoginButtonClick: (
    userLoginData: UserLoginData,
    authService: AuthService
  ): void => {
    console.log(
      `User attempting to login: ${JSON.stringify(userLoginData.email)}`
    );
    const loginResponseObserver: Partial<Observer<Object>> = {
      next(loginAPIResponse: any) {
        console.log(
          `User logged in successfully! - ${JSON.stringify(loginAPIResponse)}`
        );
        alert(loginAPIResponse.message);
      },
      error(err) {
        console.log(`Login attempt failed for user ${userLoginData.email}`);
        alert(err.message);
      },
    };
    authService.loginUser(userLoginData).subscribe(loginResponseObserver);
  },
};
