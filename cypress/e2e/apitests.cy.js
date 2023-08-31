/// <reference types="cypress"/>


it("login api test",()=>{

    cy.request('POST','https://api-staging-builder.engineer.ai/users/sign_in',{"email":"simplilearnjuly2023@yopmail.com","password":"12345678"})
    .then((response)=>{
        expect(response.status).to.be.eq(200)
        expect(response.body.user.email).to.be.eq('simplilearnjuly2023@yopmail.com')
    })
})
    it.only("get user api test",()=>{

        cy.request({
            method:'GET',
            url:'https://api-staging-builder.engineer.ai/user',
            headers:{'authtoken': 'DXJhygqXBHwFoRWuTSzc'},
        })
        .then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body.email).to.be.eq('simplilearnjuly2023@yopmail.com')
        })
    })
