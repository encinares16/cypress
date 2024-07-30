// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { credential } from "../fixtures/credential";

Cypress.Commands.add('auth', () => {
  cy.visit('login/auth')
  cy.get('input[name="j_username"]')
    .type(credential.username)
    .should('exist')
    .should('be.visible')
    .should('have.value', 'qatest')
    .wait(500);
  
    cy.get('input[name="j_password"]')
      .type(credential.password)
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
  cy.get(':nth-child(2) > .accessible').each(($el, index) => {
    cy.wrap($el)
      .should('exist')
      .should('be.visible').click(); 
      cy.wrap($el).invoke('text').wait(1000).then((text) => {
      cy.log(`Module ${index + 1}: ${text}`)
    });
  });
})

// cy.intercept('POST', '**/login').as('login');
// cy.visit("/")
// cy.wait('@login')