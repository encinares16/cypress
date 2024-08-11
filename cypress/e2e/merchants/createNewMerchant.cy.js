/*
  Test Case Checklist
  ✔ All visible element on Create Merchant form is displayed.
*/

describe('7connect Module: Merchants', () => {

  beforeEach(() => {
    cy.auth()
    cy.merchant();
    cy.get('.jdm_events > :nth-child(2) > a').click().wait(2000);
  });
  

  it('should navigate to "New Merchant" under the merchants module and should display visible elements', () => {
    
    cy.get('h1')
      .should('exist')
      .should('be.visible')  
      .should('have.text', 'Create Merchant')  
    
    // cy.get(':nth-child(1) > .name > label')
    //   .should('exist')
    //   .should('be.visible') 
    //   .should('have.text', 'Name:')  

    // cy.get(':nth-child(2) > .name > label')
    //   .should('exist')
    //   .should('be.visible') 
    //   .should('have.text', 'Merchant ID:')  

    //   cy.get(':nth-child(3) > .name > label')
    //   .should('exist')
    //   .should('be.visible') 
    //   .should('have.text', 'Merchant ID:')  

    // cy.get(':nth-child(4) > .name > label')
    //   .should('exist')
    //   .should('be.visible') 
    //   .should('have.text', 'Merchant ID:')  

      let result = [];
            
      for (let index = 1; index <= 13; index++) {
        cy.get(`:nth-child(${index}) > .name`).within(() => {
          cy.get('label').each((element, i) => {
            result.push(element.text())
            cy.wrap(element)
            .should('exist')
            .should('be.visible')
            .should('have.text', result[i]).wait(200);
            // cy.log(element.text())
          });
          result = [];
        });
      }

    // cy.get(`:nth-child(${index}) > .name`).then(($el) => {
    //   if ($el.children().length === 0) {
    //     // Element has no children
    //     cy.log('Element has no children');
    //   } else {
    //     // Element has children
    //     cy.log('Element has children');
    //   }
    // });

    // cy.get('#name')
    // .should('exist')
    // .should('be.visible')

    // cy.get('#merchantID')
    //   .should('exist')
    //   .should('be.visible')
  })
})
