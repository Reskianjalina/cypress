describe('Add Cart Spec', () => {
    it('passes', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-login').click()
      cy.get('#Email').type("sanbercode123@gmail.com")
      cy.get('#Password').type("123123!")
      cy.get('#RememberMe').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.ico-logout').should('be.visible')
      cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
      cy.get('.ico-cart > .cart-label').click()
      cy.get('.cart-header-row > :nth-child(3)').should('be.visible')
    })
  })