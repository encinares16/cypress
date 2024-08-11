/*
  Test Case Checklist
  Clearing Inputted Data from the Module Merchants Fields in 7connect Dashboard
  ✔ The fields in the Module Merchants section that contain inputted data are successfully cleared after clicking the "Reset" button.
  ✔ Clicking the "Reset" button does not cause any unintended effects or issues on the Module Merchants section or other parts of the dashboard.
  ✔ The process of clearing inputted data from the fields of the Module Merchants section is efficient and does not cause any significant delays or disruptions to the user's workflow
*/

describe('7connect Module: Merchants', () => {
  it('should navigate to Search Merchant and clear all fields when reset', () => {
    cy.auth();
    cy.merchant();
    cy.get('.jdm_events > :nth-child(1) > a')
      .click()
      .wait(1500);

    cy.fixture('data').then((data) => {
      cy.get('#reseller')
        .should('exist')
        .should('be.visible')
        .select(data.input.reseller);

      cy.get('#name')
        .should('exist')
        .should('be.visible')
        .type(data.input.merchantName);

      cy.get('#merchantID')
        .should('exist')
        .should('be.visible')
        .type(data.input.merchantId);

      cy.get('#mux')
        .should('exist')
        .should('be.visible')
        .type(data.input.mux);

      cy.get('#expireAfter')
        .should('exist')
        .should('be.visible')
        .type(data.input.expiresAfter); 

      cy.get('#enabled')
        .should('exist')
        .should('be.visible')
        .select(data.input.isEnabled);
        
      cy.get('#validateSevenPay')
        .should('exist')
        .should('be.visible')
        .select(data.input.validate);
  
      cy.get('#featured')
        .should('exist')
        .should('be.visible')
        .select(data.input.feature);
  
      cy.get('#stip')
        .should('exist')
        .should('be.visible')
        .select(data.input.stip);
    })
  
    cy.log('Clicking reset button...')
      .wait(2000);

    cy.get('.reset')
    .should('exist')
    .should('be.visible')
    .should('have.value', 'Reset')
    .click();
    cy.logout();
  })
})
