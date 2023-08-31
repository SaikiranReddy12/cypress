class LoginPage {

    //locators

    chooseBaseBtn = '.builderNowCta'
    cancelIconNatashaChat = '.topPart > .closeButton > .icon-cancel'
    signSignUpFormBtn = 'li > button'
    usernameTexbox = '#loginEmailInput'
    passwordTextbox = "//input[@type='password']"
    loginBtn = "//button[contains(text(),'Sign in')]"
    userProfileLable = '.userProfile'

    //steps
    goToLoginForm() {
        cy.get(this.chooseBaseBtn).click()
        cy.get(this.cancelIconNatashaChat).click()
        cy.get(this.signSignUpFormBtn).click()

    }
    login(username, password) {
        cy.get(this.usernameTexbox).type(username)
        cy.xpath(this.passwordTextbox).type(password)
        cy.xpath(this.loginBtn).click()
        cy.get(this.userProfileLable).should('be.visible')

    }


}

export default LoginPage
