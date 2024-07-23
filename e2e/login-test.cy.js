
describe('7connect Auth Test', () => {

  it('should display every visible elements', () => {
    cy.visit('login/auth').wait(1000)
    cy.get('img[alt="7-CONNECT"]')
      .should('be.visible')
      .should('exist');
    
    cy.contains('7-Connect')
      .should('exist')
      .should('be.visible');
    
    cy.get('div[id="login"]')
      .should('be.visible')
      .should('exist')  
      .children('.inner')
      .should('be.visible')
      .should('exist')
      .children('form[id="loginForm"]')
      .should('be.visible')
      .should('exist').children('table','tbody','tr','td','label')
      .should('exist')
      .should('be.visible');
  
    cy.get('label[for="username"]')
      .should('exist') 
      .should('be.visible')
      .should('have.text', 'Username:')
      cy.get('label[for="password"]')
      .should('exist') 
      .should('be.visible')
      .should('have.text', 'Password:')

      cy.get('input[id="username"]')
      .should('exist') 
      .should('be.visible')
      
      cy.get('input[id="password"]')
      .should('exist') 
      .should('be.visible')


    cy.get('p')
      .should('exist') 
      .should('be.visible')
      .should('have.text', 'V1.17.5.22')

  })

  it('should pass the login form (with correct credentials)', () => {
    cy.auth().wait(1000)

    cy.get('.jd_menu > li').each(($el, index) => {
      cy.wrap($el).should('exist').click(); 

        cy.wrap($el).invoke('text').wait(1000).then((text) => {
        cy.log(`Module ${index + 1}: ${text}`); 
      });
    });
    cy.logout();
  })

  it('should display error message (with incorrect credentials)', () => {
    cy.visit('login/auth').wait(1000)

    cy.get('input[name="j_username"]')
      .type("incorrectusername")
      .should('be.visible')
      .should('exist')
      .should('not.match', 'qatest');

    cy.get('input[name="j_password"]')
      .type("incorrectpassword")
      .should('be.visible')
      .should('exist')
      .should('not.match', 'ap0ll0');
    
    cy.get('input[value="LOGIN >"]')
      .should('exist')  
      .should('be.visible')
      .click()

    cy.get('.login_message')
      .should('be.visible')
      .should('exist')
      .should('have.text','Sorry, we were not able to find a user with that username and password.')
  })
})








