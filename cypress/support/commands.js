

// import { credential } from "../fixtures/credential";

Cypress.Commands.add('auth', () => {
  cy.log(Cypress.env('USERNAME'))
  
  cy.visit('login/auth')
  cy.get('input[name="j_username"]')
    .type(Cypress.env('USERNAME'))
    .should('exist')
    .should('be.visible')
    .should('have.value', 'qatest')
    .wait(500);
  
    cy.get('input[name="j_password"]')
      .type(Cypress.env("PASSWORD"))
      .should('exist')
      .should('be.visible')
      .should('have.value', 'ap0ll0')
      .wait(500);

  cy.get('input[value="LOGIN >"]').should('exist').click()
  cy.url().should('include', '/')
})

Cypress.Commands.add('logout', () => {
  cy.get('[href="/logout/index"]').should('exist').click()
})

Cypress.Commands.add('merchant', () => {
  cy.visit('merchant/search').wait(1000)
  cy.get(':nth-child(2) > .accessible').each((element, index) => {
    cy.wrap(element)
      .should('exist')
      .should('be.visible').click(); 
      cy.wrap(element).invoke('text').wait(1000).then((text) => {
      cy.log(`Module ${index + 1}: ${text}`)
    });
  });
})

// cy.intercept('POST', '**/login').as('login');
// cy.visit("/")
// cy.wait('@login')