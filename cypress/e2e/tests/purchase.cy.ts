import { PageManager } from '../pages/PageManager'; 
import data from '../../fixtures/data.json';

const pm = new PageManager();
describe('Complete purchase flow', async() => {

    it('should complete a full purchase flow', () => {
        cy.userlogin();
        cy.addItemToCart(data.products)
        cy.checkout(data.clientInfo.firstName, data.clientInfo.lastName, data.clientInfo.postalCode);
        cy.completePurchase();
        cy.validatePurchase(data.messages.header, data.messages.body)    
    })
})