/// <reference types="cypress" />

export class HomePage {
  elements = {
    btnCreateAccount: () => cy.xpath("//a[@data-link-id='registration']"),
  };

  clickOnCreateAccount() {
    this.elements.btnCreateAccount().click();
  }
}
