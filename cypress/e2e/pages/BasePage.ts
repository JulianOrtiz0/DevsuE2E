export class BasePage {
    visit(): void {
        cy.visit('/');
    }

    visitPage(path: string): void {
        cy.visit(`/${path}`);
    }
}