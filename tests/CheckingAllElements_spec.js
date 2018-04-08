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

    // header
    it('check that text is appeared in header', function () {
        expect(mainPage.header.name.isPresent()).toBeTruthy();
    });

    it('check text in header', function () {
        expect(mainPage.header.getTextFromElement(mainPage.header.name)).toBe("Brands");
    });

    it('check that image is appeared in header', function () {
        expect(mainPage.header.image.isPresent()).toBeTruthy();
    });

    it('check that loginBtn is appeared in header', function () {
        expect(mainPage.header.loginBtn.isPresent()).toBeTruthy();
    });

    it('check that signUpBtn is appeared in header', function () {
        expect(mainPage.header.signUpBtn.isPresent()).toBeTruthy();
    });

    //slider
    it('check that linkToPreviousSlide is appeared in slider', function () {
        expect(mainPage.slider.linkToPreviousSlide.isPresent()).toBeTruthy();
    });

    it('check that linkToNextSlide is appeared in slider', function () {
        expect(mainPage.slider.linkToNextSlide.isPresent()).toBeTruthy();
    });

    it('check that logos "Mashable" is appeared in slider', function () {
        expect(mainPage.slider.logosMashable.isPresent()).toBeTruthy();
    });

    it('check that logos "Enterpreneur" is appeared in slider', function () {
        expect(mainPage.slider.logosEnterpreneur.isPresent()).toBeTruthy();
    });

    it('check that logos "Forbes" is appeared in slider', function () {
        expect(mainPage.slider.logosForbes.isPresent()).toBeTruthy();
    });

    it('check that logos "Inc." is appeared in slider', function () {
        expect(mainPage.slider.logosInc.isPresent()).toBeTruthy();
    });

    it('check that logos "women2.0" is appeared in slider', function () {
        expect(mainPage.slider.logosWomen2_0.isPresent()).toBeTruthy();
    });

    it('check that button "signUpFree" is appeared in slider', function () {
        expect(mainPage.slider.signUpFree.isPresent()).toBeTruthy();
    });

    it('check that call link is appeared in slider', function () {
        expect(mainPage.slider.callLink.isPresent()).toBeTruthy();
    });

    it('verify text of call link in slider is right', function () {
        expect(mainPage.slider.getTextFromElement(mainPage.slider.callLink)).toBe("Or set up a call");
    });

    //about work
    it('check that title is appeared in container "about work"', function () {
        browser.actions().mouseMove(mainPage.containerAboutWork.title).perform();
        expect(mainPage.containerAboutWork.title.isDisplayed()).toBeTruthy();
    });

    it('verify text of title in container "about work" is right', function () {
        expect(mainPage.containerAboutWork.getTextFromElement(mainPage.containerAboutWork.title)).toBe("How does Klickly work?");
    });

    it('check that main text is appeared in container "about work"', function () {
        expect(mainPage.containerAboutWork.mainTextLbl.isPresent()).toBeTruthy();
    });

    it('verify text of main text in container "about work" is right', function () {
        expect(mainPage.containerAboutWork.getTextFromElement(mainPage.containerAboutWork.mainTextLbl)).toBe("Our patented, cutting-edge technology lets people buy directly within your ads, making it easier for customers to see and buy your products on some of the most well known websites in the world.");
    });

    // it('check that video is appeared in container "about work"', function () {
    //     expect(mainPage.containerAboutWork.videoContainer.isPresent()).toBeTruthy();
    // });
    //
    // it('check that button to set pause in video is appeared in container "about work"', function () {
    //     expect(mainPage.containerAboutWork.setPauseVideoBtn.isPresent()).toBeTruthy();
    // });
});