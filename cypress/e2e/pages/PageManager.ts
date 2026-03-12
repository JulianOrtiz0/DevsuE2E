import { LoginPage } from './LoginPage';
import { ProductsPage } from './ProductsPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';

export class PageManager {
    private readonly loginPage: LoginPage;
    private readonly productsPage: ProductsPage;
    private readonly cartPage: CartPage;
    private readonly checkoutPage: CheckoutPage;

    constructor() {
        this.loginPage = new LoginPage();
        this.productsPage = new ProductsPage();
        this.cartPage = new CartPage();
        this.checkoutPage = new CheckoutPage();
    }

    get LoginPage(): LoginPage {
        return this.loginPage;
    }

    get ProductsPage(): ProductsPage {
        return this.productsPage;
    }

    get CartPage(): CartPage {
        return this.cartPage;
    }

    get CheckoutPage(): CheckoutPage {
        return this.checkoutPage;
    }
}