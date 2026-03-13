export class PurchaseAssertions{
    public static haveText(selector: string, text: string):void{
        cy.get(selector).should('have.text', text);
    }
}