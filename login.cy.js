describe('Login Spec', () => {
    it('passes', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-login').click()
      cy.get('#Email').type("sanbercode123@gmail.com")
      cy.get('#Password').type("123123!")
      cy.get('#RememberMe').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.ico-logout').should('be.visible')
    })
  })

  describe('Login Spec', () => {
    it('failed password', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-login').click()
      cy.get('#Email').type("sanbercode123@gmail.com")
      cy.get('#Password').type("123")
      cy.get('#RememberMe').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.validation-summary-errors > span').should('contain.text', 'Login was unsuccessful. Please correct the errors and try again')
    })
  })

  describe('Login Spec', () => {
    it('failed email dan password', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-login').click()
      cy.get('#Email').type("sanbercode123gmail.com")
      cy.get('#Password').type("123")
      cy.get('#RememberMe').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.field-validation-error > span').should('contain.text', 'Please enter a valid email address.')
    })
  })