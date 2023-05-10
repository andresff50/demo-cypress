/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.co/')
  })

  it('displays two todo items by default', () => {
    cy.xpath("//a[@data-link-id='registration']").click();
    cy.wait(1000)
  })
})