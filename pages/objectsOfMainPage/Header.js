class Header {
    constructor() {
        this.loginBtn = element(By.xpath("//a[@href='/page/sign-in']"));
        this.signUpBtn = element(By.xpath("//a[@href='/page/sign-up']"));
        this.image = element(by.css("img[src*='/36dee93c6c9748b0255ce1240d63c2b7.svg']"));
        this.name = element(by.xpath("//span[@class='header-logo-text']"));
    }

     getTextFromElement(element) {
        return element.getText();
     }
}

module.exports = Header;