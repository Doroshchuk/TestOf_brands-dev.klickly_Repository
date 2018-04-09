const MainPage = require('../pages/MainPage.js');
const UserPage = require('../pages/UserPage.js');
const LogInPage = require('../pages/LogInPage.js');
const Helpers = require('../pages/Helpers');
const ShopifyPage = require('../pages/ShopifyPage.js');

describe('Login at https://brands-dev.klickly.com with shopify, using email / password', function () {
    const mainPage = new MainPage();
    const userPage = new UserPage();
    const logInPage = new LogInPage();
    const shopifyPage = new ShopifyPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://brands-dev.klickly.com/');
        mainPage.header.logInBtn.click();
    });

    beforeEach(function () {
        if(userPage.isAuthenticated === true){
            Helpers.chooseFunctionInAccountMenu("Log out");
            userPage.isAuthenticated = false;
        }
    });

    it('check that "logIn" page is correct', function () {
        expect(logInPage.title.getText()).toBe("Log in") && expect(logInPage.mainText.getText()).toBe("Please log in into your account");
    });

    // поле "email" в фокусе
    it('input correct shopify', function () {
        Helpers.logInWithShopify("natalia-payment-store");
        expect(shopifyPage.emailTF.getAttribute('id')).toEqual(browser.driver.switchTo().activeElement().getAttribute('id'));
    });

    // приветствие на странице пользователя
    it('log in with correct shopify using correct email and password', function () {
        Helpers.logInWithShopify("natalia-payment-store");
        Helpers.logInUsingEmailAndPassword("natalia.roshchyna@itrexgroup.com", "qwerty1234567");
        browser.driver.sleep(20000);
        userPage.isAuthenticated = true;
        // Helpers.closePopUpInUserPage();
        expect(userPage.mainContent.title.getText()).toBe("Welcome, Nata!");
    });

    // поле "email" выделено розовым цветом
    it('log in with correct shopify using incorrect email and password', function () {
        Helpers.logInWithShopify("natalia-payment-store");
        Helpers.logInUsingEmailAndPassword("gfhd@gmail.com", "hfgf");
        expect(shopifyPage.emailTF.getCssValue('background-color')).toEqual("rgba(251, 234, 229, 1)");
    });

    // поле "password" выделено розовым цветом
    it('log in with correct shopify using incorrect email and password', function () {
            Helpers.logInWithShopify("natalia-payment-store");
            Helpers.logInUsingEmailAndPassword("gfhd@gmail.com", "kfjgh");
            expect(shopifyPage.password.getCssValue('background-color')).toEqual("rgba(251, 234, 229, 1)");
        });

    // поле "email" в фокусе
    it('log in with correct shopify using empty email and password', function () {
        Helpers.logInWithShopify("natalia-payment-store");
        Helpers.logInUsingEmailAndPassword("", "");
        expect(shopifyPage.emailTF.getAttribute('id')).toEqual(browser.driver.switchTo().activeElement().getAttribute('id'));
    });

    //поля "email" и "password" выделены розовым цветом, но поле "email" будет содержать введённое пользователем значение
    it('log in with correct shopify using correct email and incorrect password', function () {
        Helpers.logInWithShopify("natalia-payment-store");
        Helpers.logInUsingEmailAndPassword("natalia.roshchyna@itrexgroup.com", "");
        expect(shopifyPage.emailTF.getCssValue('background-color')).toEqual("rgba(251, 234, 229, 1)")
            && expect(Helpers.getTextFromElement(shopifyPage.emailTF)).toBe("natalia.roshchyna@itrexgroup.com");
    });


});