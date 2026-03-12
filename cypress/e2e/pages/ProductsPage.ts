import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
    get inventoryItems() { return cy.get('[data-test="inventory-item"]'); }
    get shoppingCartBadge() { return cy.get('.shopping_cart_badge'); }
    get cartIcon() { return cy.get('.shopping_cart_link'); }

    addItemToCart(itemName: string): void {
        this.inventoryItems
            .contains(itemName)
            .closest('[data-test="inventory-item-description"]')
            .find('button[data-test^="add-to-cart"], button[data-test^="remove"]')
            .click();
    }
    
    goToCart(): void {
        this.cartIcon.click();
    }
}