class SignUpPage{
    constructor(){
        this.formTitle = element(by.xpath("//div[@class='container']//div[@class='form__row']//h2[@class='popup__title']"));
        this.shopifyTF = element(by.xpath("//label[contains(@class,'input-label')]//input[@name='shopifyStoreName']"));
        this.shopifyCompanyNameTF = element(by.xpath("//html//div[@class='popup__box']/form/input[1]"));
        this.shopifyAgreementCheckbox = element(by.xpath("//html//div[@class='popup__box']/form/div[@class='popup__row popup__row__left']/label[@class='customLabel']"));
        this.signUpWithShopifyBtn = element(by.xpath("//button[@type='submit'][contains(text(),'Sign up with Shopify')]"));

        this.firstNameTF = element(by.xpath("//html//div[@class='popup__row']/input[@name='firstName']"));
        this.lastNameTF = element(by.xpath("//html//div[@class='popup__row']/input[@name='lastName']"));
        this.companyNameTF = element(by.xpath("//html//div[@class='popup__box']/div/form/input[1]"));
        this.emailTF = element(by.xpath("//html//form/input[@name='email']"));
        this.createPasswordTF = element(by.xpath("//html//div[@class='popup__box']/div//label[@class='label-with-icon']/input[@name='password']"));
        this.confirmPasswordTF = element(by.xpath("//html//div[@class='popup__box']/div//label[@class='label-with-icon']/input[@name='confirmedPassword']"));
        this.agreementCheckbox = element(by.xpath("//div[@class='popup__box']//div//form//div[@class='popup__row popup__row__left']//label[@class='customLabel']"));
        this.createAccount = element(by.xpath("//button[@type='submit'][contains(text(),'Create Account')]"));

        this.messageBox = element(by.xpath("//div[@class='block-errors']//div[@class='popup-block error']"));
        this.message = element.all(by.xpath("//div[@class='block-errors']//div[@class='popup-block error']//ul[@class='popup-block__list']//li"));
    }
}

module.exports = SignUpPage;