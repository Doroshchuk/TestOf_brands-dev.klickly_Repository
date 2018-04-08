const Header = require('./objectsOfMainPage/Header.js');
const Slider = require('./objectsOfMainPage/Slider.js');
const ContainerAboutHowWork = require('./objectsOfMainPage/ContainerAboutHowWork');

class MainPage{
    constructor(){
        this.header = new Header();
        this.slider = new Slider();
        this.containerAboutWork = new ContainerAboutHowWork();
    }
}

module.exports = MainPage;