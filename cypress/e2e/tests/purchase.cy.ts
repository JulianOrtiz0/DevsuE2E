import { PageManager } from '../pages/PageManager'; 
import data from '../../fixtures/data.json';

const pm = new PageManager();
describe('Complete purchase flow', async() => {

    it('should complete a full purchase flow', () => {
        pm.LoginPage.visit();
        pm.LoginPage.login(data.userName, data.password);

        data.products.forEach(product =>{
            pm.ProductsPage.addItemToCart(product)
        });

        pm.ProductsPage.goToCart();
        pm.CartPage.proceedToCheckout();
        pm.CheckoutPage.fillCheckoutForm(
            data.clientInfo.firstName,
            data.clientInfo.lastName,
            data.clientInfo.postalCode
        );

        pm.CheckoutPage.completePurchase();
        
        pm.CheckoutPage.completedOrderHeader.should('have.text', 'Thank you for your order!');
        pm.CheckoutPage.completedOrderText.should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    
    
    })
})