const MainPage = require('../pages/MainPage.js');
describe('Check all elements of Main page', function () {
    const mainPage = new MainPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://brands-dev.klickly.com/');
    });

    it('check text in header', function () {
        expect(mainPage.header.getHeaderText()).toBe("Brands");
    });
});