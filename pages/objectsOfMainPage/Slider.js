class Slider{
    constructor(){
        this.linkToPreviousSlide = element(by.xpath("//*[@id=\"react-root\"]//span[@class=\"prev prev-dark\"]"));
        this.linkToNextSlide = element(by.xpath("//*[@id=\"react-root\"]//span[@class=\"next next-dark\"]"));
        this.sliderContainer = element(by.xpath("//*[@id=\"react-root\"]//div[@class='slider__container']"));
        this.h1 = element(by.xpath("//h1[@class='banner-content__title']"));

        this.logosMashable = element(by.xpath("//div[@class='logos']//img[@src='/f917247d11754f6edba77088518d01ae.png']"));
        this.logosEnterpreneur = element(by.xpath("//div[@class='logos']//img[@src='/5e06d00ba5e25a4e0f094df267b7e01b.png']"));
        this.logosForbes = element(by.xpath("//div[@class='logos']//img[@src='/92b6c050c5da9523587314caa0d58587.png']"));
        this.logosInc = element(by.xpath("//div[@class='logos']//img[@src='/b4a01659f12792c7eb31b556127ef655.png']"));
        this.logosWomen2_0 = element(by.xpath("//div[@class='logos']//img[@src='/c26bcc82f41486275ff28d282490b200.png']"));

        this.signUpFree = element(by.xpath("//div[@class='banner-content__desc']//div[@class='actions']//button[@type='button']"));
        this.callLink = element(by.xpath("//div[@class='banner-content__desc']//div[@class='actions']//a[@href='https://app.hubspot.com/meetings/taylor32']"));
    }

    getTextFromElement(element){
        return element.getText();
    }
}

module.exports = Slider;