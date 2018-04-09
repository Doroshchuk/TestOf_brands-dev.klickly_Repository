const Header = require('./objectsOfMainPage/Header.js');
const Slider = require('./objectsOfMainPage/Slider.js');
const ContainerAboutHowWork = require('./objectsOfMainPage/ContainerAboutHowWork');
const ContainerAboutActuallyWork = require('./objectsOfMainPage/ContainerAboutActuallyWork');

class MainPage{
    constructor(){
        this.header = new Header();
        this.slider = new Slider();
        this.containerAboutWork = new ContainerAboutHowWork();
        this.containerAboutActuallyWork = new ContainerAboutActuallyWork();
        this.messageBox = element(by.xpath("//div[@class='block-errors']//div[@class='popup-block error']"));
        this.message = element(by.xpath("//div[@class='block-errors']//div[@class='popup-block__info']//ul[@class='popup-block__list']//li"));
    }
}

module.exports = MainPage;