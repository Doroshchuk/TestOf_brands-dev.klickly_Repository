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
    }
}

module.exports = MainPage;