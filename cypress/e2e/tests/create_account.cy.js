const { CreateAccountSteps } = require('../steps/create_account_steps');

describe('Create Account in MercadoLibre website', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.co/');
  });

  it('TC01 - create an account successfully', () => {
    const createAccountSteps = new CreateAccountSteps();
    createAccountSteps.createAccount();
  });

  it('TC02 - Create an account with an existing email', () => {
    //code
  });
});
