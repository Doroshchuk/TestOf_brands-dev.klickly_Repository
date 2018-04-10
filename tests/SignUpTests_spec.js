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

    // сообщение об ошибке
    it('sign up with shopify but without agreement', function () {
        Helpers.signUpWithShopify("natalia-payment-store", "Klickly Brands", false);
        browser.wait(() => signUpPage.messageBox.isPresent(), 6000, 'MessageBox not found');
        expect(signUpPage.messageBox.getCssValue('background-color')).toEqual("rgba(246, 166, 35, 1)")
        && expect(Helpers.getTextFromElement(signUpPage.message.get(0))).toEqual("You must indicate that you have read and agree to the Terms of Service and Privacy Policy");
    });

    // сообщение об ошибке
    it('sign up with empty shopify but with agreement and companyName', function () {
        Helpers.signUpWithShopify("", "Klickly Brands", true);
        browser.wait(() => signUpPage.messageBox.isPresent(), 6000, 'MessageBox not found');
        expect(signUpPage.messageBox.getCssValue('background-color')).toEqual("rgba(246, 166, 35, 1)")
        && expect(Helpers.getTextFromElement(signUpPage.message.get(0))).toEqual("Store address can't be blank");
    });

    // сообщение об ошибке
    it('sign up with shopify and agreement but with empty companyName', function () {
        Helpers.signUpWithShopify("natalia-payment-store", "", true);
        browser.wait(() => signUpPage.messageBox.isPresent(), 6000, 'MessageBox not found');
        expect(signUpPage.messageBox.getCssValue('background-color')).toEqual("rgba(246, 166, 35, 1)")
        && expect(Helpers.getTextFromElement(signUpPage.message.get(0))).toEqual("Company name can't be blank");
    });

    // сообщение об ошибке
    it('sign up with shopify but without agreement and with empty companyName', function () {
        Helpers.signUpWithShopify("natalia-payment-store", "", false);
        browser.wait(() => signUpPage.messageBox.isPresent(), 6000, 'MessageBox not found');
        expect(signUpPage.messageBox.getCssValue('background-color')).toEqual("rgba(246, 166, 35, 1)")
        && expect(Helpers.getTextFromElement(signUpPage.message.get(0))).toEqual("Company name can't be blank")
        && expect(Helpers.getTextFromElement(signUpPage.message.get(1))).toEqual("You must indicate that you have read and agree to the Terms of Service and Privacy Policy");
    });
});