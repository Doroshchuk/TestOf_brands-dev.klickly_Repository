class ContainerAboutHowWork{
    constructor(){
        this.title = element(by.xpath("//div[@class='how-working']//h2[@class='text-bold-light']"));
        this.mainTextLbl = element(by.xpath("//div[@class='how-working']//p[@class='text-normal text-middle']"));
        this.videoContainer = element(by.xpath("//div[@class='ytp-cued-thumbnail-overlay']//div"));
        this.setPauseVideoBtn = element(by.xpath("//div[@class='ytp-cued-thumbnail-overlay']//button[@class='ytp-large-play-button ytp-button']"));
    }

    getTextFromElement(element){
        return element.getText();
    }
}

module.exports = ContainerAboutHowWork;