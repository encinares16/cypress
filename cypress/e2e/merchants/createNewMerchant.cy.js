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
        
  it('should be redirected to the Show Merchant form showing the new merchant details once successful',() => {
    cy.get('h1')
      .should('exist')
      .should('be.visible')  
      .should('have.text', 'Create Merchant')  

    cy.fixture('data').then((data)=>{
      cy.get('#name')
        .should('exist')
        .should('be.visible')
        .type(data.newMerchant.merchantName);

      cy.get('#merchantID')
        .should('exist')
        .should('be.visible')
        .type(data.newMerchant.merchantId);

      cy.get('#mux')
        .should('exist')
        .should('be.visible')
        .type(data.newMerchant.mux);

      cy.get('select[id="reseller.id"]')
        .should('exist')
        .should('be.visible')
        .select(data.newMerchant.reseller)
        
      cy.get('#expireAfter')
        .should('exist')
        .should('be.visible')
        .clear()
        .should('have.text', '')
        .type(data.newMerchant.expiresAfter);

      cy.get('#stip')
        .should('exist')
        .should('be.visible')
        .should('not.be.checked')
        .check().should('be.checked');

      cy.log('Click the create button...')
      cy.get('#create')
        .should('exist')
        .should('be.visible')
        .should('have.value', 'Create')
        .should('have.attr', 'class', "save")
        .should('have.attr', 'id', "create")
        .click();
    })

    cy.get('h1')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Show Merchant');

    cy.get('.message')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'class', "message")
  })


  it('should not be able to create new merchany by using existing details for merchant name, merchant id and merchant mux cannot be blank',()=>{
    cy.fixture('data').then((data)=>{
      cy.get('#name')
        .should('exist')
        .should('be.visible')
        .type(data.newMerchant.merchantName);

      cy.get('#merchantID')
        .should('exist')
        .should('be.visible')
        .type(data.newMerchant.merchantId);
    })

    cy.log('Click the create button...').wait(2000)
    cy.get('#create')
      .should('exist')
      .should('be.visible')
      .should('have.value', 'Create')
      .should('have.attr', 'class', "save")
      .should('have.attr', 'id', "create")
      .click();

    cy.get('div.errors > ul > :nth-child(1)')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Merchant ID must be unique');

    cy.get('div.errors > ul > :nth-child(2)')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Mux cannot be blank');

      cy.get('div.errors > ul > :nth-child(3)')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Name must be unique');
  })
})
