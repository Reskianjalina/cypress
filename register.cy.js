describe('Register Spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get(':nth-child(3) > .forcheckbox').click()
    cy.get('#FirstName').type("Monana")
    cy.get('#LastName').type("Lisa")
    cy.get('#Email').type("sanbercode123@gmail.com")
    cy.get('#Password').type("123123!")
    cy.get('#ConfirmPassword').type("123123!")
    cy.get('#register-button').click()
    cy.get('.result').should ('contain.text','Your registration completed')
  })
})