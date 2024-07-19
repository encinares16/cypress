

describe('7connect Auth Test', () => {
  it('should pass the login form (with correct credentials)', () => {
   cy.auth().wait(1000)

    cy.get('.jd_menu > li').each(($el, index) => {
      // cy.wrap($el)
      //   .should('exist')
      //   .click(); 

        cy.wrap($el).invoke('text').wait(1000).then((text) => {
        cy.log(`Module ${index + 1}: ${text}`); 
      });
    });
    cy.logout();
  })

  it('should display error message (with correct credentials)', () => {
    cy.visit('login/auth').wait(1000)

    cy.get('input[name="j_username"]')
      .type("incorrectusername")
      .should('not.match', 'qatest');

    cy.get('input[name="j_password"]')
      .type("incorrectpassword")
      .should('not.match', 'ap0ll0');
    
    cy.get('input[value="LOGIN >"]').click()

    cy.contains('Sorry, we were not able to find a user with that username and password.')    
  })
})








