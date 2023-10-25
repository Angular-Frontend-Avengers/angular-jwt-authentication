import { UserRegistrationData } from './register.model';

export default {
  // event handler: register button click in registration form
  onRegisterButtonClick: (registerUserData: UserRegistrationData): void => {
    console.log(
      `This is user registration data: ${JSON.stringify(registerUserData)}`
    );
  },
};
