import { credential, newCredential } from "../fixtures/credential";

describe('7connect: Change Password Facility', () => {

    it('should check all visible element', () => {
      cy.auth();
      cy.get('a[href="/user/changePassword"]').should('be.visible').click();
      cy.get('h1').should('have.text', 'Change Password');
  
      cy.get('.name > label').each(($el, index) => {
        cy.wrap($el).should('be.visible').invoke('text').wait(500).then((text) => {
          cy.log(`Label ${index + 1}: ${text}`); 
        })
      });
      cy.get('#create').should('be.visible')
    })
  
    it('should allow user to change password', () => {
      cy.auth();
      cy.get('a[href="/user/changePassword"]').should('be.visible').click();
      cy.get('#currentPassword').type(credential.password)
      cy.get('#newPassword').type(newCredential.password)
      cy.get('#newPasswordConf').type(newCredential.password)
      cy.get('#create').should('be.visible').click()
  
      let message = "You've successfully changed your password."
      cy.get('.message').should('have.text', message)
  
      cy.wait(2000);
      cy.get('[href="/logout/index"]').click()
    })
  
    it('should not logged in using old credential', () => {
      cy.auth();
      let message = "Sorry, we were not able to find a user with that username and password."
      cy.get('.login_message').should('have.text', message)
    })
  })