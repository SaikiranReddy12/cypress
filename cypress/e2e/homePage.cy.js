/// <reference types="cypress"/>




describe('Homepage test suite', () => {
  beforeEach(()=>{
    cy.visit('https://staging.engineer.ai')
  })
  
    it('verify homepage title', () => {
      cy.title().should('deep.equal','Builder.ai - Home')
  
    })
  
    it('assertions samples', () => {
      assert.equal(1,1)
      expect(1).to.be.eq(1)
  
    })
  
    it('Verify template search using natasha ai', () => {
      cy.get('.builderNowCta').click()
      cy.get('.searchBar').type('chandan mishra')
      cy.get('.searchBoxSection > .searchButton').click()
      cy.get('.searchBoxSection > #input1').type('ola')
      cy.get('.searchBoxSection > .searchButton').click()
      cy.wait(10000)
      cy.get(':nth-child(1) > .templateCard > .header > .title > .titleText > span').should('have.text',' Ola')
      
    })
  
    it.only('Verify template price', () => {
      cy.get('.builderNowCta').click()
      cy.get('.topPart > .closeButton > .icon-cancel').click()
      cy.get('.filterTabs > ul > :nth-child(3)').click()
      var templatePrice="0"
      const expectedPrice=" ₹ 17,499"
      
      cy.get(':nth-child(1) > .templateCard > .footer > .title > :nth-child(1) > .pricewithmonth > .pHeading').then(function($element)
      {
        templatePrice=$element.text()
        assert.equal(templatePrice,expectedPrice)
      }) 
      cy.get(':nth-child(1) > .templateCard > .footer > .actionbx > .viewDetail').click()
      cy.wait(10000)
      cy.get(':nth-child(1) > label > .pricingRow > strong').contains(expectedPrice)
    
    })
  
  })