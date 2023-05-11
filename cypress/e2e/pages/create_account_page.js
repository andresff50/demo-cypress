export class CreateAccountPage {
  elements = {
    lblTitleCreateAccount: () => cy.get("span[data-cy='title']"),
  };

  validateRegisterPage(expected) {
    this.elements.lblTitleCreateAccount().should('have.text', expected);
  }
}
