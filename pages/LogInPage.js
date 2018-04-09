class LogInPage{
    constructor(){
        this.title = element(by.xpath("//h2[@class='popup__title']"));
        this.mainText = element(by.xpath("//p[@class='popup__subtitle']"));
        this.storeAddressTF = element(by.xpath("//label[contains(@class,'input-label')]//input[@type='text']"));
        this.emailAddressTF = element(by.xpath("//form//input[@name='email']"));
        this.passwordTf = element(by.xpath("//form//input[@type='password']"));
        this.logInWithShopifyBtn = element(by.xpath("//button[text()='Log in with Shopify']"));
        this.logInBtn = element(by.xpath("//form//button[text()='Login']"));

        this.messageBox = element(by.xpath("//div[@class='block-errors']//div[@class='popup-block error']"));
        this.messageItems = element.all(by.xpath("//div[@class='block-errors']//div[@class='popup-block__info']//ul[@class='popup-block__list']//li"));
        this.message = element(by.xpath("//div[@class='block-errors']//div[@class='popup-block error']//p[@class='popup-block__info']"));
    }
}

module.exports = LogInPage;