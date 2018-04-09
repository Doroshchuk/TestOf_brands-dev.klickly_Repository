class HeaderOfUserPage{
    constructor(){
        this.nameOfUser = element(by.xpath("//div[@class='main-page']//div[@class='header-profile']//div[@class='header-profile__name']"));
        this.logo = element(by.xpath("//div[@class='main-page']//div[@class='header-profile']//img[@class='header-profile__logo']"));
        this.menuBlock = element(by.xpath("//div[@class='block-menu is-opened']"));
        this.accountMenuFunctions = element.all(by.xpath("//div[@class='block-menu is-opened']//ul[@class='account-menu']//li"));
    }
}

module.exports = HeaderOfUserPage;