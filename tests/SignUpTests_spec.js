const MainPage = require('../pages/MainPage.js');
const VerifyPage = require('../pages/VerifyPage.js');
const SignUpPage = require('../pages/SignUpPage.js');
const LogInPage = require('../pages/LogInPage.js');
const Helpers = require('../pages/Helpers.js');
const ShopifyPage = require('../pages/ShopifyPage.js');

describe('Check Sign Up form validation', function () {
    const mainPage = new MainPage();
    const logInPage = new LogInPage();
    const signUpPage = new SignUpPage();
    const verifyPage = new VerifyPage();
    const shopifyPage = new ShopifyPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(function () {
        browser.get('https://brands-dev.klickly.com/');
        mainPage.header.signUpBtn.click();
    });

    // поле "email" в фокусе
    it('sign up with shopify', function () {
        Helpers.signUpWithShopify("natalia-payment-store", "Klickly Brands", true);
        browser.wait(() => shopifyPage.mainText.isPresent(), 10000, 'MainContent not found');
        expect(shopifyPage.emailTF.getAttribute('id')).toEqual(browser.driver.switchTo().activeElement().getAttribute('id'));
    });
});