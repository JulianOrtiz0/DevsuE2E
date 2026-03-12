import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
    get firstNameInput() { return cy.get('[data-test="firstName"]'); }
    get lastNameInput() { return cy.get('[data-test="lastName"]'); }
    get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
    get continueButton() { return cy.get('[data-test="continue"]'); }
    get finishButton() { return cy.get('[data-test="finish"]'); }
    get completedOrderHeader() { return cy.get('[data-test="complete-header"]')}
    get completedOrderText() { return cy.get('[data-test="complete-text"]')}

    fillCheckoutForm(firstName: string, lastName: string, postalCode: string):void{
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.postalCodeInput.type(postalCode);
        this.continueButton.click();
    }

    completePurchase():void{
        this.finishButton.click();
    }

    
}