
import '../e2e/commands/commands';
require('@shelex/cypress-allure-plugin');

// Opcional: Configuración adicional de Allure
beforeEach(() => {
  if (cy.env(['allure']) && typeof allure !== 'undefined') {
    allure.epic('E2E Tests');
    allure.feature('Purchase Flow');
    allure.story(cy.currentTest.title);
  }
});