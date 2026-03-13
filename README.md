# SauceDemo E2E Automation Project

Este proyecto es una suite de pruebas automatizadas de punta a punta (E2E) para el sitio web [SauceDemo](https://www.saucedemo.com/), desarrollada con **Cypress** y **TypeScript**.

## 🚀 Tecnologías Utilizadas

*   **Framework de Pruebas:** [Cypress](https://www.cypress.io/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Reportes:** [Allure Report](https://github.com/allure-framework/allure2)
*   **Patrón de Diseño:** Page Object Model (POM)

## 📁 Estructura del Proyecto

El proyecto sigue una estructura organizada basada en el patrón Page Object Model para asegurar la mantenibilidad y reutilización del código:

```text
├── cypress/
│   ├── e2e/
│   │   ├── pages/          # Clases de Page Object (POM)
│   │   │   ├── BasePage.ts
│   │   │   ├── LoginPage.ts
│   │   │   ├── ProductsPage.ts
│   │   │   ├── CartPage.ts
│   │   │   ├── CheckoutPage.ts
│   │   │   └── PageManager.ts  # Orquestador de páginas
│   │   └── tests/          # Archivos de prueba (.cy.ts)
│   │       └── purchase.cy.ts
│   ├── fixtures/           # Datos de prueba (JSON)
│   └── support/            # Configuración y comandos personalizados
├── allure-results/         # Resultados temporales de Allure (generado al correr tests)
├── allure-report/          # Reporte HTML final de Allure (generado al procesar resultados)
├── cypress.config.js       # Configuración principal de Cypress
└── package.json            # Dependencias y scripts
```

## 🛠️ Instalación

1.  Clona el repositorio.
2.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```

## 🧪 Ejecución de Pruebas

El proyecto cuenta con scripts preconfigurados en `package.json` para facilitar la ejecución:

*   **Ejecutar pruebas localmente (Headless):**
    ```bash
    npm run test:local
    ```
*   **Ejecutar pruebas en entorno QA:**
    ```bash
    npm run test:qa
    ```
*   **Abrir Cypress Test Runner:**
    ```bash
    npm run open:qa
    ```

## 📊 Reportes con Allure

Para generar y ver los reportes detallados de Allure, sigue estos pasos:

1.  **Limpiar resultados previos:**
    ```bash
    npm run allure:clear
    ```
2.  **Ejecutar los tests (generará la carpeta `allure-results`):**
    ```bash
    npm run test:qa
    ```
3.  **Generar el reporte HTML:**
    ```bash
    npm run allure:report
    ```
4.  **Abrir el reporte en el navegador:**
    ```bash
    npm run allure:open
    ```

## ✨ Características Principales

*   **PageManager:** Se utiliza una clase centralizada para instanciar y acceder a todos los Page Objects, reduciendo la redundancia en los archivos de prueba.
*   **Data Driven Testing:** Uso de `fixtures` para desacoplar los datos de la lógica de prueba.
*   **Selectors Robustos:** Uso de atributos `data-test` para selectores estables y resistentes a cambios en el UI.
*   **Custom Hooks:** Integración en `beforeEach` para enriquecer los reportes de Allure con metadatos específicos (Epics, Features, Stories).

---
Desarrollado como parte del proceso de automatización E2E.
