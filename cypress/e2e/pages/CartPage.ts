import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    get checkoutButton() { return cy.get('[data-test="checkout"]'); }

    proceedToCheckout(): void {
        this.checkoutButton.click();
    }
}