const MainPage = require('../pages/MainPage.js');
describe('Check all elements of Main page', function () {
    const mainPage = new MainPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://brands-dev.klickly.com/');
    });

    it('check that page url is right', function () {
        expect(browser.driver.getTitle()).toBe("Klickly Brands");
    });

    it('check that text is appeared in header', function () {
        expect(mainPage.header.name.isPresent()).toBeTruthy();
    });

    it('check text in header', function () {
        expect(mainPage.header.getHeaderText()).toBe("Brands");
    });

    it('check that image is appeared in header', function () {
        expect(mainPage.header.image.isPresent()).toBeTruthy();
    })

    it('check that loginBtn is appeared in header', function () {
        expect(mainPage.header.loginBtn.isPresent()).toBeTruthy();
    })

    it('check that signUpBtn is appeared in header', function () {
        expect(mainPage.header.signUpBtn.isPresent()).toBeTruthy();
    })
});