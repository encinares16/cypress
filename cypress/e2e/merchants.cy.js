describe('7connect Module: Merchants', () => {
  // it('should navigate to "Search Merchant" under the merchants module', () => {
  //   cy.auth()
  //   cy.merchant();
  //   cy.get('.jdm_events > :nth-child(1) > a').click().wait(3000);
  //   cy.logout();
  // })
  
  // it('should navigate to "New Merchant" under the merchants module', () => {
  //   cy.auth()
  //   cy.merchant();
  //   cy.get('.jdm_events > :nth-child(2) > a').click().wait(3000);
  //   cy.logout();
  // })

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

      // const result = [
      //   'Ensogo',
      //   'ensogo',
      //   'ecpay',
      //   'ensogoMux', '2,880','True','False','False','True'
      // ];

      // cy.get('tbody > :nth-child(1) > :nth-child(3)')
      // cy.get('.list > table > tbody > :nth-child(1)').within(() => {
      //   cy.get('td').each((cell, i) => {
      //     cy.wrap(cell)
      //     .should('exist')
      //     .should('be.visible')
      //     .should('have.text', result[i]);
      //   });
      // });
  
      // cy.get('.paginateButtons > :nth-child(2)').click()

      let result = [];

      for (let index = 10; index <= 10; index++) {
        cy.get(`.list > table > tbody > :nth-child(${index})`).within(() => {
          cy.get('td').each((cell, i) => {
            result.push(cell.text())
            cy.wrap(cell)
            .should('exist')
            .should('be.visible')
            .should('have.text', result[i]).wait(200);
            // cy.log(cell.text())
          });
          result = [];
        });
      }

  })
  })


