class ContainerAboutHowWork{
    constructor(){
        this.title = element(by.xpath("//div[@class='how-working']//h2[@class='text-bold-light']"));
        this.mainTextLbl = element(by.xpath("//div[@class='how-working']//p[@class='text-normal text-middle']"));
        this.videoFrame = element(by.xpath("//iframe[@src='https://www.youtube-nocookie.com/embed/0Z55R30dKwU?rel=0&showinfo=0']"));
    }
}

module.exports = ContainerAboutHowWork;