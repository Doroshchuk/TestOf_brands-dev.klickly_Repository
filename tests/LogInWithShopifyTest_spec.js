const MainPage = require('../pages/MainPage.js');
const UserPage = require('../pages/UserPage.js');
const LogInPage = require('../pages/LogInPage.js');

describe('Login at https://brands-dev.klickly.com with shopify, using email / password', function () {
    const mainPage = new MainPage();
    const userPage = new UserPage();
    const logInPage = new LogInPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://brands-dev.klickly.com/');
        mainPage.header.logInBtn.click();
    });

    it('log in with correct credentials', function () {

    });
})