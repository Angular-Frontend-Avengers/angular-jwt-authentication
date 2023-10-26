import { RegisterResponse } from 'src/app/api_response/register/RegisterResponse';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserRegistrationData } from './register.model';
import { Observer } from 'rxjs';

export default {
  // event handler: register button click in registration form
  onRegisterButtonClick: (
    registerUserData: UserRegistrationData,
    authService: AuthService
  ): void => {
    console.log(
      `This is user registration data: ${JSON.stringify(registerUserData)}`
    );
    const registerResponseObserver: Partial<Observer<Object>> = {
      next(apiResponse) {
        console.log(
          `User registered successfully with details - ${JSON.stringify(
            apiResponse
          )}`
        );
        alert('User registered successfully!');
      },
      error(err: any) {
        console.error(
          `User failed to register with details - ${JSON.stringify(err)}`
        );
        alert('User registration failed');
      },
    };
    authService
      .registerUser(registerUserData)
      .subscribe(registerResponseObserver);
  },
};
