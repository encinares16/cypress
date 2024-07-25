describe('7connect Module: Merchants', () => {
  it('should navigate to "Search Merchant" under the merchants module', () => {
    cy.auth()
    cy.merchant();
    cy.get('.jdm_events > :nth-child(1) > a').click().wait(3000);
    cy.logout();
  })
  
  it('should navigate to "New Merchant" under the merchants module', () => {
    cy.auth()
    cy.merchant();
    cy.get('.jdm_events > :nth-child(2) > a').click().wait(3000);
    cy.logout();
  })

  it('should navigate to "Search Merchant" and display the expected output in the first row of the table', () => {
    cy.auth()
    cy.merchant();
    cy.get('.jdm_events > :nth-child(1) > a').click();
    cy.get('#reseller')
      .should('exist')
      .should('be.visible')
      .select('ecpay')

    cy.get('.search')
      .should('exist')
      .should('be.visible').click();

      const firstResult = [
        'Ensogo',
        'ensogo',
        'ecpay',
        'ensogoMux', '2,880','True','False','False','True'
      ];
      
      cy.get('.list > table > tbody > :nth-child(1)').within(() => {
        cy.get('td').each((cell, i) => {
          cy.wrap(cell)
          .should('exist')
          .should('be.visible')
          .should('have.text', firstResult[i]);
        });
      });
  })
  })


