/// <reference types="cypress"/>


describe('Login Page test suite', () => {
    let jsonData
   before(()=>{
    cy.fixture('data').then(function (data){
        cy.log(data.username)
        jsonData=data
        cy.log(jsonData.username)
    })
   }) 
    beforeEach(()=>{
       
      cy.visit(Cypress.env('appUrl'))
    })

 
//test cases 
    it("Verify login with correct credentials",()=>{
        cy.get('.builderNowCta').click()
        cy.get('.topPart > .closeButton > .icon-cancel').click()
        cy.get('li > button').click()
        cy.get('#loginEmailInput').type(jsonData.username)
        cy.xpath("//input[@type='password']").type(jsonData.password)
        cy.xpath("//button[contains(text(),'Sign in')]").click()
        cy.get('.userProfile').should('be.visible')
    })

    
//test cases 
it("Verify intract using attribute and extract attribute value",()=>{
    cy.get('.builderNowCta').click()
    cy.get('.topPart > .closeButton > .icon-cancel').click()
    cy.get('li > button').click()
    cy.get("[type='email']").invoke('attr','placeholder').should('deep.equal','Company email')
   
})
})