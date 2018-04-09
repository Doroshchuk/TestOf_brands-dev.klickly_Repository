class ShopifyPage{
    constructor(){
        this.title = element(by.xpath("//h1[@class='dialog-heading']"));
        this.mainText = element(by.xpath("//h2[@class='dialog-subheading']"));
        this.emailTF = element(by.xpath("//input[@id='Login']"));
        this.password = element(by.xpath("//input[@id='Password']"));
        this.logInBtn = element(by.xpath("//button[@id='LoginSubmit']"));
        this.rememberCheckbox = element(by.xpath("//input[@id='remember_checkbox']"));
        this.forgotPasswordLink = element(by.xpath("//a[@id='forgot_password']"));
    }
}

module.exports = ShopifyPage;