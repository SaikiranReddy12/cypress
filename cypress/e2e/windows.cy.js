/// <reference types="cypress"/>


 
//test cases 
it("Verify iframe",()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.switchToIframe('#mce_0_ifr').clear()
    cy.wait(5000)
    cy.switchToIframe('#mce_0_ifr').type("this is a iframe example")
    
 })

 it("Verify windows",()=>{
   cy.visit('https://the-internet.herokuapp.com/iframe')
   cy.xpath("//a[contains(@href,'github')]").invoke('removeAttr','target').click({force:true})
   
})
 

it.only("Verify navigation and cross origin",()=>{
   cy.visit('https://the-internet.herokuapp.com/iframe')
   cy.visit('https://staging.engineer.ai')
   //cy.go('back')
   cy.origin('https://staging.engineer.ai',()=>{
      cy.get('.builderNowCta').click()

   })

})

