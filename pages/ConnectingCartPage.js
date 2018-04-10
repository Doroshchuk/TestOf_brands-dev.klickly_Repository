class ConnectingCartPage{
    constructor(){
        this.title = element(by.xpath("//h2[@class='form__title']"));
        this.mainText = element(by.xpath("//p[@class='form__text'][1]"));
    }
}

module.exports = ConnectingCartPage;