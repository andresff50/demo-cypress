import { HomePage } from '../pages/home_page';
import { CreateAccountPage } from '../pages/create_account_page';

export class CreateAccountSteps {
  homepage = new HomePage();
  createAccountPage = new CreateAccountPage();

  createAccount() {
    this.homepage.clickOnCreateAccount();
    this.createAccountPage.validateRegisterPage(
      'Para crear tu cuenta necesitamos validar tus datos'
    );
  }
}
