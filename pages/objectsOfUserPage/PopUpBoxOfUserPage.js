class PopUpBoxOfUserPage{
    constructor(){
        this.popUpBox = element(by.xpath("//div[@class='popup__box']"));
        this.titleOfPopUpBox = element(by.xpath("//div[@class='popup__box']//h2[@class='popup__title']"));
        this.exploreTheDashboardBtn = element(by.xpath("//a[@class='filled disabled btn btn-middle']"));
        this.launchCompaignBtn = element(by.xpath("//a[@class='filled  btn btn-middle'][contains(text(),'Launch campaign!')]"));
        this.doNotShowAgainCheckbox = element(by.xpath("//div[@class='popup__box']//label[@class='customLabel']"));
    }
}

module.exports = PopUpBoxOfUserPage;