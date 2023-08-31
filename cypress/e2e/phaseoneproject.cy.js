/// <reference types="cypress"/>

it("Verify login with correct credentials",()=>{
    cy.visit("https://staging.engineer.ai/home")
    cy.get('.builderNowCta').click()
    cy.get('.topPart > .closeButton > .icon-cancel').click()
    cy.get('li > button').click()
    cy.get('#loginEmailInput').type("simplilearnjuly2023@yopmail.com")
    cy.get('.relativeRow > .ng-pristine').type("12345678")
    cy.get('.doneButton').click()
    cy.get(':nth-child(1) > .templateCard').click()
    cy.get('.getStart').click()
    cy.viewport(1440,900)   
    const customisationCost="₹1,96,910.77"
    var FixedCost="₹6,78,597.00"
    var totalCost="₹8,75,508.00"
    var indicativeDuration="18 weeks"
    cy.get('.customizeCost > h3 > strong').contains(customisationCost)
    cy.get('.reusableCost > h3 > strong').contains(FixedCost)
    cy.get('.maxpriceBox > h3 > strong').contains(totalCost)
    cy.get('.durationBox > h3 > strong').contains(indicativeDuration)
    cy.get('.nextButton').click()
    cy.get('.customizeCost > h3 > strong').contains(customisationCost)
    cy.get('.reusableCost > h3 > strong').contains(FixedCost)
    cy.get('.maxpriceBox > h3 > strong').contains(totalCost)
    cy.get('.durationBox > h3 > strong').contains(indicativeDuration)
    cy.get('.builderCarePlus > .sectionIcon > .checkIcon > label').click()
    cy.get('.previewBottom > div > .nextButton').click()
    cy.get('.popHolder > .ng-pristine').click()
    cy.get('.popHolder > .ng-pristine').type("phaseOneProject")
    cy.get('.popHolder > button').click()
    cy.get('.paymentSummary > h3.ng-star-inserted').should('have.text',"Payment Summary ")
    cy.get('.costDuration > :nth-child(1) > label').should('have.text',"Customisation Cost")
    cy.get('.costDuration > :nth-child(1) > p > strong').contains(customisationCost)
    cy.get('.fixedCost > label').should('have.text',"Fixed Cost")
    cy.get(':nth-child(2) > p > strong').contains("₹6,78,596.95")
    cy.get('.careText').should('have.text',"Builder Studio One+")
    cy.get('.careContentRow > p > strong').contains("₹92,158.68")
    cy.get('.detailRow > .title').should('have.text',"Total Cost ")
    cy.get('.detailRow > .ng-star-inserted > strong').contains("₹9,67,666.39")
    cy.get(':nth-child(5) > .boldText').should("have.text"," 5 Months")



})