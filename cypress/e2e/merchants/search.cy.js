  
  /*
    Test Case
    ✔ Unable to search if at least one field not satisfies the condition 
    ✔ Search Functionality is not contains 
    ✔ Able to search by clicking the Search button or Enter key 
    - Able to sort the details by clicking in the column header
    ✔ Pagination is working as expected  
  */

describe('7connect Module: Merchants', () => {
    it('should navigate to "Search Merchant" under the merchants module', () => {
      cy.auth()
      cy.merchant();
      cy.get('.jdm_events > :nth-child(1) > a').click().wait(3000);
      cy.logout();
    })
    
    it('should navigate to "Search Merchant" and searching should not be possible if at least one field does not satisfy the condition', () => {
      cy.auth()
      cy.merchant();
      cy.get('.jdm_events > :nth-child(1) > a').click();
      cy.get('.search')
      cy.logout();
    })
  
    it('should filter "ecpay" reseller dropdown and display the expected output in the rows of the table', () => {
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
  
        let result = [];
  
        for (let index = 1; index <= 10; index++) {
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
  
    it('pagination functionality should work correctly', () => {
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
  
      let result = [];
  
      cy.get(`.paginateButtons`).within(() => {
        cy.get('a.step').each((cell, i) => {
          result.push(cell.text())
          cy.wrap(cell)
          .should('exist')
          .should('be.visible')
          .should('have.text', result[i]).wait(200);
        });
        result = [];
      });
  
      for (let index = 1; index <= 6; index++) {
        cy.get(`.paginateButtons`).within(() => {
          cy.get(`:nth-child(${index})`)
            .should('exist')
            .should('be.visible')
            .click();
        });
      }
    })
  
    // Able to search by clicking the Search button or Enter key
    it('should able to search by Enter key', () => {
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
  
      let merchantName = 'Zeus.ph'
  
      cy.log('Pressing Enter key button')
      cy.get('#name')
      .should('exist')
      .should('be.visible')
      .type(`${merchantName}{enter}`)
  
    })
  
  })
