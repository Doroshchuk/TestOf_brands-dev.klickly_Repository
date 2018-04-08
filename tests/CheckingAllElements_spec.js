const MainPage = require('../pages/MainPage.js');
const Helpers = require('../pages/Helpers');

describe('Check all elements on landing page using locators you wish', function () {
    const mainPage = new MainPage();

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://brands-dev.klickly.com/');
    });

    it('check that page`s title is correct', function () {
        expect(browser.driver.getTitle()).toBe("Klickly Brands");
    });

    // header
    it('check that text is appeared in header', function () {
        expect(mainPage.header.name.isDisplayed()).toBeTruthy();
    });

    it('check text in header', function () {
        expect(Helpers.getTextFromElement(mainPage.header.name)).toBe("Brands");
    });

    it('check that image is appeared in header', function () {
        expect(mainPage.header.image.isDisplayed()).toBeTruthy();
    });

    it('check that logInBtn is appeared in header', function () {
        expect(mainPage.header.logInBtn.isDisplayed()).toBeTruthy();
    });

    it('check that signUpBtn is appeared in header', function () {
        expect(mainPage.header.signUpBtn.isDisplayed()).toBeTruthy();
    });

    //slider
    it('check that linkToPreviousSlide is appeared in slider', function () {
        expect(mainPage.slider.linkToPreviousSlide.isDisplayed()).toBeTruthy();
    });

    it('check that linkToNextSlide is appeared in slider', function () {
        expect(mainPage.slider.linkToNextSlide.isDisplayed()).toBeTruthy();
    });

    it('check that logos "Mashable" is appeared in slider', function () {
        expect(mainPage.slider.logosMashable.isDisplayed()).toBeTruthy();
    });

    it('check that logos "Enterpreneur" is appeared in slider', function () {
        expect(mainPage.slider.logosEnterpreneur.isDisplayed()).toBeTruthy();
    });

    it('check that logos "Forbes" is appeared in slider', function () {
        expect(mainPage.slider.logosForbes.isDisplayed()).toBeTruthy();
    });

    it('check that logos "Inc." is appeared in slider', function () {
        expect(mainPage.slider.logosInc.isDisplayed()).toBeTruthy();
    });

    it('check that logos "women2.0" is appeared in slider', function () {
        expect(mainPage.slider.logosWomen2_0.isDisplayed()).toBeTruthy();
    });

    it('check that button "signUpFree" is appeared in slider', function () {
        expect(mainPage.slider.callLink.isDisplayed()).toBeTruthy();
    });

    it('check that call link is appeared in slider', function () {
        expect(mainPage.slider.callLink.isDisplayed()).toBeTruthy();
    });

    it('verify text of call link in slider is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.slider.callLink)).toBe("Or set up a call");
    });

    //about work
    it('check that title is appeared in container "about work"', function () {
        browser.actions().mouseMove(mainPage.containerAboutWork.title).perform();
        expect(mainPage.containerAboutWork.title.isDisplayed()).toBeTruthy();
    });

    it('verify text of title in container "about work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutWork.title)).toBe("How does Klickly work?");
    });

    it('check that main text is appeared in container "about work"', function () {
        expect(mainPage.containerAboutWork.mainTextLbl.isDisplayed()).toBeTruthy();
    });

    it('verify text of main text in container "about work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutWork.mainTextLbl)).toBe("Our patented, cutting-edge technology lets people buy directly within your ads, making it easier for customers to see and buy your products on some of the most well known websites in the world.");
    });

    it('check that video is appeared in container "about work"', function () {
        expect(mainPage.containerAboutWork.videoFrame.isDisplayed()).toBeTruthy();
    });

    //Actually work
    it('check that title is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.title.isDisplayed()).toBeTruthy();
    });

    it('verify text of title in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.title)).toBe("Ads that actually work!");
    });

    it('check that image in left block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.leftBlock.img.isDisplayed()).toBeTruthy();
    });

    it('verify that image in left block is correct in container "actually work"', function () {
        expect(Helpers.getSourceOfImage(mainPage.containerAboutActuallyWork.leftBlock.img)).toBe("https://brands-dev.klickly.com/cf9c53351d840d97f80b1fd91653e10d.svg");
    });

    it('check that title in left block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.leftBlock.title.isDisplayed()).toBeTruthy();
    });

    it('verify title in left block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.leftBlock.title)).toBe("Risk free");
    });

    it('check that main text in left block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.leftBlock.text.isDisplayed()).toBeTruthy();
    });

    it('verify main text in left block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.leftBlock.text)).toBe("You set the terms, we only make money when you do");
    });

    it('check that image in middle block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.middleBlock.img.isDisplayed()).toBeTruthy();
    });

    it('verify that image in middle block is correct in container "actually work"', function () {
        expect(Helpers.getSourceOfImage(mainPage.containerAboutActuallyWork.middleBlock.img)).toBe("https://brands-dev.klickly.com/5c0d11a7aff62339b223a79f6387a7e3.svg");
    });

    it('check that title in middle block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.middleBlock.title.isDisplayed()).toBeTruthy();
    });

    it('verify title in middle block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.middleBlock.title)).toBe("More buyers");
    });

    it('check that main text in middle block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.middleBlock.text.isDisplayed()).toBeTruthy();
    });

    it('verify main text in middle block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.middleBlock.text)).toBe("Promote products on top sites and grow your retargeting pool.");
    });

    it('check that image in right block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.rightBlock.img.isDisplayed()).toBeTruthy();
    });

    it('verify that image in right block is correct in container "actually work"', function () {
        expect(Helpers.getSourceOfImage(mainPage.containerAboutActuallyWork.rightBlock.img)).toBe("https://brands-dev.klickly.com/5aa5c93ce76029a5407a791f236ee1d1.svg");
    });

    it('check that title in right block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.rightBlock.title.isDisplayed()).toBeTruthy();
    });

    it('verify title in right block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.rightBlock.title)).toBe("Instant set-up");
    });

    it('check that main text in right block is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.rightBlock.text.isDisplayed()).toBeTruthy();
    });

    it('verify main text in right block in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.rightBlock.text)).toBe("Connect your store with one click; launch first campaign in minutes.");
    });

    it('check that main text is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.mainText.isDisplayed()).toBeTruthy();
    });

    it('verify main text in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.mainText)).toBe("The world's 1st CPA advertising platform - set your own commission!");
    });

    it('check that button "signUpFree" is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.callLink.isDisplayed()).toBeTruthy();
    });

    it('check that call link is appeared in container "actually work"', function () {
        expect(mainPage.containerAboutActuallyWork.callLink.isDisplayed()).toBeTruthy();
    });

    it('verify text of call link in container "actually work" is correct', function () {
        expect(Helpers.getTextFromElement(mainPage.containerAboutActuallyWork.callLink)).toBe("Or set up a call");
    });
});