class MainContentOfUserPage{
    constructor(){
        this.title = element(by.xpath("//div[@class='main-page']//div[@class='home__head-desc']//h3[@class='main-content__title']"));
    }
}

module.exports = MainContentOfUserPage;