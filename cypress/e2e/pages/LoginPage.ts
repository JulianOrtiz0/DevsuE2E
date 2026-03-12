import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    get usernameInput() { return cy.get('[data-test="username"]') }
    get passwordInput() { return cy.get('[data-test="password"]') }
    get loginButton() { return cy.get('[data-test="login-button"]') }

    login(username: string, password: string):void{
        this.usernameInput.type(username)
        this.passwordInput.type(password)
        this.loginButton.click()
    }
    
}

