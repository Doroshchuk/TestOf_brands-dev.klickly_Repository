class VerifyPage{
    constructor(){
        this.title = element(by.xpath("//h2[@class='form__title']"));
        this.mainText = element(by.xpath("//p[@class='form__text']"));
        this.secirityCodeTF = element(by.xpath("//input[@placeholder='Security code']"));
        this.linkToGenerateNewCode = element(by.xpath("//a[@href='javascript:void(0);']"));
        this.verifyBtn = element(by.xpath("//button[@type='button']"));
        this.goToMainPageBtn = element(by.xpath("//a[@class='filled  btn btn-big-form']"));
    }
}

module.exports = VerifyPage;