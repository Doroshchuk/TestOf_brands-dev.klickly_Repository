class UserPage{
    constructor(){
        this.popUpBox = element(by.xpath("//div[@class='popup__box']"));
        this.titleOfPopUpBox = element(by.xpath("//h2[@class='popup__title']"));
    }
}

module.exports = UserPage;