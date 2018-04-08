const Header = require('./objectsOfMainPage/Header.js');
const Slider = require('./objectsOfMainPage/Slider.js');

class MainPage{
    constructor(){
        this.header = new Header();
        this.slider = new Slider();
    }
}

module.exports = MainPage;