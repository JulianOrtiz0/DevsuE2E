import { PageManager } from '../pages/PageManager'; 
import { PurchaseAssertions } from '../validators/PurchaseAssertions';
import data from '../../fixtures/data.json';

const pm = new PageManager();
Cypress.Commands.add('userlogin', () => {
    pm.LoginPage.visit();
    pm.LoginPage.login(data.userName, data.password);
})

Cypress.Commands.add('addItemToCart', (products) => {
    products.forEach(product =>{
            pm.ProductsPage.addItemToCart(product)
    });
})

Cypress.Commands.add('checkout', (firstName: string, lastName: string, postalCode: string) => {
    pm.ProductsPage.goToCart();
    pm.CartPage.proceedToCheckout();
    pm.CheckoutPage.fillCheckoutForm(
        firstName,
        lastName,
        postalCode
    );
})


Cypress.Commands.add('completePurchase', () => {
    pm.CheckoutPage.completePurchase();
   
})

Cypress.Commands.add('validatePurchase', (messageHeader: string, messageBody: string) => {
    PurchaseAssertions.haveText(pm.CheckoutPage.completedOrderHeader, messageHeader);
    PurchaseAssertions.haveText(pm.CheckoutPage.completedOrderText, messageBody);
})

