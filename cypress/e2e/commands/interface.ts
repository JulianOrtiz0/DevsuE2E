declare namespace Cypress {
    interface Chainable {
        userlogin(): Chainable<Element>;
        addItemToCart(product: string[]): Chainable<Element>;
        checkout(firstName: string, lastName: string, postalCode: string): Chainable<Element>;
        completePurchase(): Chainable<Element>;
        validatePurchase(messageHeader: string, messageBody: string): Chainable<Element>;
    
    
    }
}